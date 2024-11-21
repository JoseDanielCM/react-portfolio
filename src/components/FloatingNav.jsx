import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Profile",
      link: "#Profile",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Goal",
      link: "#Goal",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Mission",
      link: "#Mission",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Projects",
      link: "#Projects",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];
  return (
    (<div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>)
  );
}

export default FloatingNavDemo; // Ensure this line is present
