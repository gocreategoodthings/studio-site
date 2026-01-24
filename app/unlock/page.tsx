"use client";

import { useState } from "react";

export default function UnlockPage() {
  const [key, setKey] = useState("");

  const submit = () => {
    if (key === process.env.NEXT_PUBLIC_SITE_KEY) {
      document.cookie = "site_access=granted; path=/";
      window.location.href = "/";
    } else {
      alert("Incorrect key");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="w-full max-w-sm">
        <h1 className="text-xl mb-4">Enter Access Key</h1>
        <input
          type="password"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 mb-4"
        />
        <button
          onClick={submit}
          className="w-full py-2 bg-white text-black"
        >
          Enter
        </button>
      </div>
    </main>
  );
}
