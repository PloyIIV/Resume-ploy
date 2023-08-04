import ContactMe from "./components/ContactMe"
import Footer from "./components/Footer"
import Introduction from "./components/Introduction"
import Passions from "./components/Passions"
import Portfolio from "./components/Portfolio"
import Logo from "./components/Logo"

function HomePage () {
    return (
        <div className="flex relative ">
            <div className="flex flex-col relative z-20">
                <div className="sticky top-0 shadow-md bg-white z-30 lg:shadow-none lg:static ">
                    <Logo />
                </div>
                <Introduction />
                <Passions />
                <Portfolio />
                <ContactMe />
                <Footer />
                <div className="flex absolute -z-10">
                    <div className="flex absolute bg-blue-100 w-[150px] h-[150px] rounded-full blur-xl top-32 left-96" ></div>
                    <div className="flex absolute bg-blue-200 w-[250px] h-[250px] rounded-full blur-2xl top-[400px] left-[900px]" ></div>
                    <div className="flex absolute bg-blue-200 w-[100px] h-[100px] rounded-full blur-2xl top-[600px] left-[150px]" ></div>
                    <div className="flex absolute bg-blue-200 w-[200px] h-[200px] rounded-full blur-2xl top-[170px] left-[1450px]" ></div>
                </div>
            </div>
            
        </div>
    )
}

export default HomePage