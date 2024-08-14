'use client';

import React, { createContext, useState, useContext } from 'react';

const ModalContext = createContext<{
  isAnyModalOpen: boolean;
  setIsAnyModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  isAnyModalOpen: false,
  setIsAnyModalOpen: () => {},
});

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAnyModalOpen, setIsAnyModalOpen] = useState(false);

  return <ModalContext.Provider value={{ isAnyModalOpen, setIsAnyModalOpen }}>{children}</ModalContext.Provider>;
};

export const useModal = () => useContext(ModalContext);
