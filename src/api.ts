import { UserType } from "./components/SearchResults/SearchContext";

export const baseUrl = "https://dummyjson.com/users";

type SearchResponseType = {
  ok: boolean;
  status: number;
  users: UserType[];
};

export async function getUsers(url: string): Promise<UserType[] | string> {
  let response = <SearchResponseType>{};

  try {
    const res = await fetch(url);

    response.status = res.status;
    response.ok = res.ok;
    if (!res.ok) {
      throw new Error(String(res.status));
    }

    let data = await res.json();
    data = data.users;

    response.users = data;
  } catch (error: any) {
    console.log(`Error ${error.message}!`);
  } finally {
    return response.ok ? response.users : `Error${" " + response.status}!`;
  }
}

export async function handleGetUsers(
  url: string,
  setStatuses: (loading: boolean, error: string) => void
) {
  setStatuses(true, "");
  const data = await getUsers(url);
  setStatuses(false, typeof data == "string" ? data : "");

  return data;
}
