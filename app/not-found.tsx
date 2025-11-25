import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-6xl font-bold text-[#18CD40] mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-8">
        Oops! La página que buscas no existe.
      </p>
      <Link href="/" className="bg-[#18CD40] p-2 font-bold rounded-lg px-4 text-sm cursor-pointer hover:bg-[#18CD40]/80">
        Volver al inicio
      </Link>
    </div>
  );
}
