import React, { createContext, useContext, useState } from "react";

interface ScrollContextType {
  hasScrolled: boolean;
  setHasScrolled: (value: boolean) => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [hasScrolled, setHasScrolled] = useState(false);

  return (
    <ScrollContext.Provider value={{ hasScrolled, setHasScrolled }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScrollContext must be used within a ScrollProvider");
  }
  return context;
};
