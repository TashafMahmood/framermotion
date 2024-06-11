import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProgressBar from "./components/ProgressBar";
import EnterAndExitAnimation from "./components/EnterAndExitAnimation";
import Keyframes from "./components/Keyframes";
import GestureButton from "./components/GestureButton";

function App() {
  return (
    <>
      <ProgressBar />
      <EnterAndExitAnimation />
      <Keyframes />
      <GestureButton />
    </>
  );
}

export default App;
