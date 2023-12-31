'use client';

import useRoutes from "@/app/hooks/useRoutes";
import { useState } from "react";
import Avatar from "../common/Avatar";
import { User } from "@prisma/client";
import DesktopItem from "./DesktopItem";
import SettingsModal from "./SettingsModal";
import ThemeButton from "../common/ThemeButton";


interface DesktopSidebarProps {
  currentUser: User
}

const DesktopSidebar: React.FC<DesktopSidebarProps> = ({
  currentUser
}) => {
  const routes = useRoutes();
  const [isOpen, setIsOpen] = useState(false);


  return ( 
    <>
      <SettingsModal currentUser={currentUser} isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 lg:w-24 xl:px-6 lg:overflow-y-auto lg:bg-white 
      lg:border-r-[1px] lg:pb-4 lg:flex lg:flex-col justify-between lg:dark:bg-neutral-950 border-r dark:border-neutral-500">
        <nav className="mt-4 flex flex-col justify-between">
          <ul role="list" className="flex flex-col items-center space-y-2">
            {routes.map((item) => (
              <DesktopItem
                key={item.label}
                href={item.href}
                label={item.label}
                icon={item.icon}
                active={item.active}
                onClick={item.onClick}
              />
            ))}
            <ThemeButton />
          </ul>
        </nav>
        <nav className="mt-4 flex flex-col justify-between items-center">
          <div 
            onClick={() => setIsOpen(true)} 
            className="cursor-pointer hover:opacity-75 transition"
          >
            <Avatar user={currentUser} />
          </div>
        </nav>
      </div>
    </>
   );
}
 
export default DesktopSidebar;