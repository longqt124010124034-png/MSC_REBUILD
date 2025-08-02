import { mentorDetails } from "@/data/mentor-detail";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Metadata } from "next";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const mentor = mentorDetails.find((m) => m.id === params.id);
  return {
    title: mentor?.name || "Mentor",
  };
}

// ✅ Tạo component Section an toàn
const Section = ({ title, items }: { title: string; items?: string[] }) => {
  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <ul className="list-disc list-inside space-y-1 text-sm">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default function MentorDetailPage({ params }: Props) {
  const mentor = mentorDetails.find((m) => m.id === params.id);

  if (!mentor) return notFound();

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8 text-gray-800 dark:text-gray-100">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        <Image
          src={mentor.image || "/default-avatar.png"}
          alt={mentor.name}
          width={180}
          height={180}
          className="rounded-full"
        />
        <div>
          <h1 className="text-3xl font-bold">{mentor.name}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">{mentor.title}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{mentor.position}</p>
        </div>
      </div>

      {/* Info Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Section
          title="🔹 Thông tin cá nhân"
          items={[
            `Họ và tên: ${mentor.fullName}`,
            `Học vị: ${mentor.degree}`,
          ]}
        />
        <Section title="🔹 Tổ chức làm việc" items={mentor.organizations} />
        <Section title="🔹 Bằng cấp và chuyên môn" items={mentor.degrees} />
        <Section title="🔹 Quá trình và đơn vị công tác" items={mentor.experiences} />
        <Section title="🔹 Bộ môn giảng dạy và nghiên cứu" items={mentor.subjects} />
        <Section title="🔹 Công trình áp dụng thực tiễn" items={mentor.practicalProjects} />
        <Section title="🔹 Đề tài và dự án nghiên cứu" items={mentor.research} />
        <Section title="🔹 Giải thưởng" items={mentor.awards} />
        <Section title="🔹 Thành tựu KH&CN và sản xuất kinh doanh" items={mentor.achievements} />
      </div>
    </div>
  );
}
