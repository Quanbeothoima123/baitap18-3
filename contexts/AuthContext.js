import { createContext } from "react";

// Khởi tạo AuthContext
export const AuthContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});
