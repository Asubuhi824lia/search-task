import "./styles.css";
import { useContext, useEffect, useState } from "react";
import debounce from "debounce";
import getUsers, { baseUrl } from "../../api";
import { SearchContext } from "../SearchResults/SearchContext";

export function SearchForm() {
  const { setUsers } = useContext(SearchContext);
  const [value, setValue] = useState<string>("");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    debounce(() => getUsers(`${baseUrl}/search?q=${value}`).then(setUsers))();
  }, [value]);

  return (
    <div className="searchForm">
      <form>
        <input type="text" value={value} onChange={changeHandler} />
      </form>
    </div>
  );
}
