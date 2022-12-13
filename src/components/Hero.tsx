import { AiOutlineRetweet } from "react-icons/ai";

export function Hero() {
  return (
    <div className="mt-20 flex flex-col gap-20">
      <div className="w-full items-center flex justify-center">
        <div className="max-w-2xl flex flex-col justify-center gap-10 text-center">
          <p className="hero text-6xl font-extrabold">
            Collect and sell super rate{" "}
            <span className="text-yellow-200">NFTs</span>
          </p>
          <p>
            The world's first and largest digital marketplace for crypto
            collectibles and non-figurable tokens (NFTs).
          </p>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="flex items-center justify-between px-6 py-4 text-xl rounded-full max-w-sm text-black font-bold bg-gradient-to-r hover:bg-gradient-to-l transition-all duration-300 cursor-pointer from-orange-400 to-indigo-600 w-full">
          <p>Explore Marketplace</p>
          <div className="p-3 bg-yellow-200 rounded-full font-extrabold">
            <div className="p-1 border-2 rounded-full border-black">
              <AiOutlineRetweet size={16} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
