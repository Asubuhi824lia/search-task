import { useContext, useEffect } from "react";
import { SearchContext } from "./SearchContext";
import { UserCard } from "../UserCard/UserCard";

import "./style.css";
import { StatusContext } from "./StatusContext";

export function SearchResults() {
  const { users } = useContext(SearchContext);
  const { loading, error } = useContext(StatusContext);

  useEffect(() => {
    console.log(loading, error, users);
  }, [loading, error]);

  return (
    <div className="usersList">
      {error && loading ? <h2>Loading...</h2> : <h2>{error}</h2>}
      {typeof users !== "string" && !users.length
        ? ""
        : users.map((user) => <UserCard {...user} />)}
    </div>
  );
}
