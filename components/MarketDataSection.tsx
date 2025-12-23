import React from 'react';
import { ECONOMIC_EVENTS, BANK_RATES } from '../constants';
import { ArrowUp, ArrowDown, Minus } from 'lucide-react';

export const MarketDataSection: React.FC = () => {
  const currentDate = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' });

  return (
    <section className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Economic Calendar Widget */}
          <div className="flex flex-col">
            <div className="flex justify-between items-baseline mb-4 border-b border-black pb-2">
              <h3 className="serif-font text-xl font-bold text-black uppercase tracking-wider">Economic Calendar</h3>
              <span className="text-xs font-mono text-gray-500">{currentDate}</span>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="py-2 pr-4 font-bold text-gray-900 w-16">Time</th>
                    <th className="py-2 pr-4 font-bold text-gray-900">Event</th>
                    <th className="py-2 pr-4 font-bold text-gray-900 w-24">Impact</th>
                    <th className="py-2 pr-4 font-normal text-gray-500 text-right">Prev</th>
                    <th className="py-2 pr-4 font-normal text-gray-500 text-right">Fcst</th>
                    <th className="py-2 font-bold text-gray-900 text-right">Actual</th>
                  </tr>
                </thead>
                <tbody>
                  {ECONOMIC_EVENTS.map((event) => (
                    <tr key={event.id} className="border-b border-gray-100 hover:bg-gray-50 group">
                      <td className="py-3 pr-4 font-mono text-gray-600">{event.time}</td>
                      <td className="py-3 pr-4 font-medium text-gray-900 group-hover:text-[#B45309] transition-colors">{event.event}</td>
                      <td className="py-3 pr-4">
                        <span className={`inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide rounded-sm ${
                          event.impact === 'High' 
                            ? 'bg-red-100 text-red-800' 
                            : event.impact === 'Medium' 
                            ? 'bg-yellow-100 text-yellow-800' 
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {event.impact}
                        </span>
                      </td>
                      <td className="py-3 pr-4 text-right text-gray-500 font-mono">{event.previous}</td>
                      <td className="py-3 pr-4 text-right text-gray-500 font-mono">{event.forecast}</td>
                      <td className={`py-3 text-right font-mono font-bold ${event.actual === '--' ? 'text-gray-400' : 'text-black'}`}>
                        {event.actual}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-right">
              <a href="#" className="text-xs font-bold text-[#B45309] uppercase hover:underline">Full Calendar &rarr;</a>
            </div>
          </div>

          {/* Interest Rates Widget */}
          <div className="flex flex-col">
            <div className="flex justify-between items-baseline mb-4 border-b border-black pb-2">
              <h3 className="serif-font text-xl font-bold text-black uppercase tracking-wider">Bank Interest Rates</h3>
              <span className="text-xs font-mono text-gray-500">Dec 2025 (Reference)</span>
            </div>

            <div className="bg-gray-50 p-1 rounded-sm border border-gray-200">
               <div className="grid grid-cols-4 gap-px bg-gray-200 border border-gray-200">
                  {/* Header */}
                  <div className="bg-white p-3 font-bold text-xs uppercase tracking-wider text-gray-500">Bank</div>
                  <div className="bg-white p-3 font-bold text-xs uppercase tracking-wider text-gray-500 text-right">Deposit (12M)</div>
                  <div className="bg-white p-3 font-bold text-xs uppercase tracking-wider text-gray-500 text-right">Lending (Float)</div>
                  <div className="bg-white p-3 font-bold text-xs uppercase tracking-wider text-gray-500 text-center">Trend</div>

                  {/* Rows */}
                  {BANK_RATES.map((bank) => (
                    <React.Fragment key={bank.id}>
                       <div className="bg-white p-3 flex items-center">
                          <span className="font-bold text-[#1A2B48]">{bank.code}</span>
                       </div>
                       <div className="bg-white p-3 text-right font-mono font-bold text-gray-900 text-lg">
                          {bank.rate12M}
                       </div>
                       <div className="bg-white p-3 text-right font-mono text-gray-600">
                          {bank.lendingRate}
                       </div>
                       <div className="bg-white p-3 flex items-center justify-center">
                          {bank.trend === 'UP' && <ArrowUp className="w-4 h-4 text-red-600" />}
                          {bank.trend === 'DOWN' && <ArrowDown className="w-4 h-4 text-green-600" />}
                          {bank.trend === 'FLAT' && <Minus className="w-4 h-4 text-gray-400" />}
                       </div>
                    </React.Fragment>
                  ))}
               </div>
            </div>
            
            <div className="mt-4 flex justify-between items-center">
              <p className="text-[10px] text-gray-400 italic">* Lãi suất cơ sở tham khảo. Lãi vay thực tế có thể + biên độ 3-4%.</p>
              <a href="#" className="text-xs font-bold text-[#B45309] uppercase hover:underline">Compare All Banks &rarr;</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};