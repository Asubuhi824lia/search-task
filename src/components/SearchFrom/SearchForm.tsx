import "./styles.css";
import { useContext, useEffect, useState } from "react";
import debounce from "debounce";
import { baseUrl, handleGetUsers } from "../../api";
import { SearchContext } from "../SearchResults/SearchContext";
import { StatusContext } from "../SearchResults/StatusContext";

export function SearchForm() {
  const { users, setUsers } = useContext(SearchContext);
  const [value, setValue] = useState<string>("");
  const { setLoading, setError } = useContext(StatusContext);

  const setStatuses = (loading: boolean, error: string) => {
    setLoading(loading);
    setError(error);
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    debounce(async () => {
      handleGetUsers(`${baseUrl}/search?q=${value}`, setStatuses).then((data) =>
        typeof data !== "string" ? setUsers(data) : setUsers(users)
      );
    }, 500)();
  }, [value]);

  return (
    <div className="searchForm">
      <form>
        <input type="text" value={value} onChange={changeHandler} />
      </form>
    </div>
  );
}
