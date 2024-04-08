import { useState } from "react";

export default function useType() {
  const [type, setType] = useState(null);

  function handleType(type) {
    setType(type);
  }

  return { type, setType };
}
