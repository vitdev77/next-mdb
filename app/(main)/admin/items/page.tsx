import { Container } from "@/components/container";
import Sidebar from "@/components/sidebar";

export default function ItemsPage() {
  return (
    <Container className="min-h-[calc(100vh-114px)]">
      <Sidebar />
      <div className="w-full p-6">
        <h1 className="mb-4 text-2xl font-bold">Items Page</h1>
      </div>
    </Container>
  );
}
