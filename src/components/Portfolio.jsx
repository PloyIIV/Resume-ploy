function Portfolio () {

    return (
        <div id="portfolio" className="w-screen flex justify-center">
            <div className="w-4/5  flex items-center flex-col mt-10">
                <h1 className="text-violet-700 tracking-widest text-3xl mt-8 text-center">My <strong className="text-purple-950">Portfolio</strong></h1>
                <div className="flex flex-col lg:flex-row mt-5 items-center justify-center">

                    <div className="w-[300px] h-[230px] bg-white rounded-xl shadow-2xl m-8 flex flex-col relative hover:scale-105">
                        <div className="flex absolute z-10 items-center ml-5 mt-5 h-1/4">
                            <img src="../src/assets/image/emojione_e-mail.png" />
                            <h1 className="font-bold text-lg tracking-wider ml-2 text-violet-800">Sendpay</h1>
                        </div>
                        <div className="w-[200px] h-[200px] bg-purple-100 rounded-full flex absolute ml-4 mt-5"></div>
                        <img className="absolute bottom-2 right-2 w-5/6" src="../src/assets/image/SendPay 1.png" />
                    </div>

                    <div className="w-[300px] h-[230px] bg-white rounded-xl shadow-2xl m-8 flex flex-col relative hover:scale-105">
                        <div className="flex flex-col absolute z-10 ml-5 mt-4 h-1/4 justify-center items-end">
                            <h1 className="font-bold text-lg tracking-wider ml-2 text-blue-500">E-Commerce</h1>
                            <h6 className="tracking-wider text-xs text-blue-500 absolute bottom-1.5">Website</h6>
                        </div>
                        <div className="w-[200px] h-[200px] bg-sky-100 rounded-full flex absolute ml-4 mt-5"></div>
                        <img className="absolute bottom-2 right-2 w-5/6" src="../src/assets/image/e-commerce 1 1.png" />
                    </div>

                    <div className="w-[300px] h-[230px] bg-white rounded-xl shadow-2xl m-8 flex flex-col relative hover:scale-105">
                        <div className="flex absolute z-10 items-center ml-5 mt-5 h-1/4">
                            <img src="../src/assets/image/Screenshot (162) 1.png" />
                        </div>
                        <div className="w-[200px] h-[200px] bg-stone-300 rounded-full flex absolute ml-4 mt-5"></div>
                        <img className="absolute bottom-2 right-2 w-5/6" src="../src/assets/image/Edtech 1.png" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio