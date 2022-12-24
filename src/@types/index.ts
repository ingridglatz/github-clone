export interface APIUser {
  login: string;
  name: string;
  company?: string;
  blog?: string;
  location?: string;
  avatar_url: string;
  email?: string;
  public_repos: number;
  followers: number;
  following: number;
}
export interface APIRepo {
  name: string;
  owner: {
    login: string;
  };
  stargazers_count: number;
  forks: number;
  html_url: string;
  language?: string;
  description?: string;
}
