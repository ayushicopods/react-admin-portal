import { createContext, useState } from "react";

export const headerContext = createContext({
  headerTitle: null,
  setHeaderTitle: (p) => null,
});

export const HeaderProvider = ({ children }) => {
  const [headerTitle, setHeaderTitle] = useState("Dashboard");
  const value = { headerTitle, setHeaderTitle };
  return (
    <headerContext.Provider value={value}>{children}</headerContext.Provider>
  );
};
