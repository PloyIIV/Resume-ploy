import Navbar from "./Navbar";

function Logo() {
  return (
    <div className="w-screen fixed bg-white bg-opacity-70 backdrop-blur-md shadow-lg shadow-blue-950 flex flex-col items-center text-xl">
      <nav className="flex flex-row justify-between lg:w-4/5 md:px-8 py-5">
        <div className="flex items-center tracking-[10px] lg:ml-24">
          <a href="/">
            <strong>Chad</strong>apan
          </a>
        </div>
        <Navbar />
      </nav>
    </div>
  );
}

export default Logo;
