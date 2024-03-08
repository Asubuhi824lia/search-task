import { createContext } from "react";

export type UserAddressType = {
  city: string;
};
export type UserType = {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  address: UserAddressType;
};
export type SearchContextType = {
  users: UserType[];
  setUsers: (users: UserType[]) => void;
};

export const SearchContext = createContext<SearchContextType>({
  users: [],
  setUsers: () => {},
});
