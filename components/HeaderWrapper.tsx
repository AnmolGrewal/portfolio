'use client';

import { useModal } from '@/context/modal-context';
import { usePathname } from 'next/navigation';
import Header from './header';
import path from 'path';

export default function HeaderWrapper() {
  const pathname = usePathname();
  const { isAnyModalOpen } = useModal();

  if (isAnyModalOpen) {
    return null;
  }

  if (pathname === '/qr' || pathname === '/uselections2024') return null;

  return <Header />;
}
