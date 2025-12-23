
import React, { useState } from 'react';
import { MetroProject } from '../types';
import { calculateMuiScore } from '../utils/algorithm';
import { generateArchitecturalRender } from '../services/geminiService';
import { 
  ArrowLeft, Wallet, ShieldAlert, AlertTriangle, TrendingUp, 
  AlertOctagon, CheckCircle, Clock, MapPin, Building, 
  Zap, Activity, FileText, Printer, Share2, Lock, Landmark, ChevronRight, Ban, ArrowDownRight, ArrowUpRight, Crosshair,
  Scale, Satellite, Brain, Axe, FileWarning, Search, Info, Image as ImageIcon, Loader
} from 'lucide-react';

interface ProjectDetailProps {
  project: MetroProject;
  onBack: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  const { score, verdict, colorCode } = calculateMuiScore(project);
  const [currentImage, setCurrentImage] = useState(project.heroImage);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateImage = async () => {
    setIsGenerating(true);
    const newImage = await generateArchitecturalRender(project.name, project.description || "");
    if (newImage) {
        setCurrentImage(newImage);
    }
    setIsGenerating(false);
  };

  // Helper to determine legal step status
  const getLegalStepStatus = (step: '1/500' | 'SPA' | 'FOUNDATION' | 'PINK_BOOK') => {
    if (!project.legalChecklist) return 'PENDING';
    const check = project.legalChecklist;
    switch (step) {
      case '1/500': return check.approval1500 ? 'COMPLETED' : 'PENDING';
      case 'SPA': return check.salesPermit ? 'COMPLETED' : 'PENDING';
      case 'FOUNDATION': return check.foundation ? 'COMPLETED' : 'PENDING';
      case 'PINK_BOOK': return check.pinkBook ? 'COMPLETED' : 'PENDING';
    }
  };

  // Helper to render icon based on Forensic Zone
  const getZoneIcon = (iconName: string) => {
      switch(iconName) {
          case 'SCALE': return <Scale className="w-4 h-4 text-[#1A2B48]" />;
          case 'SATELLITE': return <Satellite className="w-4 h-4 text-[#1A2B48]" />;
          case 'BRAIN': return <Brain className="w-4 h-4 text-[#1A2B48]" />;
          case 'AXE': return <Axe className="w-4 h-4 text-[#1A2B48]" />;
          default: return <FileText className="w-4 h-4 text-[#1A2B48]" />;
      }
  };

  return (
    <div className="bg-white min-h-screen animate-fade-in font-sans text-[#111827]">
      
      {/* 1. COMPACT NAV BAR (Utility Only) */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center text-gray-500 hover:text-black transition-colors font-bold text-[10px] uppercase tracking-widest group"
          >
            <ArrowLeft className="w-3 h-3 mr-1 group-hover:-translate-x-1 transition-transform" />
            Terminal
          </button>
          <div className="flex items-center space-x-4">
             <div className="flex items-center space-x-2 border-r border-gray-200 pr-4">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-[10px] font-mono text-gray-500 uppercase">Live Audit</span>
             </div>
             <button className="text-gray-400 hover:text-black transition-colors"><Printer className="w-3 h-3" /></button>
             <button className="text-gray-400 hover:text-black transition-colors"><Share2 className="w-3 h-3" /></button>
          </div>
        </div>
      </div>

      {/* 2. REPORT HEADER (The "Trading Ticket" Look) */}
      <div className="bg-white border-b border-gray-200 pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div className="flex-1">
                    {/* Breadcrumbs / Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                         <span className={`px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest border ${
                             project.legalStatus === 'CERTIFIED' ? 'bg-white text-green-700 border-green-200' : 
                             project.legalStatus === 'WARNING' ? 'bg-white text-red-700 border-red-200' : 'bg-white text-yellow-800 border-yellow-300'
                         }`}>
                             {project.legalStatus === 'PENDING' ? 'Legal: Pending' : `Legal: ${project.legalStatus}`}
                         </span>
                         {project.tags?.map(tag => (
                             <span key={tag} className="px-2 py-0.5 bg-white border border-gray-200 text-gray-500 text-[9px] font-bold uppercase tracking-widest">
                                 {tag}
                             </span>
                         ))}
                    </div>
                    
                    <h1 className="serif-font text-4xl md:text-5xl font-black text-black mb-2 tracking-tight leading-none">
                        {project.name}
                    </h1>
                    <div className="flex items-center text-gray-500 text-sm font-serif italic mb-6">
                        <MapPin className="w-3.5 h-3.5 mr-1 text-[#B45309]" />
                        {project.address}
                    </div>

                    {/* AI IMAGE GENERATION BUTTON */}
                    <div className="relative w-full h-64 md:h-96 bg-gray-100 overflow-hidden border border-gray-200 group">
                        <img 
                            src={currentImage} 
                            alt={project.name} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1A2B48]/80 via-transparent to-transparent opacity-60"></div>
                        
                        <button 
                            onClick={handleGenerateImage}
                            disabled={isGenerating}
                            className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 flex items-center transition-all"
                        >
                            {isGenerating ? (
                                <>
                                    <Loader className="w-3 h-3 mr-2 animate-spin" />
                                    Rendering Architecture...
                                </>
                            ) : (
                                <>
                                    <ImageIcon className="w-3 h-3 mr-2" />
                                    Generate AI Render
                                </>
                            )}
                        </button>
                    </div>
                </div>

                {/* The "Stamp" - Condensed */}
                <div className="flex items-center bg-white border border-gray-200 p-4 min-w-[200px] h-fit">
                     <div className="flex-1">
                         <div className="text-[9px] uppercase font-bold text-gray-400 tracking-widest mb-1">Metro Score</div>
                         <div className="flex items-baseline space-x-2">
                             <span className={`text-4xl font-black serif-font tabular-nums ${colorCode}`}>
                                 {score}
                             </span>
                             <span className="text-[10px] text-gray-300 font-bold">/ 100</span>
                         </div>
                     </div>
                     <div className="w-px h-10 bg-gray-100 mx-4"></div>
                     <div className="text-right">
                         <div className="text-[9px] uppercase font-bold text-gray-400 tracking-widest mb-1">Verdict</div>
                         <div className={`text-xs font-bold uppercase tracking-widest ${
                             verdict === 'STRONG BUY' ? 'text-green-700' : 
                             verdict === 'LIQUIDATE' ? 'text-red-700' : 'text-yellow-700'
                         }`}>
                             {verdict}
                         </div>
                     </div>
                </div>
            </div>

            {/* Key Stats Bar - Horizontal Layout */}
            <div className="grid grid-cols-2 md:grid-cols-4 border-t border-b border-gray-200 mt-8 divide-x divide-gray-200">
                <div className="bg-white p-4">
                    <div className="text-[9px] uppercase text-gray-400 font-bold tracking-widest mb-1">Entry Price</div>
                    <div className="text-xl font-bold text-[#1A2B48] tabular-nums">{project.entryPrice} <span className="text-xs text-gray-400 font-medium">tr/m²</span></div>
                </div>
                <div className="bg-white p-4">
                    <div className="text-[9px] uppercase text-gray-400 font-bold tracking-widest mb-1">Est. Yield</div>
                    <div className="text-xl font-bold text-[#B45309] tabular-nums">{project.yield}</div>
                </div>
                <div className="bg-white p-4">
                    <div className="text-[9px] uppercase text-gray-400 font-bold tracking-widest mb-1">Metro Access</div>
                    <div className="text-xl font-bold text-[#1A2B48] tabular-nums">{project.distance}</div>
                </div>
                <div className="bg-white p-4">
                    <div className="text-[9px] uppercase text-gray-400 font-bold tracking-widest mb-1">Developer</div>
                    <div className="text-sm font-bold text-[#1A2B48] truncate">{project.developer}</div>
                </div>
            </div>
        </div>
      </div>

      {/* 3. MAIN CONTENT GRID (Asymmetric Layout) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* --- LEFT COLUMN: THE NARRATIVE (70%) --- */}
            <div className="lg:col-span-8 space-y-12">
                
                {/* 3.1 FORENSIC DOSSIER (CLEAN PAPER STYLE) */}
                <section>
                    <div className="flex justify-between items-end mb-8 pb-4 border-b-2 border-black">
                        <div className="flex items-center space-x-3">
                            <div className="bg-black text-white p-1">
                                <Search className="w-5 h-5" />
                            </div>
                            <h2 className="serif-font text-3xl font-bold text-black uppercase tracking-tight">Forensic Dossier</h2>
                        </div>
                        <div className="text-right">
                            <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Audit Reference</div>
                            <div className="text-xs font-mono font-bold text-black">
                                REF-{project.forensicData?.auditDate || '2025'}-SEC
                            </div>
                        </div>
                    </div>

                    {/* Vulture Signal (Clean Look) */}
                    {project.forensicData ? (
                        <>
                             {/* Executive Summary Box */}
                             <div className="mb-10 p-6 border border-gray-300 bg-[#FAFAFA] relative">
                                <div className="absolute top-0 left-0 bg-black text-white text-[9px] font-bold px-2 py-1 uppercase tracking-widest">
                                    Executive Summary
                                </div>
                                <div className="mt-4 flex items-start gap-4">
                                    <div className={`p-2 rounded-full border ${
                                         project.forensicData.warningLevel === 'CAUTION' ? 'border-orange-200 bg-orange-50 text-orange-600' :
                                         project.forensicData.warningLevel === 'CRITICAL' ? 'border-red-200 bg-red-50 text-red-600' : 'border-green-200 bg-green-50 text-green-600'
                                    }`}>
                                        <Activity className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm uppercase tracking-wide text-gray-900 mb-2">
                                            Market Signal: {project.forensicData.warningLevel}
                                        </h4>
                                        <p className="text-gray-800 font-serif text-lg leading-relaxed">
                                            "{project.description}"
                                        </p>
                                    </div>
                                </div>
                             </div>

                             {/* THE AUDIT GRID (High Contrast, No Backgrounds) */}
                             <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-gray-200">
                                 {project.forensicData.zones.map((zone) => (
                                     <div key={zone.id} className="border-b border-r border-gray-200 p-8 hover:bg-gray-50 transition-colors">
                                         {/* Zone Header */}
                                         <div className="flex items-center space-x-3 mb-6">
                                             {getZoneIcon(zone.iconName)}
                                             <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400">
                                                 {zone.title}
                                             </h3>
                                         </div>

                                         {/* Zone Items */}
                                         <div className="space-y-6">
                                             {zone.items.map((item, idx) => (
                                                 <div key={idx} className="group">
                                                     <div className="flex items-baseline justify-between mb-2">
                                                         <span className="font-bold text-base text-gray-900 font-serif group-hover:text-[#B45309] transition-colors">
                                                             {item.subtitle}
                                                         </span>
                                                         
                                                         {/* Minimal Stamp Tags */}
                                                         <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 border ${
                                                             item.type === 'RISK' ? 'border-red-200 text-red-700' :
                                                             item.type === 'FACT' ? 'border-gray-300 text-gray-600' :
                                                             item.type === 'OPPORTUNITY' ? 'border-green-200 text-green-700' :
                                                             'border-blue-200 text-blue-700'
                                                         }`}>
                                                             {item.type}
                                                         </span>
                                                     </div>
                                                     <p className="text-sm text-gray-600 leading-7 text-justify font-light">
                                                         {item.content}
                                                     </p>
                                                 </div>
                                             ))}
                                         </div>
                                     </div>
                                 ))}
                             </div>
                        </>
                    ) : (
                        <div className="prose prose-lg max-w-none">
                            <div className="font-serif text-gray-800 text-justify leading-relaxed whitespace-pre-line text-base">
                                {project.description}
                            </div>
                        </div>
                    )}
                </section>

                {/* 3.2 Financial Analysis (Data Tables) */}
                <section>
                    <div className="flex items-center space-x-3 mb-6 border-b border-gray-200 pb-4">
                        <Wallet className="w-5 h-5 text-[#B45309]" />
                        <h2 className="serif-font text-2xl font-bold text-black uppercase tracking-tight">Financial Audit</h2>
                    </div>
                    
                    {/* NEW: Market Price Matrix (The Ledger) */}
                    {project.priceHistory && (
                        <div className="mb-10 border border-gray-200 bg-white shadow-sm overflow-hidden">
                             <div className="bg-[#1A2B48] px-4 py-3 flex justify-between items-center">
                                <h4 className="text-[10px] font-bold uppercase text-white tracking-widest flex items-center">
                                    <Activity className="w-3 h-3 mr-2 text-[#FBBF24]" />
                                    Market Price Matrix
                                </h4>
                                <span className="text-[9px] text-gray-400 font-mono">Ledger: Real-time</span>
                            </div>
                            <table className="w-full text-sm">
                                <thead className="bg-gray-50 border-b border-gray-200">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-[10px] font-bold uppercase text-gray-500 tracking-wider">Period</th>
                                        <th className="px-6 py-3 text-right text-[10px] font-bold uppercase text-gray-500 tracking-wider">Primary (CĐT)</th>
                                        <th className="px-6 py-3 text-right text-[10px] font-bold uppercase text-gray-500 tracking-wider">Secondary (Liquid)</th>
                                        <th className="px-6 py-3 text-right text-[10px] font-bold uppercase text-gray-500 tracking-wider">Spread</th>
                                        <th className="px-6 py-3 text-right text-[10px] font-bold uppercase text-gray-500 tracking-wider">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {project.priceHistory.map((row, idx) => (
                                        <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 font-bold text-[#1A2B48]">{row.period}</td>
                                            <td className="px-6 py-4 text-right font-mono text-gray-600">{row.primaryPrice}</td>
                                            <td className="px-6 py-4 text-right font-mono font-bold text-[#1A2B48]">{row.secondaryPrice}</td>
                                            <td className={`px-6 py-4 text-right font-mono font-bold ${
                                                row.variance.startsWith('-') ? 'text-red-600' : 'text-green-600'
                                            }`}>
                                                {row.variance}
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <span className={`inline-flex items-center px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest border ${
                                                    row.status === 'CRASH' ? 'bg-white text-red-700 border-red-200' :
                                                    row.status === 'DISCOUNT' ? 'bg-white text-orange-700 border-orange-200' :
                                                    'bg-white text-green-700 border-green-200'
                                                }`}>
                                                    {row.status}
                                                    {row.variance.startsWith('-') ? <ArrowDownRight className="w-3 h-3 ml-1" /> : <ArrowUpRight className="w-3 h-3 ml-1" />}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="bg-gray-50 p-3 border-t border-gray-200 text-center">
                                <p className="text-[10px] text-gray-400 italic">
                                    * Giá thứ cấp dựa trên các giao dịch công chứng thực tế trong tháng.
                                </p>
                            </div>
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Hidden Fees Table */}
                        <div className="border border-gray-200 bg-white">
                            <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                                <h4 className="text-[10px] font-bold uppercase text-gray-500 tracking-widest">Cost Structure</h4>
                            </div>
                            <table className="w-full text-sm">
                                <tbody className="divide-y divide-gray-100">
                                    <tr>
                                        <td className="px-4 py-3 font-medium text-gray-600">Market Price (Distress)</td>
                                        <td className="px-4 py-3 text-right font-bold text-red-600">{project.fees?.distressPrice}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 font-medium text-gray-600">Rental Income</td>
                                        <td className="px-4 py-3 text-right font-bold text-[#1A2B48]">{project.fees?.rentalPrice}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 font-medium text-gray-600">Management Fee</td>
                                        <td className="px-4 py-3 text-right font-bold text-[#1A2B48]">{project.fees?.managementFee}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 font-medium text-gray-600">Sinking Fund</td>
                                        <td className="px-4 py-3 text-right font-bold text-[#1A2B48]">{project.fees?.sinkingFund}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Debt Trap Visual */}
                        <div className="border border-gray-200 bg-white p-6 flex flex-col justify-center">
                            <h4 className="text-[10px] font-bold uppercase text-gray-500 tracking-widest mb-4">Negative Carry Analysis</h4>
                            
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-xs font-bold mb-1">
                                        <span className="text-[#B45309]">Asset Yield</span>
                                        <span className="text-[#B45309]">{project.yield}</span>
                                    </div>
                                    <div className="w-full bg-gray-100 h-2">
                                        <div className="bg-[#B45309] h-full" style={{ width: '35%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-xs font-bold mb-1">
                                        <span className="text-red-600">Interest Rate (Float)</span>
                                        <span className="text-red-600">10.5%</span>
                                    </div>
                                    <div className="w-full bg-gray-100 h-2">
                                        <div className="bg-red-600 h-full" style={{ width: '85%' }}></div>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-4 text-[10px] text-gray-400 italic">
                                * Gap between Yield and Interest represents your monthly cash loss.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 3.3 Risk Matrix (SWOT & Legal) */}
                <section>
                     <div className="flex items-center space-x-3 mb-6 border-b border-gray-200 pb-4">
                        <ShieldAlert className="w-5 h-5 text-[#B45309]" />
                        <h2 className="serif-font text-2xl font-bold text-black uppercase tracking-tight">Risk & Legal Matrix</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                         {/* SWOT Strengths */}
                         <div className="bg-white border border-gray-200 p-6">
                            <h4 className="font-bold text-green-700 text-xs uppercase tracking-widest mb-4 flex items-center border-b border-gray-100 pb-2">
                                <TrendingUp className="w-4 h-4 mr-2" /> Strengths & Opportunities
                            </h4>
                            <ul className="space-y-3">
                                {[...(project.swot?.strengths || []), ...(project.swot?.opportunities || [])].map((s, i) => (
                                    <li key={i} className="flex items-start text-sm text-gray-600 font-sans">
                                        <CheckCircle className="w-3.5 h-3.5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                                        {s}
                                    </li>
                                ))}
                            </ul>
                         </div>

                         {/* SWOT Weaknesses */}
                         <div className="bg-white border border-gray-200 p-6">
                            <h4 className="font-bold text-red-700 text-xs uppercase tracking-widest mb-4 flex items-center border-b border-gray-100 pb-2">
                                <AlertTriangle className="w-4 h-4 mr-2" /> Weaknesses & Threats
                            </h4>
                            <ul className="space-y-3">
                                {[...(project.swot?.weaknesses || []), ...(project.swot?.threats || [])].map((s, i) => (
                                    <li key={i} className="flex items-start text-sm text-gray-600 font-sans">
                                        <Ban className="w-3.5 h-3.5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                                        {s}
                                    </li>
                                ))}
                            </ul>
                         </div>
                    </div>
                    
                    {/* Legal Timeline (Horizontal) */}
                    <div className="border border-gray-200 p-6">
                        <h4 className="text-[10px] font-bold uppercase text-gray-500 tracking-widest mb-6">Legal Clearance Timeline</h4>
                        <div className="relative">
                            <div className="absolute top-1/2 left-0 w-full h-px bg-gray-200 -translate-y-1/2 z-0"></div>
                            <div className="grid grid-cols-4 gap-2 relative z-10">
                                {['1/500', 'SPA', 'FOUNDATION', 'PINK_BOOK'].map((step, idx) => {
                                    const status = getLegalStepStatus(step as any);
                                    return (
                                        <div key={idx} className="flex flex-col items-center text-center">
                                            <div className={`w-3 h-3 rounded-full border-2 mb-2 bg-white ${
                                                status === 'COMPLETED' ? 'border-green-600' : 'border-gray-300'
                                            }`}>
                                                {status === 'COMPLETED' && <div className="w-full h-full bg-green-600 rounded-full scale-50"></div>}
                                            </div>
                                            <span className={`text-[9px] font-bold uppercase tracking-wider ${
                                                status === 'COMPLETED' ? 'text-black' : 'text-gray-400'
                                            }`}>{step.replace('_', ' ')}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3.4 Lead Gen (Embedded Form) */}
                <div className="bg-[#1A2B48] text-white p-10 mt-12 border border-[#1A2B48]">
                     <div className="flex items-center space-x-2 text-[#FBBF24] font-bold text-xs tracking-[0.2em] uppercase mb-4">
                        <Lock className="w-3 h-3" />
                        <span>Private Client Service</span>
                    </div>
                    <h3 className="serif-font text-3xl font-bold mb-4">Access Full Due Diligence Data</h3>
                    <p className="text-gray-300 font-serif mb-8 max-w-2xl text-lg">
                        Mở khóa toàn bộ hồ sơ pháp lý (bản cứng), danh sách cắt lỗ, và lịch sử giao dịch thực tế.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <input 
                            type="text" 
                            placeholder="Email / Zalo Official..." 
                            className="bg-white/10 border border-white/20 text-white placeholder-gray-400 px-4 py-3 flex-1 focus:outline-none focus:border-[#FBBF24] transition-colors"
                        />
                        <button className="bg-[#B45309] hover:bg-[#9a4506] text-white px-8 py-3 font-bold uppercase tracking-widest text-xs transition-colors">
                            Request Access
                        </button>
                    </div>
                </div>

            </div>

            {/* --- RIGHT COLUMN: STICKY SIDEBAR (30%) --- */}
            <div className="lg:col-span-4 space-y-8 sticky top-24">

                {/* 0. THE KILL SWITCH: Capital Rotation Card */}
                {project.recommendedSwap && (
                    <div className="bg-[#0F172A] border-l-4 border-green-500 p-6 shadow-2xl relative overflow-hidden group">
                        {/* Pulse effect */}
                        <div className="absolute top-0 right-0 p-4">
                            <span className="flex h-3 w-3 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                        </div>
                        
                        <div className="relative z-10">
                            <h3 className="text-green-500 font-bold text-xs uppercase tracking-widest mb-1 flex items-center">
                                <Crosshair className="w-4 h-4 mr-2" />
                                Capital Rotation Signal
                            </h3>
                            <div className="text-white text-lg font-bold mb-4 leading-tight">
                                STOP BLEEDING. <br/>
                                SWAP TO <span className="text-green-400 border-b border-green-400 pb-0.5">{project.recommendedSwap.targetName}</span>
                            </div>
                            
                            <div className="bg-white/10 p-3 rounded-sm mb-4">
                                <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wide mb-1">Why Swap?</div>
                                <p className="text-xs text-gray-200 font-medium leading-relaxed">
                                    "{project.recommendedSwap.reason}"
                                </p>
                            </div>

                             <div className="flex justify-between items-center mb-6">
                                <div className="text-center">
                                    <div className="text-[9px] text-red-400 uppercase font-bold">Current Asset</div>
                                    <div className="text-red-500 font-bold text-xs">SELL</div>
                                </div>
                                <div className="w-8 h-[1px] bg-gray-600"></div>
                                <div className="text-center">
                                    <div className="text-[9px] text-green-400 uppercase font-bold">Target Asset</div>
                                    <div className="text-green-500 font-bold text-xs">BUY</div>
                                </div>
                             </div>

                            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-xs py-3 uppercase tracking-widest transition-all shadow-lg flex items-center justify-center">
                                View Alpha Asset <ArrowUpRight className="w-4 h-4 ml-1" />
                            </button>
                        </div>
                    </div>
                )}
                
                {/* 1. Asset DNA Card */}
                <div className="border border-gray-200 bg-white shadow-sm">
                    <div className="bg-black text-white px-4 py-3">
                        <h3 className="font-bold text-xs uppercase tracking-widest flex items-center">
                            <FileText className="w-3 h-3 mr-2 text-[#FBBF24]" />
                            Asset DNA
                        </h3>
                    </div>
                    <div className="divide-y divide-gray-100 text-sm">
                        <div className="flex justify-between px-4 py-3">
                            <span className="text-gray-500 font-medium">Land Area</span>
                            <span className="font-bold text-black">{project.dna?.landArea}</span>
                        </div>
                        <div className="flex justify-between px-4 py-3">
                            <span className="text-gray-500 font-medium">Scale</span>
                            <span className="font-bold text-black">{project.dna?.scale}</span>
                        </div>
                        <div className="flex justify-between px-4 py-3">
                            <span className="text-gray-500 font-medium">Density</span>
                            <span className="font-bold text-black">{project.dna?.density}</span>
                        </div>
                        <div className="flex justify-between px-4 py-3">
                            <span className="text-gray-500 font-medium">Tenure</span>
                            <span className="font-bold text-black">{project.dna?.tenure}</span>
                        </div>
                    </div>
                </div>

                {/* 2. Tactical Arsenal */}
                <div className="border border-gray-200 bg-white shadow-sm p-6">
                    <h3 className="font-bold text-xs uppercase tracking-widest mb-4 flex items-center text-gray-500">
                        <Zap className="w-3 h-3 mr-2 text-[#B45309]" />
                        Key Amenities
                    </h3>
                    <ul className="space-y-3">
                        {project.amenities?.map((am, i) => (
                            <li key={i} className="flex items-start text-sm text-gray-700">
                                <div className="w-1.5 h-1.5 bg-[#B45309] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                {am}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 3. Commute Snapshot */}
                <div className="border border-gray-200 bg-white shadow-sm p-6">
                    <h3 className="font-bold text-xs uppercase tracking-widest mb-4 flex items-center text-gray-500">
                        <Clock className="w-3 h-3 mr-2" />
                        Commute Stress
                    </h3>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="text-sm font-bold text-black">CBD (D1)</span>
                            <span className="text-xs font-mono font-bold text-red-600 bg-red-50 px-2 py-1">{project.commute?.cbd}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm font-bold text-black">Airport</span>
                            <span className="text-xs font-mono font-bold text-yellow-600 bg-yellow-50 px-2 py-1">{project.commute?.airport}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm font-bold text-black">Hi-Tech</span>
                            <span className="text-xs font-mono font-bold text-green-600 bg-green-50 px-2 py-1">{project.commute?.hitech}</span>
                        </div>
                    </div>
                </div>

                {/* 4. Analyst Verdict (Small) */}
                <div className="bg-gray-50 p-6 border border-gray-200 text-center">
                    <div className="text-[10px] font-bold uppercase text-gray-400 tracking-widest mb-2">Primary Recommendation</div>
                    <div className="serif-font text-lg font-bold text-black italic">
                        "{project.analystVerdictText?.targetBuyer}"
                    </div>
                </div>

            </div>

        </div>
      </div>
      
      {/* Disclaimer Footer */}
      <div className="max-w-7xl mx-auto px-4 py-8 border-t border-gray-200 text-center">
          <p className="text-[10px] text-gray-400 uppercase tracking-widest">
              CONFIDENTIAL • INTERNAL DISTRIBUTION ONLY • © 2025 BDS METRO
          </p>
      </div>

    </div>
  );
};
