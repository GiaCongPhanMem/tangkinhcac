"use client";

import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { MainArea } from "./MainArea";

export function HomeClient() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div
      className="flex h-screen overflow-hidden"
      style={{ backgroundColor: "var(--bg-base)" }}
    >
      {/* Sidebar */}
      <Sidebar open={sidebarOpen} onToggle={() => setSidebarOpen((o) => !o)} />

      {/* Main */}
      <MainArea sidebarOpen={sidebarOpen} />

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/40 z-20"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
