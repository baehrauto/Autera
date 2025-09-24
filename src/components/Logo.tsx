'use client';

import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center -mb-8 -mt-4 ${className}`}>
      <div className="flex items-center">
        <Image
          src="/images/partners/logo3.png"
          alt="Autera Logo"
          width={1200}
          height={336}
          priority
          className="h-32 w-auto"
        />
      </div>
    </Link>
  );
} 