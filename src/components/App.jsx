import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { useDispatch } from "react-redux";
import { lazy, useEffect } from "react";
import { refreshUser } from "redux/auth/operations";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";
import { NotFound } from "./NotFound/NotFound";


const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'))



export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage/>} />
        <Route path="/register"
          element={<RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />} />
        
        <Route path="/login"
          element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />} />
        
        <Route path="/contacts"
          element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />} />
        
        <Route path="*" element={<NotFound/>} />

      </Route>
      
    </Routes>
    
  );
};
