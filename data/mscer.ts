// Extended MSCer data for detail pages
export interface MSCerDetail {
  id: string;
  name: string;
  position: string;
  company: string;
  avatar: string;
  achievement: string;
  testimonial: string;
  graduationYear: string;
  promotion: string;
  socialImpact: string;
  course: string;
  skills: string[];
  achievements: string[];
  mentoring: string;
  background: {
    education: string;
    previousRole: string;
    experience: string;
  };
}

export const mscersData: MSCerDetail[] = [
 {
  "id": "pham-hoang-minh-khanh",
  "name": "Phạm Hoàng Minh Khánh",
  "position": "Nhà sáng lập & Giám đốc",
  "company": "SMENTOR, SMAR, SGA",
  "avatar": "/MSCers/PHMK.webp",
  "achievement": "Nhà sáng lập đa ngành, Giảng viên & Chuyên gia tư vấn chiến lược",
  "testimonial": "Kiến thức và kỹ năng được hệ thống hóa tại MSC đã trở thành nền tảng vững chắc, giúp tôi tự tin sáng lập và điều hành hiệu quả nhiều doanh nghiệp. Đây là nơi cung cấp tư duy chiến lược để biến ý tưởng thành hiện thực.",
  "graduationYear": "2022",
  "promotion": "Từ Trưởng phòng Marketing → Giám đốc → Sáng lập nhiều công ty & Viện phó",
  "socialImpact": "Sáng lập và vận hành 3+ công ty trong lĩnh vực tư vấn, công nghệ và nông nghiệp. Giảng dạy và định hướng cho hàng ngàn sinh viên tại Đại học UEF.",
  "course": "Leadership Excellence & Strategic Management",
  "skills": [
    "Lãnh đạo & Quản trị",
    "Chiến lược Marketing",
    "Khởi nghiệp & Xây dựng doanh nghiệp",
    "Tư vấn doanh nghiệp",
    "Giảng dạy & Đào tạo"
  ],
  "achievements": [
    "Sáng lập & Giám đốc Công ty TNHH Smentor (2017-nay)",
    "Sáng lập & Giám đốc Công ty cổ phần SMAR (2020-nay)",
    "Sáng lập & Giám đốc Công ty phát triển Nông Nghiệp Xanh SGA (2022-nay)",
    "Viện Phó, Viện Việt Nam Bách Nghệ Thực Hành (2021-nay)",
    "Giảng viên, Đại học Kinh Tế Tài Chính – TP.HCM (UEF) (2022-nay)"
  ],
  "mentoring": "Với kinh nghiệm đa ngành, tôi tập trung mentoring cho các nhà sáng lập trẻ về xây dựng mô hình kinh doanh, chiến lược marketing và quản trị nhân sự. Đồng thời, tôi cũng hướng dẫn sinh viên về định hướng nghề nghiệp và khởi nghiệp.",
  "background": {
    "education": "Thạc sĩ Quản trị hệ điều hành, Đại học Kinh tế TP.HCM (2022); Cử nhân Marketing, Đại học Tài chính - Marketing (2017)",
    "previousRole": "Trưởng phòng Marketing, Phó Giám đốc tại Smentor",
    "experience": "Hơn 7 năm kinh nghiệm thực chiến trong lĩnh vực Marketing, tư vấn chiến lược và điều hành doanh nghiệp. Có chuyên môn sâu về giảng dạy và quản lý giáo dục."
  }
},
  {
    id: "duong-the-khai",
    name: "Dương Thế Khải",
    position: "Phó Giám Đốc MSC",
    company: "MSC Center",
    avatar: "/MSCers/DTK.webp",
    achievement: "Tốt nghiệp và trưởng thành từ MSC",
    testimonial: "MSC Center đã giúp tôi phát triển kỹ năng lãnh đạo và tư duy chiến lược một cách toàn diện. Từ một sinh viên bình thường, tôi đã trở thành Phó Giám Đốc và có thể đóng góp vào việc phát triển thế hệ MSCer tiếp theo.",

    graduationYear: "2021",
    promotion: "Từ Nhân viên → Team Lead → Phó Giám Đốc trong 3 năm",
    socialImpact: "Đào tạo và phát triển hơn 200 học viên MSC",
    course: "Leadership & Strategic Management",
    skills: ["Strategic Leadership", "Business Development", "Team Management", "Project Planning", "Mentoring"],
    achievements: [
      "Ph�� Giám Đốc MSC Center - MSC Center (2023-nay)",
      "Xây dựng và phát triển 3 chương trình đào tạo mới",
      "Dẫn dắt team 15+ nhân viên",
      "Tăng hiệu suất làm việc của đội ngũ 40%",
      "Mentor cho hơn 50 học viên thành công"
    ],
    mentoring: "Hiện tại đang mentor cho 12 học viên trong lĩnh vực quản lý và lãnh đạo. Tôi tin rằng việc chia sẻ kiến thức và kinh nghiệm là cách tốt nhất để phát triển cộng đồng MSC.",
    background: {
      education: "Cử nhân Quản trị Kinh doanh - UEH",
      previousRole: "Sinh viên - Intern tại công ty startup",
      experience: "4+ năm kinh nghiệm trong quản lý và phát triển kinh doanh, từng làm việc trong môi trường startup và doanh nghiệp vừa và nhỏ"
    }
  },
  {
    id: "quach-thanh-long",
    name: "Quách Thành Long",
    position: "Trưởng phòng CNTT",
    company: "MSC Center",
    avatar: "/MSCers/QTL.webp",
    achievement: "Tốt nghiệp và trưởng thành từ HKDN",
    testimonial: "Những kiến thức về quản lý dự án tại MSC đã giúp tôi thành công trong vai trò Trưởng phòng CNTT. Tôi đã học được cách áp dụng các phương pháp Agile và Scrum để quản lý team hiệu quả.",

    graduationYear: "2020",
    promotion: "Từ Developer → Senior Dev → Tech Lead → Trưởng phòng CNTT",
    socialImpact: "Xây dựng hạ tầng IT cho toàn bộ hệ thống MSC Center",
    course: "Technology Leadership & Project Management",
    skills: ["IT Management", "Project Management", "Software Development", "Team Leadership", "System Architecture"],
    achievements: [
      "Trưởng phòng CNTT - MSC Center (2022-nay)",
      "Xây dựng và phát triển hệ thống quản lý học viên",
      "Triển khai thành công 5+ dự án công nghệ quan trọng",
      "Quản lý đội ngũ IT 8+ thành viên",
      "Tối ưu hóa quy trình làm việc số hóa 100%"
    ],
    mentoring: "Tôi đang hướng dẫn 8 developer junior và chia sẻ kinh nghiệm về phát triển sự nghiệp trong ngành IT. Focus vào technical skills và soft skills.",
    background: {
      education: "Cử nhân Công nghệ Thông tin - UIT",
      previousRole: "Software Developer tại công ty outsourcing",
      experience: "5+ năm kinh nghiệm phát triển phần mềm và quản lý dự án công nghệ, chuyên sâu về web development và system design"
    }
  },
  {
    id: "la-phuong-uyen",
    name: "Lã Phương Uyên",
    position: "Nhân sự Marketing",
    company: "MSC Center",
    avatar: "/MSCers/LPU.webp",
    achievement: "Tốt nghiệp và trưởng thành từ HKDN",
    testimonial: "MSC Center không chỉ dạy kiến thức mà còn giúp tôi xây dựng network chuyên nghiệp. Tôi đã học được cách làm marketing hiệu quả và xây dựng thương hiệu cá nhân.",

    graduationYear: "2021",
    promotion: "Từ Intern → Marketing Executive → Marketing Specialist",
    socialImpact: "Phát triển thương hiệu MSC Center qua các kênh digital",
    course: "Digital Marketing & Brand Management",
    skills: ["Digital Marketing", "Content Creation", "Social Media Management", "Brand Strategy", "Data Analytics"],
    achievements: [
      "Marketing Specialist - MSC Center (2022-nay)",
      "Tăng engagement rate trên social media 150%",
      "Xây dựng thành công 3 chiến dịch marketing",
      "Quản lý budget marketing 500M+/năm",
      "Phát triển content strategy cho toàn bộ MSC"
    ],
    mentoring: "Tôi chia sẻ kinh nghiệm về digital marketing và personal branding cho các bạn trẻ mới vào nghề, đặc biệt là các kỹ năng về content creation.",
    background: {
      education: "Cử nhân Marketing - UEH",
      previousRole: "Marketing Intern tại agency nhỏ",
      experience: "3+ năm kinh nghiệm trong lĩnh vực marketing digital, từng làm việc với nhiều brand khác nhau và có hiểu biết sâu về consumer behavior"
    }
  },
  {
    id: "nguyen-ngoc-thien-huong",
    name: "Nguyễn Ngọc Thiên Hương",
    position: "Nhân sự Marketing",
    company: "MSC Center", 
    avatar: "/MSCers/NNTH.webp",
    achievement: "Tốt nghiệp và trưởng thành từ HKDN",
    testimonial: "Chương trình đào tạo tại MSC rất thực tế và ứng dụng được ngay vào công việc. Tôi đã học được cách làm việc chuyên nghiệp và phát triển kỹ năng giao tiếp hiệu quả.",

    graduationYear: "2022",
    promotion: "Từ Intern → Marketing Assistant → Marketing Executive",
    socialImpact: "Hỗ trợ recruitment và onboarding cho 50+ nhân viên mới",
    course: "Professional Communication & HR Management",
    skills: ["HR Management", "Recruitment", "Communication", "Event Planning", "Training & Development"],
    achievements: [
      "HR Marketing Executive - MSC Center (2023-nay)",
      "Tổ chức thành công 10+ sự kiện networking",
      "Xây dựng quy trình onboarding mới",
      "Recruitment thành công 30+ ứng viên chất lượng cao",
      "Phát triển chương trình đào tạo nội bộ"
    ],
    mentoring: "Tôi hướng dẫn các bạn mới về kỹ năng giao tiếp, cách thích nghi môi trường làm việc và phát triển sự nghiệp trong lĩnh vực HR-Marketing.",
    background: {
      education: "Cử nhân Quản trị Nhân lực - UEH",
      previousRole: "Sinh viên - Part-time tại các công ty sự kiện",
      experience: "2+ năm kinh nghiệm trong HR và marketing, có khả năng kết hợp hai lĩnh vực để tạo ra giá trị cho tổ chức"
    }
  },
  {
    id: "pham-ngoc-thuy-trang",
    name: "Phạm Ngọc Thuỳ Trang",
    position: "Nhân sự Marketing",
    company: "MSC Center",
    avatar: "/MSCers/PNTT.webp",
    achievement: "Tốt nghiệp khóa Financial Management 2022",
    testimonial: "MSC đã trang bị cho tôi nền tảng vững chắc để phát triển sự nghiệp trong lĩnh vực tài chính. Tôi đã học được cách phân tích tài chính và quản lý rủi ro hiệu quả.",

    graduationYear: "2022",
    promotion: "Từ Finance Intern → Finance Assistant → Finance Executive",
    socialImpact: "Quản lý ngân sách và tài chính cho các dự án đào tạo của MSC",
    course: "Financial Management & Business Analysis",
    skills: ["Financial Analysis", "Budget Management", "Risk Assessment", "Excel Advanced", "Financial Planning"],
    achievements: [
      "Finance Executive - MSC Center (2023-nay)",
      "Quản lý ngân sách 2B+/năm cho các dự án đào tạo",
      "Xây dựng hệ thống báo cáo tài chính tự động",
      "Tiết kiệm chi phí vận hành 15% thông qua tối ưu hóa",
      "Phân tích ROI cho 20+ chương trình đào tạo"
    ],
    mentoring: "Tôi chia sẻ kiến thức về quản lý tài chính cá nhân và kỹ năng phân tích dữ liệu tài chính cho các bạn trẻ quan tâm đến lĩnh vực này.",
    background: {
      education: "Cử nhân Tài chính Ngân hàng - UEF",
      previousRole: "Thực tập sinh tại ngân hàng BIDV",
      experience: "2+ năm kinh nghiệm trong lĩnh vực tài chính doanh nghiệp, có hiểu biết về quản lý ngân sách và phân tích đầu tư"
    }
  },
  {
    id: "tran-hoang-minh-thu",
    name: "Trần Hoàng Minh Thư",
    position: "Thư ký dự án",
    company: "MSC Center",
    avatar: "/MSCers/THMT.webp",
    achievement: "Học viên xuất sắc khóa Design Thinking 2023",
    testimonial: "Khóa học Design Thinking tại MSC đã mở ra góc nhìn mới về thiết kế và trải nghiệm người dùng. Tôi đã áp dụng thành công vào công việc quản lý dự án.",

    graduationYear: "2023",
    promotion: "Từ Project Assistant → Project Coordinator → Project Secretary",
    socialImpact: "Hỗ trợ quản lý và điều phối 15+ dự án đào tạo thành công",
    course: "Design Thinking & Project Management",
    skills: ["Project Coordination", "Design Thinking", "Process Optimization", "Documentation", "Stakeholder Management"],
    achievements: [
      "Project Secretary - MSC Center (2023-nay)",
      "Quản lý và điều phối 15+ dự án đào tạo",
      "Xây dựng quy trình làm việc chuẩn cho các dự án",
      "Tối ưu hóa thời gian thực hiện dự án 25%",
      "Đảm bảo 100% dự án hoàn thành đúng deadline"
    ],
    mentoring: "Tôi hướng dẫn các bạn về kỹ năng tổ chức công việc, quản lý thời gian và áp dụng design thinking vào giải quyết vấn đề hàng ngày.",
    background: {
      education: "Cử nhân Quản trị Kinh doanh - UEL",
      previousRole: "Sinh viên - Freelance coordinator cho các sự kiện",
      experience: "1+ năm kinh nghiệm trong quản lý dự án và tổ chức sự kiện, có khả năng làm việc đa nhiệm và quản lý stakeholder hiệu quả"
    }
  },
  {
    id: "huynh-nguyen-quan",
    name: "Huỳnh Nguyên Quân",
    position: "Software Engineer",
    company: "Google Vietnam",
    avatar: "/MSCers/HNQ.webp",
    achievement: "Cựu học viên khóa Tech Leadership 2022",
    testimonial: "MSC Center đã giúp tôi phát triển từ một developer thành tech leader tự tin. Những kỹ năng leadership và communication tại MSC đã giúp tôi thành công tại Google.",

    graduationYear: "2022",
    promotion: "Từ Junior Dev → Senior Dev → Tech Lead → Software Engineer tại Google",
    socialImpact: "Mentor cho 20+ junior developers trong cộng đồng tech Việt Nam",
    course: "Tech Leadership & Advanced Programming",
    skills: ["Software Engineering", "System Design", "Team Leadership", "Mentoring", "Technical Communication"],
    achievements: [
      "Software Engineer - Google Vietnam (2024-nay)",
      "Tech Lead tại startup công nghệ (2022-2024)",
      "Xây dựng 3 sản phẩm công nghệ thành công",
      "Speaker tại 5+ tech conference trong nước",
      "Mentor cho 50+ developers qua chương trình MSC Alumni"
    ],
    mentoring: "Tôi tích cực chia sẻ kinh nghiệm về technical skills, career development và cách thành công trong môi trường công nghệ quốc tế cho cộng đồng developer Việt Nam.",
    background: {
      education: "Cử nhân Khoa học Máy tính - HCMUS",
      previousRole: "Fullstack Developer tại startup fintech",
      experience: "4+ năm kinh nghiệm phát triển phần mềm, từng làm việc tại nhiều startup và hiện tại là Software Engineer tại Google Vietnam"
    }
  },
  {
    id: "phan-bich-hop",
    name: "Phan Bích Hợp", 
    position: "Nhân sự Marketing",
    company: "MSC Center",
    avatar: "/MSCers/PBH.webp",
    achievement: "Cựu học viên khóa Tech Leadership 2022",
    testimonial: "MSC Center đã giúp tôi phát triển từ một developer thành tech leader tự tin. Tôi đã học được cách kết hợp technical skills với business understanding.",

    graduationYear: "2022", 
    promotion: "Từ Developer → Senior Dev → Tech-Marketing Bridge Role",
    socialImpact: "Kết nối giữa team technical và marketing, tối ưu hóa các sản phẩm digital",
    course: "Tech Leadership & Digital Marketing",
    skills: ["Technical Marketing", "Product Management", "Cross-functional Collaboration", "Data Analysis", "Digital Strategy"],
    achievements: [
      "Tech-Marketing Specialist - MSC Center (2023-nay)",
      "Phát triển 5+ landing page có conversion rate cao",
      "Xây dựng analytics system cho marketing campaigns",
      "Tối ưu hóa website MSC tăng traffic 200%",
      "Bridge communication giữa tech team và marketing team"
    ],
    mentoring: "Tôi hướng dẫn các bạn về cách kết hợp kỹ năng technical với business knowledge để tạo ra giá trị trong thời đại số.",
    background: {
      education: "Cử nhân Công nghệ Thông tin - HCMUT", 
      previousRole: "Frontend Developer tại agency digital",
      experience: "3+ năm kinh nghiệm trong phát triển web và hiểu biết về digital marketing, có khả năng làm cầu nối giữa technical và business teams"
    }
  }
];
