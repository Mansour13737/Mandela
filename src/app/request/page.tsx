import ProjectRequestForm from "../components/ProjectRequestForm";

export default function RequestPage() {
  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center py-16 px-4">
      <h1 className="text-3xl font-bold text-white mb-8">درخواست پروژه جدید</h1>
      <ProjectRequestForm />
    </div>
  );
}
