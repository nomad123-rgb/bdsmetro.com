import React from 'react';
import { ShieldCheck, MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <ShieldCheck className="h-8 w-8 text-[#1A2B48]" />
              <div>
                <h2 className="serif-font text-lg font-bold text-[#1A2B48] uppercase">BDS Metro</h2>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">Research & Analytics</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Đơn vị tiên phong áp dụng khoa học dữ liệu và phân tích pháp lý vào thẩm định bất động sản hạ tầng giao thông.
            </p>
            <div className="text-[10px] uppercase font-bold text-[#B45309] tracking-widest border-t border-gray-100 pt-2">
                Protected by ONYX Group
            </div>
          </div>

          <div>
            <h4 className="font-bold text-[#1A2B48] mb-4 uppercase text-sm tracking-wider">Về Chúng Tôi</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-[#B45309]">Đội ngũ chuyên gia</a></li>
              <li><a href="#" className="hover:text-[#B45309]">Phương pháp luận MR.D</a></li>
              <li><a href="#" className="hover:text-[#B45309]">Đối tác chiến lược</a></li>
              <li><a href="#" className="hover:text-[#B45309]">Tuyển dụng</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#1A2B48] mb-4 uppercase text-sm tracking-wider">Dịch Vụ</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><a href="#" className="hover:text-[#B45309]">Báo cáo thị trường (Quý)</a></li>
              <li><a href="#" className="hover:text-[#B45309]">Thẩm định pháp lý dự án</a></li>
              <li><a href="#" className="hover:text-[#B45309]">Tư vấn danh mục đầu tư</a></li>
              <li><a href="#" className="hover:text-[#B45309]">Private Banking Partners</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[#1A2B48] mb-4 uppercase text-sm tracking-wider">Liên Hệ</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 text-[#B45309]" />
                <span>Tầng 18, Bitexco Financial Tower, Quận 1, TP.HCM</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-[#B45309]" />
                <span>(+84) 90 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-[#B45309]" />
                <span>advisor@bdsmetro.vn</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>&copy; 2024 BDS Metro Research. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-600">Điều khoản sử dụng</a>
            <a href="#" className="hover:text-gray-600">Chính sách bảo mật</a>
            <a href="#" className="hover:text-gray-600">Tuyên bố miễn trừ trách nhiệm</a>
          </div>
        </div>
      </div>
    </footer>
  );
};