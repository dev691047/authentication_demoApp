import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
      </Routes>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
      <Routes>
        <Route path="/profile" exact element={<UserProfile />} />
      </Routes>
    </Layout>
  );
}

export default App;
