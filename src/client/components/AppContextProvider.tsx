import { AppContext } from "@contexts";

export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
	return <AppContext.Provider value={null}>{children}</AppContext.Provider>;
};
