// SharedContext.jsx
import React, { createContext, useContext, useState } from 'react';

const SharedContext = createContext();

export const SharedProvider = ({ children }) => {
  const [selectedSection, setSelectedSection] = useState('');

  const contextValue = {
    selectedSection,
    setSelectedSection,
  };

  return (
    <SharedContext.Provider value={contextValue}>
      {children}
    </SharedContext.Provider>
  );
};

export const useSharedContext = () => {
  return useContext(SharedContext);
};
