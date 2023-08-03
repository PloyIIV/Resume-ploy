function Footer () {
    return (
        <div className="w-screen h-[200px] md:h-[400px] relative overflow-hidden">
            <div className="w-full absolute bottom-4 md:bottom-9 z-10 flex justify-center items-center">
                <h1 className="text-base lg:text-3xl tracking-wider text-white">Design by Rauliqbal</h1>
                </div>
            <div className="w-full absolute bottom-0 hidden">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4581F6" fill-opacity="1" d="M0,224L80,229.3C160,235,320,245,480,218.7C640,192,800,128,960,117.3C1120,107,1280,149,1360,170.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            </div>
            <div className="w-full absolute bottom-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4581F6" fill-opacity="1" d="M0,192L80,181.3C160,171,320,149,480,160C640,171,800,213,960,202.7C1120,192,1280,128,1360,96L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            </div>
        </div>
    )
}

export default Footer