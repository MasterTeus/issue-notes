import { api } from "./api";
import { User } from "./types";

export const fetchUser = async () => {
  const { data } = await api.get<User>("/users/masterteus");

  return data;
};
