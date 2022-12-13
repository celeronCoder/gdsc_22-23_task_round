import { Navbar } from "./components/Navbar";

export default function App() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap"
        rel="stylesheet"
      ></link>
      <div className="w-full min-h-screen flex items-center justify-center bg-[url('/images/background.jpg')] ">
        <div className="w-full min-h-screen bg-white text-white bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10">
          <Navbar />
        </div>
      </div>
    </>
  );
}
