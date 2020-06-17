import React from "react";
import Link from "next/link";

export default function Home({ data }) {
  return (
    <>
      <ul>
        <li>
          <Link href="/a">
            <a>a</a>
          </Link>
        </li>
        <li>
          <Link href="/b">
            <a>b</a>
          </Link>
        </li>
      </ul>

      <h1>Hey, {data.name}</h1>
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch("https://swapi.dev/api/people/1/");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
