import { useFetch } from "./useFetch";

export function usePosts() {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");
  return { posts: data, loading, error };
}