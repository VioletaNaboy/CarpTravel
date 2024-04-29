import Link from "next/link";
import clsx from "clsx";

export default function NavLink({
  href,
  currentPath,
  children,
}: {
  href: string;
  currentPath: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={clsx("hover:underline", {
        "text-red-900 underline": href === currentPath,
      })}
    >
      {children}
    </Link>
  );
}
