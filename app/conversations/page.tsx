'use client';

import clsx from "clsx";

import useConversation from "../hooks/useConversation";
import EmptyState from "../components/common/EmptyState";

const Home = () => {
  const { isOpen } = useConversation();

  return (
    <div className={clsx(
      'lg:pl-84 h-full lg:block', 
      isOpen ? 'block' : 'hidden'
    )}>
      <EmptyState />
    </div>
  )
}

export default Home;