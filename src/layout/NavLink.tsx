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
  console.log(href);
  console.log(currentPath);
  return (
    <li>
      <Link
        href={href}
        className={clsx("hover:text-blue-600", {
          underline: href === currentPath,
        })}
      >
        {children}
      </Link>
    </li>
  );
}
