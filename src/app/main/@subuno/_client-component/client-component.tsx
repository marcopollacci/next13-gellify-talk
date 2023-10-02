"use client";
import { useState } from "react";
export default function ClientComponent() {
  const [show, setShow] = useState<boolean>(false);
  return (
    <>
      <button onClick={() => setShow(!show)}>Clicca</button>
      {show && <p>Hello!</p>}
    </>
  );
}
