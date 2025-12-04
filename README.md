# Reflexión sobre el uso de Custom Hooks

## ¿Qué se realizó?
Se refactorizó una aplicación de React que consumía una API externa. Originalmente, la lógica de `fetch`, `useState` y `useEffect` estaba duplicada en cada componente. Se implementó un patrón de diseño utilizando **Custom Hooks**.

## Estructura implementada
1.  **useFetch:** Un hook genérico que encapsula la petición asíncrona.
2.  **usePosts:** Un hook específico que consume `useFetch` para traer la lista.
3.  **usePost:** Un hook que recibe un ID y consume `useFetch` para traer un detalle.

## Beneficios encontrados
* **Abstracción:** Los componentes de la vista (UI) ya no saben cómo se obtienen los datos, solo saben que los reciben. Esto separa responsabilidades.
* **Código Limpio (DRY):** Eliminamos la repetición de los estados `loading` y `error` en cada componente.
* **Reusabilidad:** Si mañana necesitamos llamar a otra API, podemos reutilizar `useFetch` sin reescribir la lógica de conexión.
* **Mantenibilidad:** Si la forma de hacer fetch cambia (por ejemplo, si cambiamos a `axios`), solo modificamos un archivo (`useFetch.js`) y toda la app se actualiza.