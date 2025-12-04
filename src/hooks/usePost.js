import { useFetch } from "./useFetch";

export function usePost(id) {
  const { data, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return { post: data, loading, error };
}