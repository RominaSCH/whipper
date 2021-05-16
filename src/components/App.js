import React, { useState } from "react";
import { authService } from "../fireb";
import AppRouter from "./Router";

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <>
  <AppRouter isLoggedIn={isLoggedIn}/>
  <footer>&copy;{new Date().getFullYear()} Whipper</footer>
  </>
  );
}

export default App;
