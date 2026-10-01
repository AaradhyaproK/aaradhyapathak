"use client";

import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import { ResumeModal } from "./ResumeModal";

interface ResumeModalContextType {
  isOpen: boolean;
  openResumeModal: () => void;
  closeResumeModal: () => void;
  toggleResumeModal: () => void;
}

const ResumeModalContext = createContext<ResumeModalContextType | undefined>(undefined);

export function ResumeModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openResumeModal = useCallback(() => setIsOpen(true), []);
  const closeResumeModal = useCallback(() => setIsOpen(false), []);
  const toggleResumeModal = useCallback(() => setIsOpen((prev) => !prev), []);

  // Close modal when pressing Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeResumeModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeResumeModal]);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflowY = "scroll";
      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflowY = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  return (
    <ResumeModalContext.Provider
      value={{ isOpen, openResumeModal, closeResumeModal, toggleResumeModal }}
    >
      {children}
      <ResumeModal isOpen={isOpen} onClose={closeResumeModal} />
    </ResumeModalContext.Provider>
  );
}

export function useResumeModal() {
  const context = useContext(ResumeModalContext);
  if (!context) {
    throw new Error("useResumeModal must be used within a ResumeModalProvider");
  }
  return context;
}
