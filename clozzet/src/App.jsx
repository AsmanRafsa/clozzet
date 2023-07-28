import Router from "./components/Router";
import { useState,useContext } from "react";
import StateProvider from "./context/state";
export default function App() {
  return (
    <StateProvider>
      <Router/>
    </StateProvider>
  );
}
