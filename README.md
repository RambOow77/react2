# Hito 2 - Pizzería Mamma Mía

Proyecto React + Vite desarrollado para el Hito 2 de Pizzería Mamma Mía.

## Instrucciones de ejecución

1. Descargar y descomprimir este proyecto.
2. Abrir una terminal en la carpeta del proyecto.
3. Ejecutar `npm install` para instalar todas las dependencias.
4. Ejecutar `npm run dev` para iniciar el servidor de desarrollo.
5. Abrir la URL indicadas en la consola (por defecto `http://localhost:5173`).

## Cambiar entre páginas (Home / Register / Login)

En `src/App.jsx` puedes descomentar o comentar los componentes para probar cada vista:

```jsx
const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      {/* <RegisterPage /> */}
      <LoginPage />
      <Footer />
    </div>
  )
}
```
# react2
