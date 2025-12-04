import "./App.css";
import { usePosts } from "./hooks/usePosts";
import { Link } from "react-router-dom"; // Asumo que usas React Router

function App() {
  // 1. Llamamos al custom hook
  const { posts, loading, error } = usePosts();

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container">
      <h1>Lista de Posts</h1>
      <ul>
        {posts && posts.map((post) => (
          <li key={post.id}>
            {/* El Link para navegar al detalle */}
            <Link to={`/post/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;