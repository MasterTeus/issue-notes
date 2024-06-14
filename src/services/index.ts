import { api } from "./api";
import { User } from "./types";

export const fetchUser = async (me: string) => {
  const { data } = await api.get<User>(`/users/${me}`);

  return data;
};
