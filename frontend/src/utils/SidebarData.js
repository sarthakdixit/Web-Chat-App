import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from 'react-icons/md';

export const SidebarData = [
  {
    title: 'Chat Room',
    path: '/chat-room',
    icon: <AiIcons.AiOutlineWechat />,
    cName: 'nav-text'
  },
  {
    title: 'Create Room',
    path: '/create-room',
    icon: <MdIcons.MdCreateNewFolder />,
    cName: 'nav-text'
  },
  {
    title: 'My Rooms',
    path: '/my-rooms',
    icon: <AiIcons.AiFillDatabase />,
    cName: 'nav-text'
  },
  {
    title: 'Logout',
    path: '/logout',
    icon: <AiIcons.AiOutlineLogout />,
    cName: 'nav-text'
  },
];