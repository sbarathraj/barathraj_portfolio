import React, { createContext, useContext } from 'react';

interface SectionContextProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const SectionContext = createContext<SectionContextProps | undefined>(undefined);

interface SectionProviderProps {
  children: React.ReactNode;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const SectionProvider: React.FC<SectionProviderProps> = ({ 
  children, 
  activeSection, 
  setActiveSection 
}) => {
  return (
    <SectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </SectionContext.Provider>
  );
};

export const useSection = (): SectionContextProps => {
  const context = useContext(SectionContext);
  
  if (context === undefined) {
    throw new Error('useSection must be used within a SectionProvider');
  }
  
  return context;
};