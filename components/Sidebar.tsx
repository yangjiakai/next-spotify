"use strict";
import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
interface SidebarProps {
  // Define any props you need for the Sidebar component
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  // Implement your Sidebar component logic here
  const pathname = usePathname();
  const routes = useMemo(() => {
    return [
      {
        label: "Home",
        href: "/",
        active: pathname === "/search",
        icon: HiHome,
      },
      {
        label: "Search",
        href: "/Search",
        active: pathname === "/search",
        icon: BiSearch,
      },
    ];
  }, [pathname]);

  return (
    <div>
      {
        /* Add your Sidebar content here */
        children
      }
    </div>
  );
};

export default Sidebar;
