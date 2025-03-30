import Navbar from "./components/navbar";
import Name from "./components/Name";
import MainContent from "./components/MainContent";
import React, { useState, useEffect } from "react";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000); // 1-second delay
    return () => clearTimeout(timer);
  }, []);
  return <>{showSplash ? <Name /> : <MainContent />}</>;
}

export default App;
