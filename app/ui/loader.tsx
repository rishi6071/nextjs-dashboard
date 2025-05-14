export default function Loader() {
  return (
    <div className="relative w-12 h-12">
      {/* Spinner Track */}
      <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>

      {/* Spinner Animation */}
      <div className="absolute inset-0 rounded-full border-4 border-blue-300 border-t-transparent custom-spin"></div>
    </div>
  );
}
