import React from 'react';

export const NewsTicker: React.FC = () => {
  return (
    <div className="bg-[#0F172A] text-gray-400 border-b border-gray-800 text-[10px] uppercase tracking-widest leading-none py-2 overflow-hidden flex select-none relative z-40">
      
      <div className="flex-shrink-0 px-4 font-bold text-white border-r border-gray-700 z-10 bg-[#0F172A]">
        Live Markets
      </div>

      <div className="w-full overflow-hidden flex items-center">
        <div className="animate-marquee whitespace-nowrap flex items-center space-x-8">
            {/* Ticker Items - Fear & Data Driven */}
            <span className="flex items-center space-x-2">
                <span>VNI Index:</span>
                <span className="text-green-500 font-mono">1,245.02 ▲ 0.5%</span>
            </span>
            <span className="text-gray-700">|</span>
            
            <span className="flex items-center space-x-2">
                <span>Dư nợ BĐS Q2:</span>
                <span className="text-red-500 font-bold blink">HIGH RISK DETECTED</span>
            </span>
            <span className="text-gray-700">|</span>

            <span className="flex items-center space-x-2">
                <span>Metro Yield (D2):</span>
                <span className="text-red-500 font-mono">3.2% ▼</span>
            </span>
            <span className="text-gray-700">|</span>

            <span className="flex items-center space-x-2">
                <span>Lãi suất liên ngân hàng (O/N):</span>
                <span className="text-red-500 font-mono">+0.5% bps</span>
            </span>
            <span className="text-gray-700">|</span>

            <span className="flex items-center space-x-2">
                <span>Grand Marina (Sec):</span>
                <span className="text-red-500 font-mono">-18.5% YoY</span>
            </span>
            <span className="text-gray-700">|</span>

            <span className="flex items-center space-x-2">
                <span>Vinhomes Grand Park (Supply):</span>
                <span className="text-yellow-500 font-mono">Overweight</span>
            </span>
            <span className="text-gray-700">|</span>

             <span className="flex items-center space-x-2">
                <span>10Y Bond:</span>
                <span className="text-green-500 font-mono">2.85%</span>
            </span>
        </div>
      </div>

      <style>{`
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .blink {
          animation: blinker 2s linear infinite;
        }
        @keyframes blinker {
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
};