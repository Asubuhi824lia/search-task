import { useEffect, useState } from "react";
import { SearchForm } from "./components/SearchFrom/SearchForm";
import {
  UserType,
  SearchContext,
} from "./components/SearchResults/SearchContext";
import { SearchResults } from "./components/SearchResults/SearchResults";
import getUsers, { baseUrl } from "./api";

export default function App() {
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    getUsers(baseUrl).then(setUsers);
  }, []);

  return (
    <SearchContext.Provider value={{ users, setUsers }}>
      <SearchForm />
      <SearchResults />
    </SearchContext.Provider>
  );
}
