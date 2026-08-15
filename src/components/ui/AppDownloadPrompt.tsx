"use client";

import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/contact";

export default function AppDownloadPrompt({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-6">
      <button
        type="button"
        className="absolute inset-0 bg-navy-950/70 backdrop-blur-sm"
        aria-label="Close app download prompt"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="app-download-title"
        className="relative w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl p-6 sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-navy-400 hover:text-navy-800 rounded-lg hover:bg-navy-50 transition-colors"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="w-12 h-12 rounded-2xl bg-navy-800 text-white flex items-center justify-center mb-5">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>

        <h2 id="app-download-title" className="font-heading font-extrabold text-navy-800 text-2xl mb-2">
          Get a better experience on our app
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          Sign in, send money, and track transfers faster with the Atlantic Xchange mobile app.
        </p>

        <div className="space-y-3">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full bg-navy-800 hover:bg-navy-700 text-white font-semibold text-sm py-3.5 rounded-xl transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16.37 3.62c.9-1.08 1.5-2.58 1.33-4.12-1.29.05-2.85.86-3.77 1.94-.83.96-1.56 2.5-1.37 3.97 1.45.11 2.94-.74 3.81-1.79zM20.5 17.15c-.37.86-.81 1.65-1.33 2.41-.71 1.05-1.62 2.23-2.76 2.25-1.09.02-1.45-.71-2.7-.71-1.26 0-1.65.68-2.77.73-1.14.05-2.01-1.14-2.73-2.18C6.4 17.18 5.2 12.7 6.85 9.7c.82-1.48 2.28-2.42 3.87-2.45 1.21-.02 2.35.81 3.1.81.74 0 2.13-1 3.59-.85.61.02 2.33.25 3.43 1.86-2.9 1.59-2.44 5.73.66 7.08z" />
            </svg>
            Download on the App Store
          </a>
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full bg-navy-50 hover:bg-navy-100 text-navy-800 font-semibold text-sm py-3.5 rounded-xl border border-navy-100 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5.5 3.5v17l14-8.5-14-8.5z" />
            </svg>
            Get it on Google Play
          </a>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-4 w-full text-center text-sm text-navy-400 hover:text-navy-700 font-medium py-2 transition-colors"
        >
          Continue on the website
        </button>
      </div>
    </div>
  );
}
