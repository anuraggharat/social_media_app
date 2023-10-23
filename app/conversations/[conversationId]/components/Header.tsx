'use client';

import { HiChevronLeft } from 'react-icons/hi'
import { HiEllipsisHorizontal } from 'react-icons/hi2';
import { useMemo, useState } from "react";
import Link from "next/link";
import { Conversation, User } from "@prisma/client";

import useOtherUser from "@/app/hooks/useOtherUser";
import useActiveList from "@/app/hooks/useActiveList";

import Avatar from "@/app/components/common/Avatar";
import AvatarGroup from "@/app/components/common/AvatarGroup";
import ProfileDrawer from "./ProfileDrawser";

interface HeaderProps {
  conversation: Conversation & {
    users: User[]
  }
}

const Header: React.FC<HeaderProps> = ({ conversation }) => {
  const otherUser = useOtherUser(conversation);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { members } = useActiveList();
  const isActive = members.indexOf(otherUser?.email!) !== -1;
  const statusText = useMemo(() => {
    if (conversation.isGroup) {
      return `${conversation.users.length} members`;
    }

    return isActive ? 'Active' : 'Offline'
  }, [conversation, isActive]);

  

  return (
  <>
    <ProfileDrawer 
      data={conversation} 
      isOpen={drawerOpen} 
      onClose={() => setDrawerOpen(false)}
    />
    <div 
      className= "bg-white w-full flex border-b-[1px] dark:border-neutral-500 sm:px-4 py-3 px-4 lg:px-6 justify-between items-center shadow-sm dark:bg-neutral-950"
    >
      <div className="flex gap-3 items-center">
        <Link
          href="/conversations" 
          className="
            lg:hidden 
            block 
            text-violet-600 
            hover:text-violet-700 
            transition 
            cursor-pointer
          "
        >
          <HiChevronLeft size={32} />
        </Link>
        {conversation.isGroup ? (
          <AvatarGroup users={conversation.users} />
        ) : (
          <Avatar user={otherUser} />
        )}
        <div className="flex flex-col dark:text-neutral-200 text-white">
          <div>{conversation.name || otherUser.name}</div>
          <div className="text-sm font-light text-neutral-500 dark:text-neutral-300">
            {statusText}
          </div>
        </div>
      </div>
      <HiEllipsisHorizontal
        size={32}
        onClick={() => setDrawerOpen(true)}
        className="
          text-violet-500
          cursor-pointer
          hover:text-violet-600
          transition
        "
      />
    </div>
    </>
  );
}
 
export default Header;
