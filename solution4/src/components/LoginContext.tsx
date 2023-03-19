import { createContext } from 'react';

interface LoginContextType {
  isLogin: boolean;
  setIsLogin: (value: boolean) => void;
}
interface UserRoleType{
  role: string;
  setRole: (value: string) => void;
}
export const RoleContext = createContext<UserRoleType>({
  role: "",
  setRole: () => {},
});

const LoginContext = createContext<LoginContextType>({
  isLogin: false,
  setIsLogin: () => {},
});

export default LoginContext;
