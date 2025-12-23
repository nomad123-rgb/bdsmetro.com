import { MetroProject } from '../types';

/**
 * PARSES DISTANCE STRING TO KILOMETERS
 * e.g., "200m" -> 0.2, "2.5km" -> 2.5, "0m (Direct)" -> 0
 */
const parseDistance = (distStr: string): number => {
  const cleanStr = distStr.toLowerCase().replace(/\s/g, '').replace('(direct)', '');
  if (cleanStr.includes('km')) {
    return parseFloat(cleanStr.replace('km', ''));
  }
  if (cleanStr.includes('m')) {
    return parseFloat(cleanStr.replace('m', '')) / 1000;
  }
  return 10; // Default penalty for unknown distance
};

/**
 * PARSES YIELD STRING TO NUMBER
 * e.g., "3.8%" -> 3.8
 */
const parseYield = (yieldStr: string | undefined): number => {
  if (!yieldStr || yieldStr === 'N/A') return 0;
  return parseFloat(yieldStr.replace('%', ''));
};

export const calculateMuiScore = (project: MetroProject) => {
  // ---------------------------------------------------------
  // METRO SCORE ALGORITHM v3.0 (GOD MODE)
  // ---------------------------------------------------------

  // 1. MOBILITY INDEX (30% Weight)
  const distanceKm = parseDistance(project.distance);
  let mobilityScore = 0;
  if (distanceKm <= 0.05) mobilityScore = 100; // Direct connection
  else if (distanceKm <= 0.3) mobilityScore = 95;
  else if (distanceKm <= 0.5) mobilityScore = 90; // Walking distance standard
  else if (distanceKm <= 1.0) mobilityScore = 75;
  else if (distanceKm <= 2.0) mobilityScore = 50;
  else mobilityScore = 30;

  // 2. LEGAL ALPHA (25% Weight)
  let legalScore = 0;
  switch (project.legalStatus) {
    case 'CERTIFIED': legalScore = 100; break; // Pink book
    case 'PENDING': legalScore = 70; break;    // SPA / Construction
    case 'WARNING': legalScore = 10; break;    // Legal dispute
  }

  // 3. FUNDAMENTAL SCORE (15% Weight)
  const fundamentalScore = ((project.locationScore + project.densityScore) / 20) * 100;

  // 4. YIELD EFFICIENCY (30% Weight)
  const yieldVal = parseYield(project.yield);
  let yieldScore = 0;
  if (yieldVal >= 6) yieldScore = 100;       // Exceptionally High
  else if (yieldVal >= 5) yieldScore = 90;   // Excellent
  else if (yieldVal >= 4) yieldScore = 75;   // Good
  else if (yieldVal >= 3) yieldScore = 50;   // Average
  else if (yieldVal >= 1.5) yieldScore = 30; // Low
  else yieldScore = 10;                      // Poor

  // ---------------------------------------------------------
  // FINAL CALCULATION
  // ---------------------------------------------------------
  let weightedScore = 
    (mobilityScore * 0.30) + 
    (legalScore * 0.25) + 
    (fundamentalScore * 0.15) + 
    (yieldScore * 0.30);

  // PENALTY ADJUSTMENTS
  const riskPenalty = (project.riskFactor - 1) * 5;
  const timePenalty = (project.timePenalty - 1) * 3;

  let finalScore = Math.round(weightedScore - riskPenalty - timePenalty);
  
  // Cap score between 0 and 99
  finalScore = Math.max(1, Math.min(finalScore, 99));

  // ---------------------------------------------------------
  // VERDICT GENERATION (AGGRESSIVE MODE)
  // ---------------------------------------------------------
  let verdict: MetroProject['verdict'];
  let colorCode: string;

  if (project.tags?.includes('TOXIC')) {
     finalScore = Math.min(finalScore, 15); // Hard cap for toxic assets
  }

  if (finalScore >= 85) {
    verdict = 'STRONG BUY';
    colorCode = 'text-green-600';
  } else if (finalScore >= 70) {
    verdict = 'ACCUMULATE';
    colorCode = 'text-blue-600';
  } else if (finalScore >= 50) {
    verdict = 'HOLD';
    colorCode = 'text-yellow-600';
  } else if (finalScore >= 30) {
    verdict = 'LIQUIDATE'; // Aggressive sell signal
    colorCode = 'text-orange-600';
  } else {
    verdict = 'TOXIC';
    colorCode = 'text-red-700';
  }

  return {
    score: finalScore,
    verdict,
    colorCode
  };
};