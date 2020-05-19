import Link from "next/link";

export default function A() {
  return (
    <div>
      <div>A</div>
      <Link href="/">
        <a>Back</a>
      </Link>
    </div>
  );
}
