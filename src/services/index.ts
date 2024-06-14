import { api } from "./api";
import { UserProps, PostsProps } from "./types";

export const fetchUser = async (me: string) => {
  const { data } = await api.get<UserProps>(`/users/${me}`);

  return data;
};

export const getPosts = async (owner: string, repo: string) => {
  const { data } = await api.get<PostsProps[]>(`/repos/${owner}/${repo}/issues
`);

  return data;
};
