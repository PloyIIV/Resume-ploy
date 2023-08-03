import Navbar from "./Navbar.jsx"

function Header() {
  return (
    <div className="w-screen flex flex-col items-center text-xl">
      {/* Logo and navbar section */}
      <nav className="w-screen flex flex-row justify-between lg:w-4/5 md:px-8 py-5 sticky top-0 shadow-xl bg-white md:shadow-none md:static">
        <div className="flex items-center tracking-[10px] ml-20 lg:ml-24"><strong>Raul</strong>iqbal</div>
        <Navbar />
      </nav>
      {/* Introduction */}
      <div id="about" className="w-screen flex-col-reverse flex lg:w-4/5 lg:flex-row items-center justify-center mt-3">
        <div className=" w-10/12 mt-10 md:w-3/4 lg:w-2/4 flex justify-center items-center text-blue-900">
          <div className=" flex flex-col">
            <h2 className="text-3xl font-medium lg:font-medium">Hi !</h2>
            <h1 className="font-bold text-4xl lg:text-5xl mt-4">I'm Chadapan Yukkriroek.</h1>
            <h1 className="font-bold text-4xl lg:text-5xl mt-3">a Front-End Developer</h1>
            <p className="w-full lg:w-3/4 leading-tight mt-5 lg:mt-9 text-indigo-950">
              Front-End developer based in Bangkok, Thailand. I am coding with a
              clean and beautiful problem solving in mind.
            </p>
          </div>
        </div>

        <div className="w-fit flex justify-center items-center">
          <img className="w-11/12 md:max-w-full" src="../src/image/ssss.png" alt="guy" />
        </div>
      </div>

    </div>
  );
}

export default Header;
