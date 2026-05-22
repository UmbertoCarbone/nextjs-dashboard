// /app/dashboard/invoices/error.tsx
"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Opzionale: logga l'errore su una console o un servizio esterno
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center text-xl font-semibold">
        Something went wrong!
      </h2>
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={
          // Tenta il ripristino ri-renderizzando la rotta delle fatture
          () => reset()
        }
      >
        Try again
      </button>
    </main>
  );
}
