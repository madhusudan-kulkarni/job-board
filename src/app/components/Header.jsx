import Link from "next/link";
export default function Header() {
  return (
    <header>
      <div className="flex items-center justify-between mx-auto my-4 container">
        <Link href="/" className="font-bold text-gray-900 text-xl">
          Job Board
        </Link>
        <nav className="flex gap-3 *:py-2 *:px-4 *:rounded-md">
          <Link href="/login" className="bg-gray-200">
            Login
          </Link>
          <Link href="/post-a-job" className="bg-blue-600 text-white">
            Post a Job
          </Link>
        </nav>
      </div>
    </header>
  );
}
