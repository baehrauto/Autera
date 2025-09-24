import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-[#faf3ed] border-t-2 border-blue-100 shadow-t-lg text-gray-700 font-sans">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <Logo />
          <p className="mt-8 text-gray-500 text-base text-center font-semibold">
            © {new Date().getFullYear()} Autera. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 