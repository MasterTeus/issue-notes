export type UserProps = {
  avatar_url: string;
  bio: string;
  company: string;
  login: string;
  name: string;
  html_url: string;
  followers: number;
};

export type PostsProps = {
  number: number;
  title: string;
  updated_at: string;
  body: string;
};
