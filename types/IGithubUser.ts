export interface IGithubUser {
  "html_url": string
  "avatar_url": string
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