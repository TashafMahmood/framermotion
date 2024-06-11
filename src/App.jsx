import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProgressBar from "./components/ProgressBar";
import EnterAndExitAnimation from "./components/EnterAndExitAnimation";

function App() {
  return (
    <>
      <ProgressBar />
      <EnterAndExitAnimation/>
    </>
  );
}

export default App;
