import Link from "next/link";

export function About() {
  return (
    <section className="bg-[#0D0D0D] text-gray-300 py-16 px-4 md:px-8 lg:px-16 my-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
          About ScaffoldRust
        </h2>
        <p className="mb-6 text-base">
          ScaffoldRust is a comprehensive development platform designed to
          accelerate blockchain application creation using Rust. Our mission is
          to empower developers with the tools and resources they need to build
          secure, scalable, and efficient blockchain solutions.
        </p>
        <p className="mb-10 text-base">
          Whether you're building on Stellar, Solana, or other Rust-compatible
          blockchains, ScaffoldRust provides the foundation you need to bring
          your ideas to life quickly and confidently.
        </p>
        <Link
          href="/learn-more"
          className="bg-white text-black font-semibold py-3 px-8 rounded-sm hover:bg-gray-200 transition duration-300"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}
