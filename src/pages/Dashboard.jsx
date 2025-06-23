import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Card from "../components/Card"; // define your card
import Table from "../components/Table";


export default function App() {
  
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors">
      <Sidebar collapsed={collapsed} toggleCollapse={() => setCollapsed(!collapsed)} />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Example cards */}
          <Card title="SGPA" value="8.41" />
          <Card title="Attendence" value="90%" />
          <Card title="Pending Fee" value="$0" />
          <Card title="Schedule" />
          <Card title="Resources" />
          <Card title="Notice" />
        </div>
        <Table />
      </div>
    </div>
  );
}