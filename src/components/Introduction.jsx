// import Navbar from "./Navbar.jsx"
import littleGuy from "../assets/image/ssss.png";

function Introduction() {
  return (
    <div id="about" className="flex flex-col items-center text-xl">
      <div className="w-screen flex-col-reverse flex lg:w-4/5 lg:flex-row items-center justify-center mt-40">
        <div className=" w-10/12 mt-10 md:w-3/4 lg:w-2/4 flex justify-center items-center text-blue-400">
          <div className="flex flex-col">
            <h2 className="text-3xl font-medium lg:font-medium">Hi !</h2>
            <h1 className="font-bold text-4xl lg:text-5xl mt-4">
              I'm Chadapan Yukkriroek.
            </h1>
            <h1 className="font-bold text-4xl lg:text-5xl mt-3">
              a Full-Stack Developer
            </h1>
            <p className="w-full lg:w-3/4 text-base tracking-wide leading-snug mt-5 lg:mt-9 text-indigo-50">
              Fullstack developer based in Bangkok, Thailand. I want to expand
              my knowledge, my area of expertise. I specialize in building scalable
              web applications using technologies like React, Node.js, PostgreSQL and MongoDB.
            </p>
          </div>
        </div>
        <div className="w-fit flex justify-center items-center">
          <img className="w-11/12 md:max-w-full" src={littleGuy} alt="guy" />
        </div>
      </div>
    </div>
  );
}

export default Introduction;
