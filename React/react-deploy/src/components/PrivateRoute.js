import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  // El valor de esta variable simula si ha hecho login o no
  let auth;
  auth = false;

  // Si está autorizado, devuelve una salida que generará elementos secundarios
  // Si no, devuelve el elemento que navegará a la página de inicio de sesión
  /*El componente <Outlet>
Este elemento es usado dentro del componente declarado en la ruta padre para renderizar 
sus elementos <Route> hijos. Esto permite a la interfaz anidada mostrar las rutas hijas 
cuando son renderizadas. Si la ruta seleccionada es la raíz, se renderizará la 
<Route index> hija. Si la ruta no está mapeada, se renderizará la <Route path='*'> hija.*/

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
