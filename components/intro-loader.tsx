"use client";

import { useEffect, useState } from "react";

export function IntroLoader() {
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setFinished(true), 1450);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className={`intro-loader${finished ? " is-finished" : ""}`} aria-hidden="true">
      <div className="loader-mark"><span>LD</span></div>
      <p>Construindo a experiência</p>
      <div className="loader-track"><span /></div>
    </div>
  );
}
