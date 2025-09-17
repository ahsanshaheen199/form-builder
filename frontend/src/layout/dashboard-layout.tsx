import { Header } from "@/components/header";
import { Outlet } from "react-router-dom";

export function DashboardLayout() {
  return (
    <div className="flex flex-col h-screen w-full">
      <Header />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
    </div>
  );
}
