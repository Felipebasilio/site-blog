import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" title="Página inicial">
      <Image src="/logo.svg" alt="logo site" width={100} height={100} />
    </Link>
  );
};