import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="bg-[#101216] min-h-[calc(100vh-101px)] w-full flex items-center justify-center px-4 overflow-hidden">
      <div className="border border-dashed border-title/10 rounded-xl p-12 flex flex-col items-center max-w-md w-full text-center">
        <h1 className="font-primary font-bold text-6xl text-brand mb-4">404</h1>
        <h2 className="font-primary font-bold text-[20px] text-title mb-2 uppercase">
          Page Not Found
        </h2>
        <p className="font-secondary font-normal text-[12px] text-subTitle mb-6">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="font-secondary font-semibold text-[12px] text-black px-6 py-2.5 rounded-full bg-brand hover:opacity-90 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}