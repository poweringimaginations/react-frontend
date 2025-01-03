import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar, { SidebarItem } from './assets/components/sidebar';
import Dashboard from './pages/Dashboard';
import {
  LayoutDashboard,
  BarChart3,
  UserCircle,
  Boxes,
  Package,
  Receipt,
  Settings,
  LifeBuoy,
} from "lucide-react";
import './App.css';

function App() {
  return (
    <Router>
      <main className="flex h-screen">
        <Sidebar>
          <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" active />
          <SidebarItem icon={<UserCircle size={20} />} text="Friends" alert/>
          <hr className="my-3" />
          <SidebarItem icon={<Settings size={20} />} text="Settings" />
        </Sidebar>
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;
