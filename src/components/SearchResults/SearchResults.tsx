import { useContext } from "react";
import { SearchContext } from "./SearchContext";
import { UserCard } from "../UserCard/UserCard";

import "./style.css";
import { StatusContext } from "./StatusContext";

export function SearchResults() {
  const { users } = useContext(SearchContext);
  const { loading, error } = useContext(StatusContext);

  return (
    <div className="usersList">
      {!loading && error && <h2>{error}</h2>}
      {(typeof users !== "string" && !users.length) || error
        ? ""
        : users.map((user) => <UserCard {...user} />)}
    </div>
  );
}
