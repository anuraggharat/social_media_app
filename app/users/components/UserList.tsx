import { User } from '@prisma/client'
import React from 'react'
import UserBox from './UserBox'

interface UserListProps {
    items: User[]
}

export default function UserList({items}:UserListProps) {
  return (
    <div className=" fixed inset-y-0 pb-20 lg:pb-0 lg:left-24 lg:w-80 lg:block overflow-y-auto border-r 
    border-gray-200 block w-full left-0 dark:bg-neutral-950 dark:border-neutral-500">
  <div className="px-5">
        <div className="flex-col">
          <div 
            className="
              text-2xl 
              font-bold 
              text-neutral-800 
              py-4
              dark:text-neutral-200
            "
          >
            People
          </div>
        </div>
        {items.map((item) => (
          <UserBox
            key={item.id}
            data={item}
          />
        ))}
      </div>
    </div>
  )
}
