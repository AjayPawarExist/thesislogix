// File: pages/404.js

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold text-gray-900">404</h1>
      <p className="text-xl mt-4">Oops! The page you're looking for doesn't exist.</p>
      <a
        href="/"
        className="mt-6 text-blue-700 hover:underline hover:text-blue-800"
      >
        Go Back Home
      </a>
    </div>
  );
}
