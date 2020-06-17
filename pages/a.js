import Link from "next/link";

export default function A({ data }) {
  return (
    <div>
      <h1>A</h1>
      <h2>Hey, {data.name}</h2>
      <Link href="/">
        <a>Back</a>
      </Link>
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch("https://swapi.dev/api/people/2/");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
