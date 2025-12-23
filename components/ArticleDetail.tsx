
import React, { useState } from 'react';
import { AnalysisArticle } from '../types';
import { ArrowLeft, Calendar, User, Tag, Share2, Printer, Lock, Mail, Bell, Shield, ShieldAlert } from 'lucide-react';

interface ArticleDetailProps {
  article: AnalysisArticle;
  onBack: () => void;
}

export const ArticleDetail: React.FC<ArticleDetailProps> = ({ article, onBack }) => {

  return (
    <div className="bg-[#F1F5F9] min-h-screen animate-fade-in pb-20 font-sans">
      {/* Navigation Bar */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center text-gray-500 hover:text-[#1A2B48] transition-colors font-bold text-xs uppercase tracking-widest group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Intelligence
          </button>
          <div className="flex items-center space-x-4">
             <span className="hidden sm:inline-block text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                Read Mode
             </span>
             <div className="h-4 w-px bg-gray-300 mx-2"></div>
             <button className="text-gray-400 hover:text-[#1A2B48] transition-colors">
                <Printer className="w-4 h-4" />
             </button>
             <button className="text-gray-400 hover:text-[#1A2B48] transition-colors">
                <Share2 className="w-4 h-4" />
             </button>
          </div>
        </div>
      </div>

      {/* Main Article Container */}
      <article className="max-w-4xl mx-auto mt-8 bg-white shadow-xl border border-gray-200 overflow-hidden">
        
        {/* Cover Image (if available) */}
        {article.imageUrl && (
            <div className="w-full h-80 relative">
                <img 
                    src={article.imageUrl} 
                    alt={article.title} 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2B48]/90 to-transparent"></div>
                
                {/* Overlay Category */}
                <div className="absolute bottom-6 left-8 sm:left-12">
                     <div className="flex items-center space-x-3 mb-2">
                        <span className="bg-[#B45309] text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest">
                            {article.category} Report
                        </span>
                        {article.isLocked && (
                            <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest flex items-center">
                                <Shield className="w-3 h-3 mr-1" /> Confidential
                            </span>
                        )}
                     </div>
                </div>
            </div>
        )}

        {/* Article Header */}
        <div className="px-8 sm:px-12 pt-10 pb-8 border-b border-gray-100">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1A2B48] leading-tight mb-6 tracking-tight">
                {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center text-gray-500 text-xs font-bold uppercase tracking-wider space-x-6">
                <div className="flex items-center mb-2 sm:mb-0">
                    <User className="w-4 h-4 mr-2 text-[#B45309]" />
                    <span className="text-[#1A2B48]">{article.author}</span>
                </div>
                <div className="flex items-center mb-2 sm:mb-0">
                    <Calendar className="w-4 h-4 mr-2 text-[#B45309]" />
                    <span>{article.date}</span>
                </div>
                <div className="flex items-center mb-2 sm:mb-0">
                    <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                    <span className="text-green-600">Verified Intel</span>
                </div>
            </div>
        </div>

        {/* Content Body */}
        <div className="px-8 sm:px-12 py-10">
            
            {/* Lead Summary */}
            <div className="text-xl text-gray-700 font-medium leading-relaxed mb-10 border-l-4 border-[#B45309] pl-6 italic">
                {article.summary}
            </div>

            {/* Main Text Blocks */}
            <div className="space-y-6 text-gray-800 leading-relaxed text-base md:text-lg">
                {article.content && article.content.map((block, index) => {
                    switch (block.type) {
                        case 'heading':
                            return (
                                <h3 key={index} className="text-2xl font-bold text-[#1A2B48] mt-10 mb-4 pt-4 border-t border-gray-100 first:border-0 first:pt-0 first:mt-0">
                                    {block.text}
                                </h3>
                            );
                        case 'paragraph':
                            return <p key={index} className="text-justify">{block.text}</p>;
                        case 'quote':
                            return (
                                <blockquote key={index} className="bg-gray-50 p-6 my-8 border-l-4 border-gray-300 italic text-gray-600 font-medium">
                                    "{block.text}"
                                </blockquote>
                            );
                        case 'warning':
                            return (
                                <div key={index} className="bg-red-50 border border-red-200 p-5 my-6 flex gap-3">
                                    <ShieldAlert className="w-6 h-6 text-red-600 flex-shrink-0" />
                                    <div className="text-red-800 text-sm font-bold">
                                        {block.text}
                                    </div>
                                </div>
                            );
                        case 'list':
                            return (
                                <ul key={index} className="list-none space-y-3 my-6 pl-2">
                                    {Array.isArray(block.text) && block.text.map((item, i) => (
                                        <li key={i} className="flex items-start">
                                            <div className="w-1.5 h-1.5 bg-[#B45309] rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            );
                        case 'image':
                            return (
                                <figure key={index} className="my-10 -mx-4 sm:-mx-8 md:mx-0">
                                    <img 
                                        src={block.imageUrl} 
                                        alt={block.caption || 'Article Image'} 
                                        className="w-full h-auto md:rounded-sm shadow-md"
                                    />
                                    {block.caption && (
                                        <figcaption className="mt-3 text-center text-xs text-gray-500 italic font-serif">
                                            ▲ {block.caption}
                                        </figcaption>
                                    )}
                                </figure>
                            );
                        default:
                            return null;
                    }
                })}
            </div>

            {/* SUBSCRIPTION TRAP (Bottom) */}
            <div className="mt-16 bg-[#1A2B48] text-white p-8 sm:p-12 relative overflow-hidden rounded-sm shadow-xl">
                 <div className="absolute top-0 right-0 p-12 opacity-5">
                     <Bell className="w-48 h-48" />
                 </div>
                 
                 <div className="relative z-10 max-w-2xl">
                     <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-wide">
                         Intelligence Briefing
                     </h3>
                     <p className="text-gray-300 mb-8 font-light text-lg">
                         Nhận báo cáo phân tích độc quyền và cảnh báo rủi ro thị trường ngay khi phát hành.
                     </p>
                     
                     <div className="flex flex-col sm:flex-row gap-0">
                         <input 
                            type="email" 
                            placeholder="Email doanh nghiệp của bạn..." 
                            className="flex-1 bg-white border-0 text-[#1A2B48] p-4 text-sm font-bold placeholder-gray-400 focus:ring-2 focus:ring-[#B45309]"
                         />
                         <button className="bg-[#B45309] hover:bg-[#9a4506] text-white px-8 py-4 font-bold text-xs uppercase tracking-widest transition-colors flex items-center justify-center shadow-lg">
                             <Mail className="w-4 h-4 mr-2" />
                             Subscribe
                         </button>
                     </div>
                     <p className="text-[10px] text-gray-400 mt-4 uppercase tracking-wider">
                         * Dữ liệu được bảo mật. Không spam.
                     </p>
                 </div>
            </div>

        </div>
        
        {/* Footer Stamp */}
        <div className="bg-gray-50 px-12 py-6 border-t border-gray-200 text-center">
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                BDS Metro Intelligence Unit &copy; 2024. For Internal Use Only.
            </p>
        </div>
      </article>
    </div>
  );
};
