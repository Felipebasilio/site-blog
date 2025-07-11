import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

interface ActiveLinkProps extends LinkProps {
  children: React.ReactNode;
}

export const ActiveLink = ({ href, children, ...rest }: ActiveLinkProps) => {
  const router = useRouter();
  const isActive = router.asPath === href || router.asPath === href;

  return (
    <Link
      href={href}
      className={cn(
        'text-action-sm transition-colors hover:text-blue-200',
        isActive ? 'text-blue-200' : 'text-gray-100'
      )}
      {...rest}
    >
      {children}
    </Link>
  );
};