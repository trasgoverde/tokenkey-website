import Link from "next/link";
import Navmodule from "@/styles/Nav.module.css";

export default function AppNavigation({}) {
  return (
    <ul className="items-center justify-between flex-grow w-full bg-white lg:flex">
      <li>
        <Link href={"/collectibles"}>My Collection</Link>
      </li>
      <li>
        <Link href={"/holders"}>Token-Gated Perks</Link>
      </li>
    </ul>
  );
}
