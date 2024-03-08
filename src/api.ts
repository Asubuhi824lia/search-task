import { UserType } from "./components/SearchResults/SearchContext";

export const baseUrl = "https://dummyjson.com/users";

export default async function getUsers(url: string): Promise<UserType[]> {
  return await fetch(url)
    .then((res) => res.json())
    .then((data) => data.users);
}
