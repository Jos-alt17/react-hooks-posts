import { useFetch } from "./useFetch";

export function usePosts() {
  // Utilizamos la URL específica para obtener todos los posts
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");

  // Retornamos los datos renombrando 'data' a 'posts' para mayor claridad
  return { posts: data, loading, error };
}