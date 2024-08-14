'use client';

import { useModal } from '@/context/modal-context';
import Header from './header';

export default function HeaderWrapper() {
  const { isAnyModalOpen } = useModal();

  if (isAnyModalOpen) {
    return null;
  }

  return <Header />;
}
