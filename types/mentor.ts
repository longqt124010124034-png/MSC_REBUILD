// Đây là kiểu dữ liệu chung, bao gồm TẤT CẢ các trường có thể có của một mentor.
// Dấu `?` có nghĩa là thuộc tính đó không bắt buộc.
//types/mentor.ts
export type MentorDetail = {
  id: string;
  slug: string;
  name: string;
  title: string;
  avatar?: string; // Thêm avatar
  bio?: string;    // Thêm bio
  role?: string;
  personalInfo?: {
    [key: string]: string; // Dùng index signature cho linh hoạt
  };
  organization?: string[];
  education?: (string | { degree: string; school: string; year: string; thesis?: string })[];
  workHistory?: string[];
  subjects?: string[];
  practicalWorks?: string[];
  researchProjects?: string[];
  awards?: string[];
  achievements?: string[];
  research?: {
    teachingAreas: string[];
    publications: string[];
  };
};