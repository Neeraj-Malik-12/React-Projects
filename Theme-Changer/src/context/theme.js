import { createContext, useContext } from "react";

export default ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    ligthTheme: () => {},
})

export default ThemeProvider = ThemeContext.Provider

export default useTheme = () => {
    return useContext(ThemeContext)
}