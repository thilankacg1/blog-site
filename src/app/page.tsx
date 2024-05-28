import Image from "next/image";
import Header from "./components/header/header";

function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="z-10 w-full max-w-7xl items-center justify-between font-mono text-sm">
        <Header />
      </div>
      <div className="flex justify-between items-center bg-orange-500 border-black py-10 lg:py-0">
        <div className="px-10 space-y-5">
          <h1 className="text-6xl max-w-xl font-serif">
            <span className="underline decoration-black decoration-4">MY BLOG</span>{" "}is place to write, read and connect</h1>
            <h2>
            Its easy and free to post your thinking
          </h2>
        </div>
          
        <Image src="/assets/myBlog.png"  width={150} height={50} alt=""></Image>
       
      </div>

    </main>
  );
}

export default Home;
