import Link from "next/link";

export default function MainHeader() {
  return (
    <header>
      <Link href={"/"} className="absolute right-[50%]">
        Chilled Farmer
      </Link>
      <nav className="">
        <ul className="flex justify-between">
          <li>
            <Link href={"/games"}>Games</Link>
          </li>
          <li>Watch</li>
          <li>About</li>
          <li>Create</li>
          <li>Gallery</li>
          <li>Shop</li>
          <li>Search</li>
        </ul>
      </nav>
    </header>
  );
}
