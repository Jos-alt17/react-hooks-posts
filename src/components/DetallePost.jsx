import { useParams, Link } from "react-router-dom";
import { usePost } from "./hooks/usePost"; // Importamos el hook de detalle

function PostDetail() {
  const { id } = useParams(); // Obtenemos el ID de la URL
  const { post, loading, error } = usePost(id); // Llamamos al hook pasándole el ID

  if (loading) return <p>Cargando detalle...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <Link to="/">Regresar</Link>
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </>
      )}
    </div>
  );
}

export default PostDetail;