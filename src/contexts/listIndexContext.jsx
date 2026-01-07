/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";

// Create a context
const ListIndexContext = createContext();

// Create a provider component
export const ListIndexProvider = ({ listIndex, children }) => (
  <ListIndexContext.Provider value={listIndex}>
    {children}
  </ListIndexContext.Provider>
);

// Create a hook to use the ListIndexContext
export const useListIndex = () => {
  const context = useContext(ListIndexContext);
  if (context === undefined) {
    throw new Error("useListIndex must be used within a ListIndexProvider");
  }
  return context;
};
