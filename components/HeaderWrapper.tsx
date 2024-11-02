'use client';

import { useModal } from '@/context/modal-context';
import { usePathname } from 'next/navigation';
import Header from './header';

export default function HeaderWrapper() {
  const pathname = usePathname();
  const { isAnyModalOpen } = useModal();

  if (isAnyModalOpen) {
    return null;
  }

  if (pathname === '/qr') return null;

  return <Header />;
}
