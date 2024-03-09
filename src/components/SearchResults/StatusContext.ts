import { createContext } from "react";

export type StatusContextType = {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  error: string;
  setError: (error: string) => void;
};

export const StatusContext = createContext<StatusContextType>({
  loading: false,
  setLoading: () => {},
  error: "",
  setError: () => {},
});
