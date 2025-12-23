import React from 'react';
import { Lock, ShieldAlert, CheckCircle, AlertTriangle } from 'lucide-react';

export const ConsultationForm: React.FC = () => {
  return (
    <section className="py-20 bg-[#1A2B48] text-white border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Column: Content Text (Vault Content) */}
                <div>
                    <div className="inline-flex items-center space-x-2 text-[#FBBF24] font-bold text-xs tracking-widest uppercase mb-4 border border-[#FBBF24] px-3 py-1 rounded-sm">
                        <Lock className="w-3 h-3" />
                        <span>Private Asset List</span>
                    </div>
                    
                    <h3 className="serif-font text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                        The Locked Vault <br/>
                        <span className="italic text-gray-400 text-3xl font-serif">("Kho Báu Ẩn")</span>
                    </h3>
                    
                    <div className="border-l-4 border-[#B45309] pl-6 mb-8">
                        <p className="text-gray-200 text-lg leading-relaxed mb-2">
                            Chúng tôi nắm giữ độc quyền danh sách <strong className="text-white">05 Tài sản "Ngộp" (Distressed Assets)</strong>.
                        </p>
                        <p className="text-[#FBBF24] font-bold text-lg">
                            Giá thấp hơn thị trường 25% - 35%.
                        </p>
                    </div>

                    <div className="space-y-4 mb-8">
                        <div className="flex items-start">
                            <div className="bg-[#B45309] p-1 rounded-full mr-3 mt-1">
                                <CheckCircle className="w-3 h-3 text-white" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-sm">Vị trí chiến lược</h4>
                                <p className="text-sm text-gray-400">Khu vực Cần Giờ, Quận 9 (Cạnh Vành Đai 3).</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                             <div className="bg-[#B45309] p-1 rounded-full mr-3 mt-1">
                                <CheckCircle className="w-3 h-3 text-white" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-sm">Pháp lý sạch</h4>
                                <p className="text-sm text-gray-400">Đã có sổ hồng cá nhân, công chứng ngay.</p>
                            </div>
                        </div>
                    </div>
                    
                    <p className="flex items-center text-red-400 text-xs font-mono italic bg-red-900/20 p-3 rounded-sm border border-red-900/30">
                        <ShieldAlert className="w-4 h-4 mr-2" />
                        WARNING: Thông tin nhạy cảm, không công khai đại chúng.
                    </p>
                </div>

                {/* Right Column: The Form (Style: White Card like original website) */}
                <div className="bg-white rounded-sm p-8 shadow-2xl text-gray-800">
                    <h3 className="serif-font text-2xl font-bold text-[#1A2B48] mb-2">Yêu cầu quyền truy cập</h3>
                    <p className="text-sm text-gray-500 mb-6">Dành cho nhà đầu tư đã qua thẩm định (Vetted).</p>

                    <form className="space-y-5">
                        <div>
                            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Họ và tên nhà đầu tư</label>
                            <input 
                                type="text" 
                                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-[#B45309] focus:border-[#B45309] block p-3" 
                                placeholder="Vd: Nguyễn Văn A"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Số điện thoại (Zalo)</label>
                            <input 
                                type="text" 
                                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-[#B45309] focus:border-[#B45309] block p-3" 
                                placeholder="09xx xxx xxx"
                            />
                        </div>
                         <div>
                            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Ngân sách đầu tư dự kiến</label>
                            <select className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-[#B45309] focus:border-[#B45309] block p-3">
                                <option value="< 10 Billion">{'< 10 Tỷ VNĐ (Retail)'}</option>
                                <option value="10 - 20 Billion">{'10 - 20 Tỷ VNĐ'}</option>
                                <option value="20 - 50 Billion">{'20 - 50 Tỷ VNĐ'}</option>
                                <option value="> 50 Billion">{' > 50 Tỷ VNĐ (VIP/Institutional)'}</option>
                            </select>
                        </div>
                        
                        <div className="bg-red-50 border border-red-100 p-3 rounded-sm flex items-start gap-2">
                            <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                            <p className="text-[10px] text-red-800 leading-tight text-justify">
                                <strong>Warning:</strong> Danh sách này chứa thông tin nhạy cảm. Nghiêm cấm chia sẻ ra ngoài.
                            </p>
                        </div>

                        <button type="button" className="w-full text-white bg-[#B45309] hover:bg-[#92400e] focus:ring-4 focus:ring-blue-300 font-bold rounded-sm text-sm px-5 py-4 text-center uppercase tracking-widest transition-all shadow-lg mt-4 flex justify-center items-center">
                            <Lock className="w-4 h-4 mr-2" />
                            Apply For Membership
                        </button>
                        
                        <p className="text-[10px] text-center text-gray-400 mt-4">
                            * Xét duyệt hồ sơ trong vòng 24h. Tiêu chuẩn ISO 27001 về bảo mật thông tin.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
  );
};