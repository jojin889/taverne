import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children, props }) {

  let sharedState = { moncul: "truc" };
  console.log("->>>>>>>", sharedState);

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
