import React from 'react';
import { FileText, Map, ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-[#1A2B48] overflow-hidden min-h-[550px] flex items-center border-b border-gray-800">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="City Night"
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        {/* Gradient: Navy Overlay for Professional Look */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A2B48] via-[#1A2B48]/90 to-[#1A2B48]/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <div className="max-w-3xl">
          
          {/* Top Status Line */}
          <div className="flex items-center space-x-3 mb-6">
             <span className="w-8 h-[2px] bg-[#B45309]"></span>
             <span className="text-[#FBBF24] font-bold text-xs uppercase tracking-widest">
                Internal Briefing • Q4/2025
             </span>
          </div>
          
          {/* Main Headline */}
          <h1 className="serif-font text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            METRO ALPHA 2026: <br />
            <span className="text-white italic font-serif">THÂU TÓM VỊ THẾ.</span>
          </h1>
          
          {/* Subtext */}
          <p className="text-gray-300 text-lg font-light leading-relaxed max-w-2xl mb-10 border-l-2 border-gray-600 pl-6">
             Dữ liệu pháp lý & Định giá Real-time duy nhất cho Nhà đầu tư tinh hoa. <br/>
             <strong className="text-white">Đừng mua bằng niềm tin. Hãy mua bằng Số liệu.</strong>
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center bg-[#B45309] hover:bg-[#92400e] text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wider text-xs transition-all shadow-lg">
              <FileText className="w-4 h-4 mr-2" />
              Truy cập Kho dữ liệu
            </button>
            <button className="flex items-center justify-center bg-transparent border border-white/30 hover:bg-white hover:text-[#1A2B48] text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wider text-xs transition-all">
              <Map className="w-4 h-4 mr-2" />
              Bản đồ Huyết mạch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};