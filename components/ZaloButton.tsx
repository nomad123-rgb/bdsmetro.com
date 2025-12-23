import React from 'react';

export const ZaloButton: React.FC = () => {
  return (
    <a 
      href="#" 
      className="fixed bottom-6 right-6 z-50 flex items-center bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-transform hover:scale-105 group overflow-hidden pl-1 pr-5 py-1"
    >
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3 shrink-0">
        <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/1200px-Icon_of_Zalo.svg.png" 
            alt="Zalo" 
            className="w-6 h-6"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] uppercase font-bold text-blue-100 leading-tight">Chat với chuyên gia</span>
        <span className="text-sm font-bold leading-tight">Tư vấn ngay</span>
      </div>
    </a>
  );
};