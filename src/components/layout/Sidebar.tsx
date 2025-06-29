import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Home,
  Briefcase,
  BarChart2,
  User,
  File,
  Circle,
  SunMedium,
  PenTool,
} from "lucide-react";

const NAV_ITEMS = [
  { label: "Dashboard", path: "/dashboard", icon: <Home /> },
  { label: "CV Builder", path: "/cv-builder", icon: <PenTool /> },
  { label: "Jobs", path: "/jobs", icon: <Briefcase /> },
  { label: "Analytics", path: "/analytics", icon: <BarChart2 /> },
  { label: "Profile", path: "/profile", icon: <User /> },
  { label: "Resume Analyzer", path: "/resume-analyzer", icon: <File /> },
];

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <aside
      className={`h-screen sticky top-0 flex flex-col bg-sidebar text-sidebar-foreground border-r border-sidebar-border duration-200 transition-all shadow-medium ${collapsed ? "w-20" : "w-64"}`}
    >
      <div className="flex items-center justify-between px-6 py-6 mb-4 border-b border-sidebar-border/50">
        {/* Logo or Icon only when collapsed */}
        <span className="flex items-center gap-2 text-lg font-bold tracking-tight">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-400 to-accent-500 flex items-center justify-center">
            <Circle className="w-5 h-5 text-white" />
          </div>
          {!collapsed && <span className="font-bold font-sans text-sidebar-foreground">AceInterview AI</span>}
        </span>
        <button
          className="ml-auto text-sidebar-foreground/60 hover:text-sidebar-foreground transition-colors"
          aria-label="Collapse Sidebar"
          onClick={() => setCollapsed((c) => !c)}
        >
          <SunMedium className={`h-5 w-5 ${collapsed ? "rotate-180" : ""} transition-transform`} />
        </button>
      </div>
      <nav className="flex-1 px-3">
        <ul className="flex flex-col gap-2">
          {NAV_ITEMS.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 rounded-xl font-medium gap-3 text-sm transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-medium"
                      : "text-sidebar-foreground/70 hover:bg-sidebar-accent/10 hover:text-sidebar-foreground"
                  } ${collapsed ? "justify-center px-2" : ""}`
                }
                end
              >
                <span className="w-5 h-5 flex-shrink-0">{item.icon}</span>
                {!collapsed && <span>{item.label}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex flex-col mb-4 mt-auto items-center px-2">
        <div className="text-xs text-sidebar-foreground/50 mt-2 select-none">
          {!collapsed && <>v1.0</>}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;