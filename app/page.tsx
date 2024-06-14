import Header from "./components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <p className="mt-2 text-center text-wrap">
        Like our products??{" "}
        <Link href={"/review"}>
          <span className="link-with-hover-line hover:text-lime-950">
            Leave a review
          </span>
        </Link>
      </p>
    </>
  );
}
