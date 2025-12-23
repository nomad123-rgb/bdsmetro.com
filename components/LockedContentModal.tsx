import React, { useState } from 'react';
import { Lock, ShieldCheck, AlertTriangle } from 'lucide-react';

interface LockedContentModalProps {
  onUnlock: () => void;
  title?: string;
}

export const LockedContentModal: React.FC<LockedContentModalProps> = ({ onUnlock, title = "RESTRICTED ACCESS" }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call to save lead
    setTimeout(() => {
        setIsSubmitting(false);
        onUnlock();
    }, 1500);
  };

  return (
    <div className="bg-white shadow-2xl max-w-md w-full p-0 rounded-none border border-gray-200 overflow-hidden animate-fade-in-up">
        {/* Header Strip */}
        <div className="bg-[#1A2B48] p-6 text-center">
            <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <Lock className="w-5 h-5 text-[#FBBF24]" />
            </div>
            <h3 className="serif-font text-xl font-bold text-white uppercase tracking-widest">
                {title}
            </h3>
            <p className="text-gray-300 text-xs mt-2 font-serif italic">
                Authorized Personnel Only. Please verify identity.
            </p>
        </div>

        {/* Form Body */}
        <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Full Name</label>
                    <input 
                        required
                        type="text" 
                        className="w-full bg-white border border-gray-300 text-[#1A2B48] text-sm font-medium rounded-none focus:ring-1 focus:ring-[#B45309] focus:border-[#B45309] block p-3 transition-colors placeholder-gray-300" 
                        placeholder="Nguyễn Văn A"
                    />
                </div>
                <div>
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Phone Number (Zalo)</label>
                    <input 
                        required
                        type="tel" 
                        className="w-full bg-white border border-gray-300 text-[#1A2B48] text-sm font-medium rounded-none focus:ring-1 focus:ring-[#B45309] focus:border-[#B45309] block p-3 transition-colors placeholder-gray-300" 
                        placeholder="09xx xxx xxx"
                    />
                </div>
                <div>
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">Investment Budget</label>
                    <select className="w-full bg-white border border-gray-300 text-[#1A2B48] text-sm font-medium rounded-none focus:ring-1 focus:ring-[#B45309] focus:border-[#B45309] block p-3">
                        <option value="< 10 Billion">{'< 10 Tỷ VNĐ (Retail)'}</option>
                        <option value="10 - 20 Billion">{'10 - 20 Tỷ VNĐ'}</option>
                        <option value="20 - 50 Billion">{'20 - 50 Tỷ VNĐ'}</option>
                        <option value="> 50 Billion">{' > 50 Tỷ VNĐ (VIP/Institutional)'}</option>
                    </select>
                </div>
                
                <div className="bg-red-50 border-l-2 border-red-500 p-3 flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-[10px] text-red-800 leading-relaxed text-justify">
                        <strong>Compliance Warning:</strong> Dữ liệu này chứa thông tin tài chính chưa kiểm toán (Unaudited). Nghiêm cấm chia sẻ ra bên ngoài tổ chức.
                    </p>
                </div>

                <div className="pt-2">
                    <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full flex justify-center items-center text-white bg-[#B45309] hover:bg-[#9a4506] font-bold rounded-none text-xs px-5 py-4 text-center uppercase tracking-[0.2em] transition-all shadow-md hover:shadow-lg"
                    >
                        {isSubmitting ? 'Authenticating...' : (
                            <>
                                <ShieldCheck className="w-4 h-4 mr-2" />
                                Verify & Access
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
        
        {/* Footer Strip */}
        <div className="bg-gray-50 p-3 border-t border-gray-100 text-center">
            <p className="text-[9px] text-gray-400 flex items-center justify-center uppercase tracking-wider">
                <Lock className="w-3 h-3 mr-1" />
                256-bit SSL Encryption
            </p>
        </div>
    </div>
  );
};