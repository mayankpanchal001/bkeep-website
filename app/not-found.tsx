export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-cream">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-brand-navy mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page not found</p>
        <a
          href="/"
          className="inline-block bg-brand-orange hover:bg-brand-orange/90 text-white px-6 py-3 rounded-md transition-colors"
        >
          Return Home
        </a>
      </div>
    </div>
  );
}
