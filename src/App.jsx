import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
  useNavigate,
} from "react-router";
import "./App.css";
import { useState } from "react";
import SignIn from "./SignIn";
import NavBar from "./NavBar";
import Settings from "./Settings";
import Messages from "./Messages";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/app" />
            ) : (
              <SignIn onSignIn={() => setIsAuthenticated(true)} />
            )
          }
        />

        {isAuthenticated && (
          <Route path="/app" element={<NavBar />}>
            <Route path="settings" element={<Settings />} />
            <Route path="messages" element={<Messages />} />
          </Route>
        )}

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
