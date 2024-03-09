import { useEffect, useState } from "react";
import { SearchForm } from "./components/SearchFrom/SearchForm";
import {
  UserType,
  SearchContext,
} from "./components/SearchResults/SearchContext";
import { SearchResults } from "./components/SearchResults/SearchResults";
import { baseUrl, handleGetUsers } from "./api";
import { StatusContext } from "./components/SearchResults/StatusContext";

export default function App() {
  const [users, setUsers] = useState<UserType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const setStatuses = (loading: boolean, error: string) => {
    setLoading(loading);
    setError(error);
  };

  useEffect(() => {
    handleGetUsers(baseUrl, setStatuses).then((data) =>
      typeof data !== "string" ? setUsers(data) : setUsers(users)
    );
  }, []);

  return (
    <SearchContext.Provider value={{ users, setUsers }}>
      <StatusContext.Provider
        value={{
          loading,
          setLoading,
          error,
          setError,
        }}
      >
        <SearchForm />
        <SearchResults />
      </StatusContext.Provider>
    </SearchContext.Provider>
  );
}
