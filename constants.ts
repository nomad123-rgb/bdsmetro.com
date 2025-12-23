

import { MetroProject, AnalysisArticle, EconomicEvent, BankRate } from './types';

export const METRO_PROJECTS: MetroProject[] = [
  {
    id: 'p_vgp',
    name: 'Vinhomes Grand Park',
    developer: 'Vingroup',
    station: 'Depot Long Bình',
    distance: '2.5km',
    address: 'Nguyễn Xiển, P. Long Thạnh Mỹ, TP. Thủ Đức',
    priceRange: '42 - 80 tr/m²',
    legalStatus: 'CERTIFIED',
    potential: 'HIGH',
    
    // Algorithm Params
    locationScore: 1, 
    densityScore: 10, 
    timePenalty: 4,   
    riskFactor: 5,    
    
    tags: ['MARKET MAKER', 'CANNIBALISM', 'ASSET GRINDER'],
    description: 'Dữ liệu xác nhận đà bán tháo (Panic Selling). Dòng tiền chủ cũ cạn kiệt. Cơ hội "ÉP GIÁ" để thâu tóm tài sản.',
    
    forensicData: {
      warningLevel: 'CAUTION',
      auditDate: 'DEC 2025',
      zones: [
        {
          id: 'z1',
          title: 'Zone 1: The Prosecutor (Legal & Status)',
          iconName: 'SCALE',
          items: [
            {
              subtitle: 'The Legal Fortress',
              type: 'FACT',
              content: 'Không giống như dự án "ma", VGP có pháp lý sạch 90/100. Phân khu Rainbow đã có sổ hồng. Origami đang bàn giao sổ.'
            },
            {
              subtitle: 'The Safety Premium',
              type: 'INSIGHT',
              content: 'Sự an toàn này đã phản ánh vào giá. Bạn mua sự an toàn đồng nghĩa mất đi biên độ tăng giá đột biến (Alpha).'
            },
            {
              subtitle: 'Cannibalism (Tự ăn thịt)',
              type: 'RISK',
              content: 'Nguồn cung nội tại quá lớn. Khi phân khu mới (Beverly) ra hàng gặp áp lực tài chính, nó tạo làn sóng cắt lỗ đè bẹp thanh khoản phân khu cũ.'
            }
          ]
        },
        {
          id: 'z2',
          title: 'Zone 2: The Satellite (Infrastructure)',
          iconName: 'SATELLITE',
          items: [
            {
              subtitle: 'The Lifeline (Vành Đai 3)',
              type: 'OPPORTUNITY',
              content: '19/12/2025 thông xe kỹ thuật 14.7km cao tốc trên cao. Đây là "Cú hích tâm lý" duy nhất để cứu vãn giá trị lúc này.'
            },
            {
              subtitle: 'The Connection Trap',
              type: 'RISK',
              content: 'Dù Vành đai 3 thông, mạch máu nhỏ Nguyễn Xiển vẫn tắc nghẽn. Metro số 1 không đi qua dự án (cần Feeder Bus).'
            },
            {
               subtitle: 'Parking War',
               type: 'RISK',
               content: 'Khu Rainbow thường xuyên quá tải hầm xe, cư dân buộc phải gửi xe ngoài trời.'
            }
          ]
        },
        {
          id: 'z3',
          title: 'Zone 3: The Psychologist (Sentiment)',
          iconName: 'BRAIN',
          items: [
            {
              subtitle: 'Sự phân hóa tàn khốc',
              type: 'INSIGHT',
              content: 'Phe Rainbow (Bình thản giữ giá vì vốn rẻ) vs Phe Origami (Hoảng loạn cắt lỗ vì ngộp bank).'
            },
            {
              subtitle: "Buyer's Market",
              type: 'OPPORTUNITY',
              content: 'Năm 2025, người cầm tiền mặt là Vua. Quyền lực ép giá nằm hoàn toàn trong tay người mua.'
            }
          ]
        },
        {
          id: 'z4',
          title: 'Zone 4: The Executioner (Valuation)',
          iconName: 'AXE',
          items: [
            {
              subtitle: 'Asset Valuation',
              type: 'FACT',
              content: 'Rainbow Studio (~1.6 tỷ): Safe Haven. Origami 2PN (Rớt từ 3.2 tỷ -> 2.4 tỷ): Dao rơi hay Mỏ vàng?'
            },
            {
              subtitle: 'Negative Carry',
              type: 'RISK',
              content: 'Rental Yield 3.5% < Lãi gửi tiết kiệm (5%). Nếu vay bank mua cho thuê, bạn đang lỗ thực (Bleeding).'
            },
             {
              subtitle: 'Hidden Cost Shock',
              type: 'RISK',
              content: 'Phí quản lý hết trợ giá sẽ tăng gấp đôi (dự kiến ~16k/m²) vào 2026.'
            }
          ]
        }
      ]
    },

    heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    
    entryPrice: '42',
    yield: '3.5%', // Very Low
    
    dna: {
        landArea: '271 Ha',
        scale: '71 Tòa',
        density: 'Thấp (22%)',
        tenure: 'Lâu dài (Người Việt)'
    },
    
    amenities: [
        'Công viên 36ha Grand Park',
        'Vincom Mega Mall (Lớn nhất miền Nam)',
        'Vinschool Inter-level',
        'VinBus Depot',
        'Vườn Nhật (Origami)',
        'Hồ bơi nước mặn (Beverly)'
    ],

    fees: {
        distressPrice: '~38 Triệu / m² (Đáy Origami)',
        rentalPrice: '6 - 7.5 Triệu / tháng',
        managementFee: '16k / m² (Dự kiến 2026)',
        parkingFee: '1.25 Triệu / tháng (Sold out)',
        sinkingFund: '~88 Triệu (Đóng 1 lần)'
    },

    recommendedSwap: {
        targetProjectId: 'p1', 
        targetName: 'Masteri Thảo Điền',
        reason: 'Thoát hàng "vùng ven" để về "lõi trung tâm". Thanh khoản T+0.',
        upside: 'Yield +3.5%'
    },

    priceHistory: [
        { period: '2021 (Peak)', primaryPrice: '65 tr/m²', secondaryPrice: '68 tr/m²', variance: '+4.6%', status: 'PREMIUM' },
        { period: '2023 (Crisis)', primaryPrice: '55 tr/m²', secondaryPrice: '48 tr/m²', variance: '-12.7%', status: 'DISCOUNT' },
        { period: 'Q4/2025', primaryPrice: '52 tr/m²', secondaryPrice: '38 tr/m²', variance: '-26.9%', status: 'CRASH' },
    ],

    commute: {
        cbd: '60 phút (Stress Level: Extreme)',
        airport: '50 phút (Traffic Jam Risk)',
        hitech: '15 phút (Good)'
    },

    swot: {
        strengths: [
            'Pháp lý minh bạch (Rainbow có sổ).',
            'Hệ sinh thái All-in-one.',
            'Giá bắt đáy đang rất tốt.'
        ],
        weaknesses: [
            'Nguồn cung nội bộ khổng lồ (Oversupply).',
            'Kẹt xe kinh hoàng đường Nguyễn Xiển.',
            'Yield thấp hơn lãi gửi tiết kiệm.'
        ],
        opportunities: [
            'Vành đai 3 thông xe (12/2025).',
            'Cầu Nhơn Trạch kết nối Sân bay Long Thành.'
        ],
        threats: [
            'Làn sóng cắt lỗ từ Origami/Beverly.',
            'Phí dịch vụ tăng sau 5 năm.',
            'Áp lực lãi vay thả nổi.'
        ]
    },

    risks: [
        'Cannibalism (Tự ăn thịt về giá)',
        'Interest Rate Trap (Bẫy lãi suất)',
        'Traffic Nightmare (Ác mộng giao thông)'
    ],

    legalChecklist: {
        approval1500: true,
        salesPermit: true,
        foundation: true,
        pinkBook: true 
    },

    analystVerdictText: {
        targetBuyer: 'Thợ săn xác chết (Value Hunter): Tìm căn cắt lỗ >20% (Origami 2.4 tỷ). Kẻ trú ẩn (Safe Haven): Mua Rainbow để giữ tiền.',
        avoid: 'Kẻ mơ mộng dòng tiền: Yield 3.5% là mức lỗ thực. Đừng dùng đòn bẩy cao ở đây.'
    }
  },
  {
    id: 'p_gms',
    name: 'Grand Marina Saigon',
    developer: 'Masterise Homes',
    station: 'Ga Ba Son',
    distance: '0m (Direct)',
    address: 'Số 2 Tôn Đức Thắng, P. Bến Nghé, Quận 1',
    priceRange: '350 - 600 tr/m²',
    legalStatus: 'CERTIFIED',
    potential: 'MEDIUM',
    
    // Algorithm Params
    locationScore: 10, // Perfect location
    densityScore: 10,  // Perfect amenities
    timePenalty: 1,    // Almost done
    riskFactor: 5,     // FINANCIAL RISK (Negative Carry)
    
    tags: ['BRANDED', 'METRO CONNECTED', 'MARRIOTT'],
    description: 'Biểu tượng Branded Residence hàng hiệu đầu tiên tại Việt Nam. Vị trí số 1 "Heritage" bên bờ sông Sài Gòn.',
    
    // NEW STRUCTURED FORENSIC DATA (Minimal for now)
    forensicData: {
      warningLevel: 'CAUTION',
      auditDate: 'DEC 2025',
      zones: [
         {
          id: 'z1',
          title: 'Zone 1: The Prosecutor (Legal & Status)',
          iconName: 'SCALE',
          items: [
            { subtitle: 'Legal Status', type: 'FACT', content: 'Pháp lý hoàn chỉnh, sở hữu lâu dài. Thương hiệu Marriott bảo chứng.' },
            { subtitle: 'Negative Carry', type: 'RISK', content: 'Giá vốn quá cao khiến Rental Yield < 2%. Dòng tiền âm nặng nề.' }
          ]
         }
      ]
    },

    heroImage: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1984&q=80',
    entryPrice: '350',
    yield: '1.8%',
    
    dna: {
        landArea: '10 Ha',
        scale: '8 Tòa',
        density: 'Rất Cao (Khối đế thương mại)',
        tenure: 'Lâu dài (Người Việt) / 50 năm (NN)'
    },
    
    fees: {
        distressPrice: '~300 Triệu / m² (Secondary Market)',
        rentalPrice: '40 - 60 Triệu / tháng (1PN - 2PN)',
        managementFee: '$8 / m² (Chuẩn Marriott)',
        parkingFee: '5 Triệu / tháng',
        sinkingFund: '2% Giá trị HĐMB'
    },

    // THE PIVOT: Recommend The Marq
    recommendedSwap: {
        targetProjectId: 'p_marq', 
        targetName: 'The Marq (Hongkong Land)',
        reason: 'Cùng đẳng cấp Quận 1 nhưng giá rẻ hơn 40%. Private Lift.',
        upside: 'Save ~5 Billion'
    },

    priceHistory: [
        { period: '2021 (Launch)', primaryPrice: '380 tr/m²', secondaryPrice: 'N/A', variance: '0%', status: 'PREMIUM' },
        { period: '2023', primaryPrice: '420 tr/m²', secondaryPrice: '350 tr/m²', variance: '-16.6%', status: 'DISCOUNT' },
        { period: 'Q4/2025', primaryPrice: '450 tr/m²', secondaryPrice: '320 tr/m²', variance: '-28.8%', status: 'CRASH' },
    ],

    swot: {
        strengths: [
            'Vị trí "Non Sông Liền Một Dải" - Độc tôn tại Quận 1.',
            'Thương hiệu Marriott quản lý vận hành (Global Standard).',
            'Kết nối trực tiếp Ga ngầm Ba Son.'
        ],
        weaknesses: [
            'Giá vốn quá cao (Entry Price) làm giảm Rental Yield xuống < 2%.',
            'Phí dịch vụ đắt đỏ kén khách thuê.',
            'Mật độ giao thông đường Tôn Đức Thắng cực cao.'
        ],
        opportunities: [
            'Cộng đồng tinh hoa (HNWI) hội tụ.',
            'Tăng giá vốn (Capital Gain) dài hạn do khan hiếm quỹ đất Q1.',
            'Cho thuê ngắn hạn dạng Luxury Serviced Apartment.'
        ],
        threats: [
            'Rủi ro thanh khoản (Khó bán lại nhanh).',
            'Hết "Room" cho người nước ngoài (giảm cầu).',
            'Suy thoái kinh tế ảnh hưởng chi tiêu giới siêu giàu.'
        ],
    },
    
    risks: [
        'Negative Cashflow (Dòng tiền âm)',
        'Liquidity Risk (Rủi ro thanh khoản)'
    ],
    
    legalChecklist: {
        approval1500: true,
        salesPermit: true,
        foundation: true,
        pinkBook: true 
    },

    analystVerdictText: {
        targetBuyer: 'Giới siêu giàu (Ultra HNWI) mua để sưu tầm (Trophy Asset) hoặc khẳng định địa vị. Không dành cho đầu tư dòng tiền.',
        avoid: 'Nhà đầu tư kỳ vọng cho thuê sinh lời hoặc lướt sóng ngắn hạn.'
    }
  },
  {
    id: 'p5',
    name: 'Vinhomes Golden River',
    developer: 'Vingroup',
    station: 'Ga Ba Son',
    distance: '200m',
    address: 'Số 2 Tôn Đức Thắng, P. Bến Nghé, Quận 1',
    priceRange: '160 - 250 tr/m²',
    legalStatus: 'CERTIFIED',
    potential: 'MEDIUM',
    
    // Algorithm Params
    locationScore: 9,
    densityScore: 8,
    timePenalty: 1,
    riskFactor: 2,
    
    tags: ['RIVER FRONT', 'CBD', 'LUXURY'],
    description: 'Khu đô thị sinh thái ven sông duy nhất tại lõi Quận 1. Đã bàn giao và vận hành ổn định. Vị trí kim cương nhưng thiết kế và mật độ xây dựng vẫn còn nhiều tranh cãi.',
    entryPrice: '160',
    yield: '2.5%',
    heroImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80',
    
    dna: {
        landArea: '25.3 Ha',
        scale: '13 Tòa',
        density: 'Trung bình',
        tenure: 'Lâu dài'
    },
    
    fees: {
        distressPrice: '~140 Triệu / m²',
        rentalPrice: '25 - 45 Triệu / tháng',
        managementFee: '21k / m²',
        parkingFee: '2.2 Triệu / tháng',
        sinkingFund: 'Đã đóng'
    },

    swot: {
        strengths: [
            'Vị trí sát sông Sài Gòn, không khí thoáng đãng.',
            'Kết nối Metro Ga Ba Son.',
            'Giá mềm hơn 50% so với Grand Marina kế bên.'
        ],
        weaknesses: [
            'Mật độ thang máy cao (chờ lâu giờ cao điểm).',
            'Một số tòa bị chắn view bởi các dự án mới.',
            'Chất lượng hoàn thiện nội thất bắt đầu xuống cấp.'
        ],
        opportunities: [
            'Cầu Thủ Thiêm 2 hoàn thiện giúp kết nối nhanh sang Q2.',
            'Hưởng lợi tiện ích từ khu Grand Marina.'
        ],
        threats: [
            'Sự cạnh tranh gay gắt từ nguồn cung hạng sang mới.',
            'Ngập cục bộ khi triều cường đường Nguyễn Hữu Cảnh.'
        ]
    },

    risks: [
        'Construction Quality (Chất lượng xây dựng)',
        'Internal Competition (Cạnh tranh nội khu)'
    ],
    
    legalChecklist: {
        approval1500: true,
        salesPermit: true,
        foundation: true,
        pinkBook: true 
    },

    analystVerdictText: {
        targetBuyer: 'Gia đình trung lưu cao cấp muốn sống tại Q1 nhưng cần không gian yên tĩnh ven sông.',
        avoid: 'Nhà đầu tư tìm kiếm sự tăng trưởng đột phá (giá đã bão hòa).'
    }
  },
  {
    id: 'p_marq',
    name: 'The Marq',
    developer: 'Hongkong Land',
    station: 'Ga Ba Son',
    distance: '800m',
    address: '29B Nguyễn Đình Chiểu, P. Đa Kao, Quận 1',
    priceRange: '250 - 320 tr/m²',
    legalStatus: 'CERTIFIED',
    potential: 'HIGH',
    
    // Algorithm Params
    locationScore: 8,
    densityScore: 9,
    timePenalty: 1,
    riskFactor: 1, // HK Land reputation
    
    tags: ['PRIVATE LIFT', 'BOUTIQUE', 'FOREIGNER FAVORITE'],
    description: 'Viên ngọc ẩn mình (Hidden Gem) giữa lòng Quận 1. Phát triển bởi Hongkong Land với chất lượng hoàn thiện vượt trội. Điểm nhấn là thang máy riêng (Private Lift) cho các căn hộ hạng sang.',
    heroImage: 'https://images.unsplash.com/photo-1600596542815-2a5481cc6752?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    entryPrice: '250',
    yield: '3.2%',
    
    dna: {
        landArea: '0.5 Ha',
        scale: '2 Tòa (515 căn)',
        density: 'Thấp (Boutique)',
        tenure: 'Lâu dài / 50 năm'
    },
    
    fees: {
        distressPrice: '~230 Triệu / m²',
        rentalPrice: '40 - 70 Triệu / tháng',
        managementFee: '28k / m²',
        parkingFee: '3 Triệu / tháng',
        sinkingFund: 'Đóng theo tiến độ'
    },
    
    swot: {
        strengths: [
            'Chủ đầu tư Hongkong Land uy tín hàng đầu Châu Á.',
            'Thiết kế Private Lift sang trọng, riêng tư.',
            'Tiện ích hồ bơi vô cực (Sky Deck) view toàn cảnh Q1.'
        ],
        weaknesses: [
            'Đường Nguyễn Đình Chiểu 1 chiều, hay kẹt xe.',
            'Khuôn viên đất nhỏ, ít không gian cây xanh mặt đất.'
        ],
        opportunities: [
            'Nguồn cung căn hộ Q1 khan hiếm, giá trị bền vững.',
            'Được khách thuê Ngoại giao đoàn / Lãnh sự quán ưa chuộng.'
        ],
        threats: [
            'Pháp lý sở hữu 50 năm với một số căn (Officetel).',
            'Khó cạnh tranh về view sông so với Ba Son.'
        ],
    },

    risks: [
        'Limited Land Bank (Quỹ đất nhỏ)',
        'Traffic Congestion (Kẹt xe)'
    ],
    
    legalChecklist: {
        approval1500: true,
        salesPermit: true,
        foundation: true,
        pinkBook: true 
    },

    analystVerdictText: {
        targetBuyer: 'Giới tinh hoa thích sự riêng tư (Low key wealth). Nhà đầu tư thích giữ tài sản an toàn (Defensive Asset).',
        avoid: 'Nhà đầu tư lướt sóng ngắn hạn.'
    }
  },
  {
    id: 'p2',
    name: 'Lumière Riverside',
    developer: 'Masterise Homes',
    station: 'Ga An Phú',
    distance: '500m',
    address: '628A Xa Lộ Hà Nội, P. An Phú, Quận 2',
    priceRange: '130 - 160 tr/m²',
    legalStatus: 'PENDING',
    potential: 'HIGH',
    
    // Algorithm Params
    locationScore: 8,
    densityScore: 8,
    timePenalty: 2, // Still under construction
    riskFactor: 3,
    
    tags: ['LEAFSCAPE', 'RENTAL HUB', 'NEW HYPE'],
    description: 'Kiệt tác thiết kế "Leafscape" tại cửa ngõ Thảo Điền. Được định vị là toà nhà biểu tượng mới thay thế Masteri Thảo Điền về đẳng cấp cho thuê tại khu Đông.',
    heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    entryPrice: '130',
    yield: '4.5%',
    
    dna: {
        landArea: '1.9 Ha',
        scale: '2 Tòa',
        density: 'Cao',
        tenure: 'Lâu dài'
    },

    fees: {
        distressPrice: '~110 Triệu / m²',
        rentalPrice: '30 - 45 Triệu / tháng',
        managementFee: '28k / m²',
        parkingFee: '2 Triệu / tháng',
        sinkingFund: '2%'
    },

    swot: {
        strengths: [
            'Vị trí mặt tiền Xa Lộ Hà Nội, tầm nhìn thoáng.',
            'Quản lý bởi Masterise Property Management (Dịch vụ tốt).',
            'Thiết kế xanh độc đáo, khác biệt.'
        ],
        weaknesses: [
            'Tiếng ồn và bụi từ Xa Lộ Hà Nội và tuyến Metro trên cao.',
            'Phí quản lý cao so với mặt bằng khu vực.'
        ],
        opportunities: [
            'Hút khách thuê từ Masteri Thảo Điền chuyển sang (Upgrade nhu cầu).',
            'Thiết lập mặt bằng giá thuê mới cho khu vực.'
        ],
        threats: [
            'Áp lực giao thông cực lớn tại nút giao An Phú (đang thi công).',
            'Nguồn cung căn hộ cao cấp tại Q2 đang tăng.'
        ]
    },

    risks: [
        'Noise Pollution (Ô nhiễm tiếng ồn)',
        'Traffic Jam (Kẹt xe nút giao)'
    ],
    
    legalChecklist: {
        approval1500: true,
        salesPermit: true,
        foundation: true,
        pinkBook: false 
    },

    analystVerdictText: {
        targetBuyer: 'Nhà đầu tư Buy-to-let (Mua cho thuê) nhắm đến khách Expats cao cấp. Giới trẻ thành đạt thích phong cách sống hiện đại.',
        avoid: 'Người mua ở cần không gian yên tĩnh tuyệt đối.'
    }
  },
  {
    id: 'p1',
    name: 'Masteri Thảo Điền',
    developer: 'Masterise Homes (Liên đới: Osaka Garden / Golden Hills)',
    station: 'Ga An Phú (Line 1)',
    distance: '0m (Direct Connect)',
    address: '159 Võ Nguyên Giáp (Xa lộ HN), Thảo Điền, TP. Thủ Đức',
    priceRange: '100 - 115 tr/m²',
    legalStatus: 'CERTIFIED',
    potential: 'LOW',
    
    // Algorithm Params: The Architect v3.0 (Red Pill Data)
    locationScore: 9.8, 
    densityScore: 2.0,  
    timePenalty: 5,   
    riskFactor: 5, // High Risk Factor due to Corp Debt
    
    tags: ['YIELD TRAP', 'CORP DEBT RISK', 'HIGH DENSITY', 'FLOOD ISLAND', 'ANCHORING TRAP'],
    description: 'CASE STUDY: Yield Trap & Corp Debt. Dự án quốc dân nhưng lợi tức thực tế thua lạm phát. Mật độ như tái định cư cao cấp.',
    heroImage: 'https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    
    entryPrice: '110',
    yield: '2.15%',

    dna: {
        landArea: '79,839 m2',
        scale: '5 Tòa tháp',
        density: '37% (Thực tế cực cao)',
        tenure: 'Lâu dài (Người Việt)'
    },

    amenities: [
        'Vincom Mega Mall Thảo Điền',
        'Kết nối trực tiếp Metro An Phú',
        'Hồ bơi rộng nhưng quá tải',
        'Khu BBQ, Gym'
    ],

    fees: {
        distressPrice: '95 Triệu / m²',
        rentalPrice: '18 - 25 Triệu / tháng',
        managementFee: '18k / m²',
        parkingFee: '1.4 Triệu / tháng (Waitlist)',
        sinkingFund: 'Đã đóng'
    },

    // FORENSIC DOSSIER - RED PILL EDITION
    forensicData: {
        warningLevel: 'CRITICAL',
        auditDate: 'DEC 2025',
        zones: [
            {
                id: 'z1',
                title: 'Zone 1: The Prosecutor (Pháp Lý & Corp)',
                iconName: 'SCALE',
                items: [
                    { subtitle: 'Kỷ lục Sổ Hồng', type: 'FACT', content: 'Cư dân nhận sổ sau 12 tháng (Bà Thu Nga - 9/2017). Pháp lý tốt.' },
                    { subtitle: 'Bom Nợ Trái Phiếu', type: 'RISK', content: 'Hệ sinh thái liên quan (Osaka Garden, Mediterranean...) đòn bẩy 2800%. Rủi ro dòng tiền.' },
                    { subtitle: 'Tranh chấp nội bộ', type: 'RISK', content: 'Lãi suất quỹ bảo trì & Chỗ đậu xe Tòa T1 vẫn là vấn đề dai dẳng.' }
                ]
            },
            {
                id: 'z2',
                title: 'Zone 2: The Satellite (Thực tế Hạ tầng)',
                iconName: 'SATELLITE',
                items: [
                    { subtitle: "Mật độ 'Tổ ong'", type: 'RISK', content: 'T1-T4 (20 căn/sàn), T5 (24 căn/sàn) -> Quá tải thang máy giờ cao điểm.' },
                    { subtitle: 'Hội chứng Ốc Đảo', type: 'RISK', content: 'Dự án cao ráo, nhưng đường Nguyễn Văn Hưởng ngập nặng -> Xe máy không thể ra vào khi mưa lớn.' },
                    { subtitle: 'Môi trường', type: 'RISK', content: 'T1, T2 hứng trọn bụi mịn và rung chấn Metro/Container.' }
                ]
            },
            {
                id: 'z3',
                title: 'Zone 3: The Psychologist (Xã hội học)',
                iconName: 'BRAIN',
                items: [
                    { subtitle: 'Bẫy Mỏ Neo (Anchoring)', type: 'FACT', content: "Tin đăng ảo 'Cắt lỗ 2.2 tỷ' làm nát tâm lý thị trường, dìm giá trị thực." },
                    { subtitle: 'Xung đột Tenant vs Owner', type: 'FACT', content: 'Mâu thuẫn lối sống giữa khách thuê ngắn hạn (tiệc tùng) và cư dân gia đình.' },
                    { subtitle: 'Positioning', type: 'INSIGHT', content: "Nơi 'nhập môn' Thảo Điền. Người giàu thật sự đã di cư sang Gateway, Nassim, Q2." }
                ]
            }
        ]
    },

    priceHistory: [
        { period: '2015 (Launch)', primaryPrice: '30 tr/m²', secondaryPrice: 'N/A', variance: '0%', status: 'PREMIUM' },
        { period: '2025 (Current)', primaryPrice: 'N/A', secondaryPrice: '110 tr/m²', variance: '+266%', status: 'PREMIUM' },
        { period: 'Trend', primaryPrice: '-', secondaryPrice: 'Flat', variance: 'Ceiling', status: 'DISCOUNT' }
    ],

    recommendedSwap: {
        targetProjectId: 'p_nassim', // Hypothetical ID
        targetName: 'The Nassim / Gateway Thảo Điền',
        reason: "Thoát 'Bẫy Lợi Tức' 2.15% & Tránh 'Mật độ 24 căn/sàn'.",
        upside: 'Private Lift, Yield 4-5%'
    },

    swot: {
        strengths: ['Thanh khoản tốt nhất khu vực', 'Vị trí sát Metro nhất'],
        weaknesses: ['Mật độ quá cao (24 căn/sàn)', 'Ồn ào, bụi bặm', 'Hệ sinh thái nợ'],
        opportunities: ['Cho thuê ngắn hạn'],
        threats: ['Cạnh tranh từ các dự án mới (Lumiere, Thảo Điền Green)']
    },

    risks: [
        'Yield Trap (Bẫy lợi tức)',
        'Corp Debt Risk (Rủi ro nợ doanh nghiệp)',
        'Flood Island (Ốc đảo ngập)'
    ],

    legalChecklist: {
        approval1500: true,
        salesPermit: true,
        foundation: true,
        pinkBook: true
    },
    
    analystVerdictText: {
        targetBuyer: 'Nhà đầu tư F0 mới gia nhập thị trường, cần thanh khoản nhanh. Người thích sự đông đúc.',
        avoid: 'Nhà đầu tư lão luyện (Sophisticated Investor) tìm kiếm Yield > 4%.'
    }
  }
];

export const ANALYSIS_ARTICLES: AnalysisArticle[] = [
  {
    id: 'a_mtd_finance_2025',
    title: 'MASTERI THẢO ĐIỀN 2025: KHI "TÀI SẢN PHÒNG THỦ" TRỞ THÀNH "GÁNH NẶNG LỢI TỨC"',
    summary: 'EXECUTIVE SUMMARY: Giá thị trường đạt đỉnh, nhưng Net Yield rơi tự do về 2.15%. Dự án đang chuyển dịch từ "Growth Asset" sang "Low-Yield Bond". Cân nhắc Exit.',
    author: 'Khối Phân Tích Dữ Liệu',
    date: '22 Dec 2025',
    category: 'MARKET',
    imageUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    content: [
      { type: 'heading', text: '1. Mở Đầu: Hào Quang Cũ và Thực Tại Mới' },
      { type: 'paragraph', text: 'Trong chu kỳ 10 năm phát triển vũ bão của bất động sản Khu Đông TP.HCM (2015-2025), Masteri Thảo Điền (MTD) xứng đáng được gọi là "The Market Opener" – Người mở đường vĩ đại. Dự án này đã thiết lập nên chuẩn mực cho mô hình TOD (Transit Oriented Development) và là biểu tượng của sự thành công về mặt thương mại.' },
      { type: 'paragraph', text: 'Tuy nhiên, thị trường tài chính không trả tiền cho quá khứ. Bước sang năm tài khóa 2025, dưới lăng kính của hệ thống Bdsmetro Forensic Engine, chúng tôi nhận thấy dự án này đang bước vào giai đoạn "Bão hòa giá trị" (Value Saturation). Những nhà đầu tư tinh tường cần phải đặt lại câu hỏi: Liệu sự an toàn của Masteri Thảo Điền có đang bào mòn lợi nhuận thực tế của danh mục đầu tư?' },
      
      { type: 'image', imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2071&auto=format&fit=crop', caption: 'Khu vực Thảo Điền nhìn từ trên cao - Nơi mật độ xây dựng đang đạt ngưỡng tới hạn.' },

      { type: 'heading', text: '2. Phẫu Thuật Hiệu Suất Đầu Tư (ROI Analysis)' },
      { type: 'paragraph', text: 'Sự tách rời (Decoupling) giữa Thị giá và Giá trị khai thác dòng tiền đang diễn ra nghiêm trọng nhất lịch sử dự án.' },
      { type: 'paragraph', text: 'Định giá "đã trần" (Ceiling Hit): Dữ liệu thị trường sơ cấp tháng 12/2024 tại khu vực Thảo Điền ghi nhận MTD đang giao dịch ở ngưỡng 100 - 115 triệu VNĐ/m². Đây là mức giá đã "Price-in" (phản ánh vào giá) tất cả các yếu tố tích cực nhất: Metro vận hành, trung tâm thương mại sầm uất và vị trí cửa ngõ. Dư địa cho những cú sốc tăng giá (Capital Gain Shocks) gần như bằng không.' },
      
      { type: 'paragraph', text: 'Hãy cùng Bdsmetro.com bóc tách một P&L (Báo cáo Lãi/Lỗ) thực tế cho một căn 2PN điển hình với Vốn đầu tư ban đầu (CapEx) ~7.8 tỷ VNĐ và Giá thuê kỳ vọng 20 triệu VNĐ/tháng:' },
      
      { type: 'list', text: [
        'Doanh thu năm (Gross): 240.000.000 VNĐ.',
        '(-) Phí môi giới (1 tháng): 20.000.000 VNĐ.',
        '(-) Tỷ lệ trống (Vacancy rate 8%): 20.000.000 VNĐ.',
        '(-) Phí Quản lý & Bảo trì: ~32.000.000 VNĐ/năm.',
        '= LỢI NHUẬN RÒNG (NET): ~168.000.000 VNĐ/NĂM.'
      ]},
      
      { type: 'warning', text: 'KẾT QUẢ: Tỷ suất vốn hóa (Cap Rate) thực tế = 2.15%. Trong bối cảnh lãi suất huy động ~5%, việc nắm giữ MTD đồng nghĩa với việc chịu LỖ THỰC (Real Negative Return).' },
      
      { type: 'image', imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop', caption: 'Biểu đồ minh họa sự sụt giảm của Rental Yield so với Lãi suất ngân hàng (Minh họa).' },

      { type: 'heading', text: '3. Rủi Ro Hệ Thống: Bóng Ma Của Đòn Bẩy Tài Chính' },
      { type: 'paragraph', text: 'Khác với rủi ro pháp lý (vốn đã được Masteri Thảo Điền giải quyết triệt để bằng Sổ hồng), rủi ro năm 2025 nằm ở Chất lượng Vận hành (Operation Quality).' },
      { type: 'paragraph', text: 'Hệ thống Bdsmetro ghi nhận áp lực tài chính từ hệ sinh thái doanh nghiệp liên quan, với khối lượng trái phiếu phát hành trong quá khứ ước tính lên tới 37.000 tỷ đồng. Trong giai đoạn tái cấu trúc nợ 2024-2025, ưu tiên hàng đầu của bất kỳ doanh nghiệp nào cũng là dòng tiền (Cashflow) để đảm bảo nghĩa vụ nợ.' },
      
      { type: 'image', imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop', caption: 'Áp lực đòn bẩy tài chính có thể ảnh hưởng đến chất lượng bảo trì các dự án cũ.' },

      { type: 'heading', text: '4. Kết Luận & Khuyến Nghị Danh Mục' },
      { type: 'paragraph', text: 'Masteri Thảo Điền 2025 không còn là một "bất động sản tăng trưởng" (Growth Real Estate). Nó đã biến đổi hình thái thành một loại "Trái phiếu lãi suất thấp được bảo đảm bằng bất động sản".' },
      
      { type: 'list', text: [
        'ĐỐI VỚI NHÀ ĐẦU TƯ TÀI CHÍNH: EXIT (Thanh Lý). Hãy tận dụng lợi thế thanh khoản tuyệt vời của dự án hiện tại để chốt lời. Dòng tiền nên được tái cơ cấu (Re-allocate) vào các thị trường ngách có Yield thực >5%.',
        'ĐỐI VỚI NGƯỜI MUA ĐỂ Ở (END-USERS): CAREFUL BUY (Mua Thận Trọng). Chỉ xuống tiền nếu bạn chấp nhận trả giá cho sự tiện lợi của Metro, nhưng hãy thương lượng giá dựa trên luận điểm về mật độ dân số quá cao.',
        'ĐỐI VỚI QUỸ GIA ĐÌNH (WEALTH MANAGEMENT): HOLD (Nắm Giữ) chỉ khi mục tiêu duy nhất là bảo toàn vốn gốc (Capital Preservation).'
      ]}
    ]
  },
  {
    id: 'a_mtd_forensic_tech',
    title: 'BÁO CÁO PHÁP Y MTD: GIẢI MÃ TÁC ĐỘNG CỦA MẬT ĐỘ & HẠ TẦNG LÊN CHẤT LƯỢNG SỐNG',
    summary: 'Sự thật trần trụi về chỉ số mật độ 24 căn/sàn và ô nhiễm tiếng ồn. Tại sao giới thượng lưu (Affluent Class) đang lặng lẽ rời bỏ "biểu tượng" này?',
    author: 'Forensic Architect',
    date: '13 Dec 2025',
    category: 'INFRASTRUCTURE',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    content: [
      { type: 'heading', text: 'Mở Đầu: Cái Bẫy Của Sự Hào Nhoáng' },
      { type: 'paragraph', text: 'Sự hào nhoáng của vị trí "cửa ngõ" và kết nối trực tiếp Metro (TOD Model) thường che lấp những hạn chế vật lý của dự án. Tại Bdsmetro, chúng tôi phân tích dự án dựa trên các chỉ số kỹ thuật thuần túy để đánh giá tính bền vững của không gian sống.' },
      { type: 'heading', text: '1. Chỉ Số Mật Độ (Density Score) - Cảnh Báo Đỏ' },
      { type: 'paragraph', text: 'Trong tiêu chuẩn căn hộ hạng sang (Luxury Standard), mật độ thang máy lý tưởng là < 60 căn/thang. Tại Masteri Thảo Điền, đặc biệt là tòa T5, con số này vượt xa tiêu chuẩn an toàn tiện nghi:' },
      { type: 'list', text: [
        'Mật độ sàn: Lên tới 24 căn hộ/sàn.',
        'Hệ quả: Tình trạng quá tải hạ tầng giao thông đứng (Vertical Traffic Jam) vào giờ cao điểm là hiện hữu.',
        'Mất riêng tư: Hành lang dài và thiết kế đối xứng làm tăng ô nhiễm tiếng ồn nội khu.'
      ]},
      { type: 'heading', text: '2. Vị Trí Chiến Lược Hay "Hòn Đảo Cô Lập"?' },
      { type: 'paragraph', text: 'Dưới góc độ quy hoạch thủy văn, MTD sở hữu cốt nền cao ráo. Tuy nhiên, khả năng tiếp cận (Accessibility) bị đe dọa bởi yếu tố ngoại vi. Khi đường Nguyễn Văn Hưởng và Quốc Hương ngập lụt, dự án rơi vào trạng thái "cô lập chức năng".' },
      { type: 'warning', text: 'Các tháp mặt tiền (T1, T2) chịu tác động trực tiếp của ô nhiễm tiếng ồn tần số thấp từ Metro và xe container. Kính cách âm làm mất đi trải nghiệm "không khí tươi".' }
    ]
  },
  {
    id: 'a_mtd_portfolio_strategy',
    title: 'CHIẾN LƯỢC 2025: KHI NÀO NÊN "CHỐT LỜI" MASTERI ĐỂ TÁI CƠ CẤU DANH MỤC?',
    summary: 'Hold (Giữ) hay Liquidate (Thanh lý)? Tư vấn chiến lược thoái vốn tối ưu để chuyển đổi sang tài sản có dư địa tăng trưởng (Alpha) cao hơn.',
    author: 'Portfolio Manager',
    date: '12 Dec 2025',
    category: 'MARKET',
    imageUrl: 'https://images.unsplash.com/photo-1611974765270-ca12586343bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    isLocked: true,
    content: [
        { type: 'heading', text: 'Tư Duy Danh Mục (Portfolio Mindset)' },
        { type: 'paragraph', text: 'Một sai lầm kinh điển của nhà đầu tư cá nhân là "yêu thích cổ phiếu/tài sản" của mình quá mức. Trong quản lý gia sản chuyên nghiệp, không có tài sản nào là vĩnh cửu, chỉ có hiệu suất là chân lý.' },
        { type: 'heading', text: 'Dấu Hiệu Cần Thoái Vốn (Exit Signals)' },
        { type: 'list', text: [
            'Hiệu ứng trần giá (Ceiling Effect): Giá MTD đã tăng 157% - 266% từ lúc mở bán. Dư địa tăng trưởng gần như bằng 0.',
            'Chi phí cơ hội: Với 8 tỷ vốn chôn tại MTD (thu về 15tr/tháng), bạn đang bỏ lỡ cơ hội mua các tài sản vùng ven có tiềm năng x2 trong 5 năm tới (Vành Đai 3).',
            'Sự xuống cấp: Sau 10 năm, chi phí bảo trì sẽ bắt đầu ăn mòn lợi nhuận.'
        ]},
        { type: 'heading', text: 'Chiến Lược Hoán Đổi (Swap Strategy)' },
        { type: 'paragraph', text: 'Chúng tôi khuyến nghị thực hiện lệnh bán (SELL) đối với MTD ở vùng giá 110tr/m2 và thực hiện tái đầu tư:' },
        { type: 'list', text: [
            'Phương án Lifestyle (Ở sướng): Chuyển sang The Nassim hoặc Gateway (Thảo Điền) để lấy Private Lift và mật độ thấp.',
            'Phương án Capital Gain (Lãi vốn): Chuyển sang The Global City hoặc Vinhomes Grand Park (phân khu thấp tầng) để đón sóng hạ tầng 2026.'
        ]}
    ]
  },
  {
    id: 'a1',
    title: 'THE GREAT MIGRATION: Dòng tiền đang tháo chạy khỏi Second Home biển?',
    summary: 'Dữ liệu cho thấy sự sụt giảm 45% giao dịch tại Phan Thiết và Hồ Tràm. Nhà đầu tư đang quay về BĐS dòng tiền tại trung tâm TP.HCM. Liệu đây là cú điều chỉnh hay sự sụp đổ của kỷ nguyên "nghỉ dưỡng"?',
    author: 'Dr. Minh Vo',
    date: '12 Dec 2025',
    category: 'MARKET',
    imageUrl: 'https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    content: [
      { type: 'paragraph', text: 'Thị trường BĐS nghỉ dưỡng đang đối mặt với "cơn bão hoàn hảo": Pháp lý sở hữu chưa rõ ràng, cam kết lợi nhuận bị phá vỡ, và lãi suất huy động tăng cao...' },
      { type: 'heading', text: 'Số liệu không biết nói dối' },
      { type: 'paragraph', text: 'Theo thống kê quý 3/2025, lượng tồn kho BĐS biển đã đạt mức kỷ lục...' }
    ]
  },
  {
    id: 'a2',
    title: 'METRO LINE 1: Tác động thực tế lên giá BĐS sau 6 tháng vận hành',
    summary: 'Không phải tất cả dự án dọc Metro đều tăng giá. Chúng tôi đã tìm ra quy luật "Bán kính vàng 500m" và những dự án bị "miễn nhiễm" với hiệu ứng Metro do ô nhiễm tiếng ồn.',
    author: 'Sarah Nguyen',
    date: '10 Dec 2025',
    category: 'INFRASTRUCTURE',
    imageUrl: 'https://images.unsplash.com/photo-1465447142348-e9952c393450?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    content: [
        { type: 'paragraph', text: 'Sau 6 tháng vận hành thương mại, Metro Số 1 đã định hình lại bản đồ giá BĐS khu Đông...' },
        { type: 'warning', text: 'Cảnh báo: Các căn hộ mặt tiền Xa Lộ Hà Nội đang chịu mức tiếng ồn vượt ngưỡng 70dB.' }
    ]
  },
  {
    id: 'a3',
    title: 'LUẬT ĐẤT ĐAI 2026: Cú sốc nguồn cung và sự lên ngôi của BĐS pháp lý sạch',
    summary: 'Bảng giá đất mới sát giá thị trường sẽ khiến chi phí đầu vào tăng 30%. Các dự án cũ đã đóng tiền sử dụng đất (như VGP, Masteri) sẽ trở thành "hàng hiếm".',
    author: 'Legal Team',
    date: '05 Dec 2025',
    category: 'LEGAL',
    imageUrl: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    isLocked: true,
    content: []
  }
];

export const ECONOMIC_EVENTS: EconomicEvent[] = [
  { id: 'e1', time: '14:30', event: 'SBV Credit Growth Limit Decision', impact: 'High', previous: '14%', forecast: '15%', actual: '15%' },
  { id: 'e2', time: '09:00', event: 'Vinhomes (VHM) Q4 Earnings Call', impact: 'Medium', previous: '--', forecast: '--', actual: '--' },
  { id: 'e3', time: '19:00', event: 'Metro Line 1 Technical Report', impact: 'Low', previous: '--', forecast: '--', actual: 'Released' },
];

export const BANK_RATES: BankRate[] = [
  { id: 'b1', bankName: 'Vietcombank', code: 'VCB', rate12M: '4.8%', lendingRate: '7.5%', trend: 'FLAT' },
  { id: 'b2', bankName: 'Techcombank', code: 'TCB', rate12M: '5.2%', lendingRate: '8.2%', trend: 'UP' },
  { id: 'b3', bankName: 'VPBank', code: 'VPB', rate12M: '5.5%', lendingRate: '9.0%', trend: 'UP' },
  { id: 'b4', bankName: 'Shinhan Bank', code: 'SHB', rate12M: '4.5%', lendingRate: '6.8%', trend: 'DOWN' },
];
