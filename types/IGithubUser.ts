export interface IUserNotFound {
  message: string
  documentation_url: string
  status: string
}

export interface IGithubUser {
  "avatar_url": string | null
  name: string | null
  login: string | null
  "created_at": string | null
  bio: string | null
  "public_repos": number | null
  followers: number | null
  following: number | null
  location: string | null
  "twitter_username": string | null
  blog: string | null
  company: string | null
}