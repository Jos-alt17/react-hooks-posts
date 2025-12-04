import "./App.css";
import { usePosts } from "./hooks/usePosts"; // Importamos nuestro hook
import { Link } from "react-router-dom"; // Asumiendo que usas router según el repo

function App() {
  // ¡Mira qué limpio queda! Toda la lógica compleja se fue.
  const { posts, loading, error } = usePosts();

  if (loading) return <p>Cargando posts...</p>;
  if (error) return <p>Error al cargar: {error.message}</p>;

  return (
    <div className="App">
      <h1>Lista de Posts</h1>
      <ul>
        {posts && posts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>
               <h3>{post.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;