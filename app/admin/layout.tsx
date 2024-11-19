import { AdminNav } from "@/components/admin/nav";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <AdminNav />
      <main className="flex-1 container mx-auto p-6">
        {children}
      </main>
    </div>
  );
}