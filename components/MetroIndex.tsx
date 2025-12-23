import React from 'react';
import { METRO_PROJECTS } from '../constants';
import { calculateMuiScore } from '../utils/algorithm';
import { MetroProject } from '../types';
import { AlertTriangle, Skull, Info, HelpCircle, TrendingUp } from 'lucide-react';

interface MetroIndexProps {
  onProjectClick?: (project: MetroProject) => void;
}

export const MetroIndex: React.FC<MetroIndexProps> = ({ onProjectClick }) => {
  return (
    <section className="py-16 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b-2 border-black">
          <div>
             <h3 className="serif-font text-3xl font-bold text-black flex items-center">
                Metro-Yield Index™
             </h3>
             <p className="text-gray-500 text-sm mt-1 font-serif italic">
                 Dữ liệu T+0. Xếp hạng tín nhiệm dựa trên thuật toán <span className="font-bold text-black not-italic">Metro Score v3.0 (God Mode)</span>.
             </p>
          </div>
          <div className="mt-4 md:mt-0 text-right">
              <div className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Market Outlook</div>
              <div className="text-xl font-bold text-red-700 serif-font">
                BEARISH
              </div>
          </div>
        </div>

        {/* The Table - Financial Statement Style */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1000px] text-left border-collapse">
            <thead>
              <tr className="border-b border-black">
                <th className="py-3 pl-2 pr-4 text-[10px] font-bold text-black uppercase tracking-[0.2em] w-[30%]">Asset / Developer</th>
                <th className="py-3 px-4 text-[10px] font-bold text-black uppercase tracking-[0.2em] text-center w-[10%]">Distance</th>
                <th className="py-3 px-4 text-[10px] font-bold text-black uppercase tracking-[0.2em] w-[25%] flex items-center gap-1">
                    Metro Score <HelpCircle className="w-3 h-3 text-gray-400" />
                </th>
                <th className="py-3 px-4 text-[10px] font-bold text-black uppercase tracking-[0.2em] w-[10%] text-right">Yield</th>
                <th className="py-3 px-4 text-[10px] font-bold text-black uppercase tracking-[0.2em] w-[15%]">Verdict</th>
                <th className="py-3 px-4 text-[10px] font-bold text-black uppercase tracking-[0.2em] text-right w-[10%]">Price / m²</th>
              </tr>
            </thead>
            <tbody className="font-sans text-sm">
              {METRO_PROJECTS.map((project, index) => {
                const { score, verdict, colorCode } = calculateMuiScore(project);
                
                return (
                    <tr 
                        key={project.id} 
                        className="group cursor-pointer hover:bg-gray-50 border-b border-gray-100 transition-colors"
                        onClick={() => onProjectClick && onProjectClick(project)}
                    >
                    <td className="py-4 pl-2 pr-4 align-top">
                        <div className="font-bold text-black text-base group-hover:text-[#B45309] transition-colors serif-font">
                            {project.name}
                        </div>
                        <div className="text-[11px] text-gray-400 uppercase tracking-wider mt-0.5 mb-2 font-medium">
                            {project.developer}
                        </div>
                        {/* Clean Tags - No boxes, just text with dot separator */}
                        <div className="flex flex-wrap gap-x-3 gap-y-1">
                             {project.tags?.slice(0, 3).map((tag, i) => (
                                 <span key={tag} className="text-[9px] font-bold text-gray-500 uppercase tracking-wide flex items-center">
                                     {i > 0 && <span className="w-1 h-1 bg-gray-300 rounded-full mr-2"></span>}
                                     {tag}
                                 </span>
                             ))}
                        </div>
                    </td>
                    
                    <td className="py-4 px-4 text-center align-top pt-5">
                        <span className="font-mono text-xs font-bold text-gray-600 tabular-nums">
                            {project.distance}
                        </span>
                    </td>

                    <td className="py-4 px-4 align-top pt-5">
                        <div className="flex items-center space-x-3">
                            <span className={`font-black text-lg w-8 text-right tabular-nums serif-font ${colorCode}`}>{score}</span>
                            <div className="flex-1 h-1 bg-gray-200 rounded-none overflow-hidden relative">
                                <div className="absolute inset-0 bg-gray-100"></div>
                                <div 
                                    className={`h-full relative ${
                                        score >= 80 ? 'bg-green-700' : 
                                        score >= 50 ? 'bg-yellow-600' : 'bg-red-600'
                                    }`} 
                                    style={{ width: `${score}%` }}
                                ></div>
                            </div>
                        </div>
                    </td>

                    <td className="py-4 px-4 text-right align-top pt-5">
                        {project.yield ? (
                            <span className="font-mono font-bold text-black tabular-nums border-b border-gray-300 pb-0.5">
                                {project.yield}
                            </span>
                        ) : (
                            <span className="text-gray-300">-</span>
                        )}
                    </td>

                    <td className="py-4 px-4 align-top pt-5">
                        <div className={`text-[10px] font-bold uppercase tracking-widest flex items-center
                            ${verdict === 'STRONG BUY' ? 'text-green-700' : ''}
                            ${verdict === 'ACCUMULATE' ? 'text-blue-700' : ''}
                            ${verdict === 'HOLD' ? 'text-yellow-700' : ''}
                            ${verdict === 'LIQUIDATE' ? 'text-orange-600' : ''}
                            ${verdict === 'TOXIC' ? 'text-red-700' : ''}
                        `}>
                            {verdict === 'TOXIC' && <Skull className="w-3 h-3 mr-1" />}
                            {verdict === 'LIQUIDATE' && <AlertTriangle className="w-3 h-3 mr-1" />}
                            {verdict === 'STRONG BUY' && <TrendingUp className="w-3 h-3 mr-1" />}
                            {verdict}
                        </div>
                    </td>

                    <td className="py-4 px-4 text-right align-top pt-5">
                         <div className="font-bold text-black tabular-nums">
                            {project.entryPrice ? `${project.entryPrice} tr/m²` : 'N/A'}
                        </div>
                    </td>
                    </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        
        <div className="mt-4 flex items-center justify-end text-[10px] text-gray-400 italic">
            <Info className="w-3 h-3 mr-1" />
            <span>Click vào dự án để xem báo cáo thẩm định chi tiết (PDF).</span>
        </div>
      </div>
    </section>
  );
};