import { useFetch } from "./useFetch";

export function usePost(id) {
  // La URL depende del ID que recibimos como argumento
  const { data, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  return { post: data, loading, error };
}