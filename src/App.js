import { Route, Routes, Navigate } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import { useContext } from "react";
import AuthContext from "./components/store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);
  const isLogedIn = authCtx.isLoggedin;
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        {!isLogedIn && <Route path="/auth" element={<AuthPage />} />}
        {isLogedIn && <Route path="/profile" element={<UserProfile />} />}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}

export default App;
