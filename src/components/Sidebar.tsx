import React from 'react';
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { Link, useLocation } from 'react-router-dom';

export interface NavItem {
  label: string;
  path: string;
}

export interface SidebarProps {
  navItems: NavItem[];
}

export const Sidebar: React.FC<SidebarProps> = ({ navItems }) => {
  const location = useLocation();

  return (
    <aside className="w-64 bg-content1 h-full p-4 border-r border-divider">
      <div className="flex items-center mb-6">
        <Icon icon="lucide:layout" className="text-primary text-2xl mr-2" />
        <h1 className="text-xl font-semibold">Settings</h1>
      </div>
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => (
          <Button
            key={item.label}
            as={Link}
            to={item.path}
            variant="flat"
            color={location.pathname === item.path ? "primary" : "default"}
            className="justify-start"
          >
            {item.label}
          </Button>
        ))}
      </nav>
    </aside>
  );
};