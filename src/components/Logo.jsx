import Navbar from "./Navbar";

function Logo() {
  return (
    <div id="about" className="flex flex-col items-center text-xl">
      <nav className="w-screen flex flex-row justify-between lg:w-4/5 md:px-8 py-5">
        <div className="flex items-center tracking-[10px] ml-20 lg:ml-24">
          <a href="https://ployiiv.wixsite.com/portfolio">
            <strong>Raul</strong>iqbal
          </a>
        </div>
        <Navbar />
      </nav>
    </div>
  );
}

export default Logo;
