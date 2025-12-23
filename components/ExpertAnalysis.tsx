import React from 'react';
import { ANALYSIS_ARTICLES } from '../constants';
import { ArrowRight, Lock, FileText, Download, ShieldAlert } from 'lucide-react';
import { AnalysisArticle } from '../types';

interface ExpertAnalysisProps {
  onArticleClick: (article: AnalysisArticle) => void;
}

export const ExpertAnalysis: React.FC<ExpertAnalysisProps> = ({ onArticleClick }) => {
  return (
    <section className="py-16 bg-[#F8FAFC] border-t border-gray-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Modernized */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b-2 border-[#1A2B48] pb-6">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 mb-3">
                <span className="w-2 h-2 bg-[#B45309]"></span>
                <span className="text-[#B45309] font-bold text-xs uppercase tracking-[0.2em]">Intelligence Unit</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-[#1A2B48] leading-none tracking-tight mb-4">
                FORENSIC RESEARCH<span className="text-[#B45309]">.</span>
            </h3>
            <p className="text-gray-600 font-medium text-lg border-l-4 border-gray-300 pl-4 italic">
                "Chúng tôi không dự báo giá. Chúng tôi điều tra sự thật đằng sau mức giá."
            </p>
          </div>
          <button className="hidden md:flex items-center bg-[#1A2B48] text-white px-6 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#0f192b] transition-all shadow-lg mt-6 md:mt-0">
            <FileText className="w-4 h-4 mr-2" />
            Access Full Archive
          </button>
        </div>

        {/* Articles List - Terminal/Editorial Style */}
        <div className="grid grid-cols-1 gap-0 border border-gray-200 shadow-sm bg-white divide-y divide-gray-100">
          {ANALYSIS_ARTICLES.map((article, index) => (
            <article 
              key={article.id} 
              className="group relative flex flex-col md:flex-row hover:bg-gray-50 transition-colors duration-200 cursor-pointer overflow-hidden"
              onClick={() => onArticleClick(article)}
            >
              {/* Status Indicator Strip */}
              <div className={`absolute left-0 top-0 bottom-0 w-1 transition-colors ${article.isLocked ? 'bg-[#1A2B48]' : 'bg-green-500'}`}></div>

              {/* Image Column (Compact) */}
              <div className="w-full md:w-64 h-48 md:h-auto relative flex-shrink-0">
                <img 
                  src={article.imageUrl} 
                  alt={article.title} 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute top-0 left-0 bg-[#1A2B48]/90 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                  {article.category}
                </div>
              </div>

              {/* Content Column */}
              <div className="flex-1 p-8 flex flex-col justify-between">
                <div>
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center text-[10px] font-bold uppercase tracking-wider text-gray-500 space-x-2">
                            <span className="text-[#1A2B48]">{article.author}</span>
                            <span className="text-gray-300">•</span>
                            <span>{article.date}</span>
                        </div>
                        {article.isLocked && (
                            <div className="flex items-center text-red-600 text-[10px] font-bold uppercase tracking-widest bg-red-50 px-2 py-1 border border-red-100">
                                <ShieldAlert className="w-3 h-3 mr-1" /> Confidential
                            </div>
                        )}
                    </div>

                    <h4 className="text-2xl font-bold text-[#1A2B48] mb-3 leading-tight group-hover:text-[#B45309] transition-colors pr-10">
                        {article.title}
                    </h4>

                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-4 font-medium">
                        {article.summary}
                    </p>
                </div>

                <div className="flex items-center justify-between mt-2">
                    <span className="inline-flex items-center text-[#B45309] text-xs font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                        Read Analysis <ArrowRight className="w-3 h-3 ml-2" />
                    </span>
                    
                    {article.isLocked ? (
                        <Lock className="w-4 h-4 text-gray-400" />
                    ) : (
                        <Download className="w-4 h-4 text-green-600" />
                    )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};