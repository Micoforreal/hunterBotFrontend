import { Dashboard } from "@/components/Dashboard";
import { Sidebar } from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
     <div className="flex w-full min-h-screen bg-white">
      <Sidebar />
      <Dashboard />
    </div>  );
}
