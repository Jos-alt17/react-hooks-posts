# Implementación de Custom Hooks en React

## Descripción del Trabajo
Se realizó una refactorización de la aplicación de Posts para optimizar el código y mejorar su mantenibilidad.

## Cambios Realizados
1.  **Abstracción con useFetch:** Se creó un hook genérico para manejar peticiones HTTP, centralizando el manejo de estados de carga (`loading`) y errores (`error`).
2.  **Segregación de Responsabilidades:**
    * `usePosts`: Encapsula la lógica para obtener la colección completa.
    * `usePost`: Encapsula la lógica para obtener un elemento individual por ID.
3.  **Limpieza de Componentes:** Los componentes visuales (`App.jsx`, `PostDetail.jsx`) ahora solo se encargan de renderizar la UI, delegando la lógica de datos a los hooks.

## Conclusión
El uso de Custom Hooks permitió reducir código repetido (DRY) y hace que la aplicación sea más fácil de escalar. Si la API cambia en el futuro, solo necesitamos modificar `useFetch` en un solo lugar.