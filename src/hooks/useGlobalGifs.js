import { useContext } from "react";
import GifsContext from "context/GifsContext";

export default function useGlobalGifs() {
  return useContext(GifsContext);
}

// Best practice to have Hooks whose function is to read context and others to update it
