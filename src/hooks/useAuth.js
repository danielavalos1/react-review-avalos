import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuth = () => {
  const { user, login, logout, signup } = useContext(AuthContext);
  return { user, login, logout, signup }
}