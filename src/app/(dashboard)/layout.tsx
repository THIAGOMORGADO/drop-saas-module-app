import React from 'react';
import SlidebarMenu from '../components/SlidebarMenu';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <SlidebarMenu>{children}</SlidebarMenu>
    </div>
  );
}