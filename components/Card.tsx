import { useState } from "react"

const Card = () => {
  const [state, updateState] = useState("");

  // ......

  updateState("foo");
  
}

// server components don't do any of this
// server components just spit out basic html
