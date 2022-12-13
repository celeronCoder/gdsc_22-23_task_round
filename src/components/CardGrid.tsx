export function CardGrid() {
  return (
    <div className="flex items-center justify-center w-full my-20 gap-20">
      <div
        style={{ backgroundPosition: "center" }}
        className="h-64 w-72 rounded-xl flex flex-col items-center justify-center text-center bg-[url('/images/a.jpg')] gap-2"
      >
        <div className="cursor-pointer h-full w-full flex flex-col items-center justify-center bg-clip-padding backdrop-filter backdrop-blur-sm">
          <p className="text-2xl font-bold">Electro Party</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div
        style={{ backgroundPosition: "center" }}
        className="h-64 w-72 rounded-xl text-center bg-[url('/images/b.jpg')] gap-2"
      >
        <div className="cursor-pointer h-full w-full flex flex-col items-center justify-center bg-clip-padding backdrop-filter backdrop-blur-sm">
          <p className="text-2xl font-bold">Foam Splash</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div
        style={{ backgroundPosition: "left" }}
        className="h-64 w-72 flex flex-col rounded-xl items-center justify-center text-center bg-[url('/images/c.jpg')] gap-2"
      >
        <div className="cursor-pointer h-full w-full flex flex-col items-center justify-center bg-clip-padding backdrop-filter backdrop-blur-sm">
          <p className="text-2xl font-bold">Season Party</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
  );
}
