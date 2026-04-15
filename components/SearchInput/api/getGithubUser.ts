import axios from "axios"

export const getGithubUsers = async (url: string) => {
  try {
    const response = await axios.get("https://api.github.com/users/" + url);
    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};