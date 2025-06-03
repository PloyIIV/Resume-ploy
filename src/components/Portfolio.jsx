import wix_screenshot from '../assets/image/wix_screenshot.png'
import merry_screenshot from '../assets/image/merry_screenshot.png'
import github_screenshot from '../assets/image/github_screenshot.png'

function Portfolio () {

    return (
        <div id="portfolio" className="w-screen flex justify-center">
            <div className="w-4/5 flex items-center flex-col mt-10">
                <h1 className="text-blue-100 tracking-widest text-3xl mt-8 text-center">My <strong className="text-blue-300">Portfolio</strong></h1>
                <p className='text-xs text-gray-500 mt-1'>click on the images to go to the links</p>
                <div className="flex flex-col lg:flex-row mt-5 items-center justify-center">
                    <a href="https://ployiiv.wixsite.com/portfolio" target='_blank' className='bg-white rounded-xl shadow-2xl shadow-blue-800 m-8 hover:scale-105'>
                        <div className="w-[300px] h-[230px] flex flex-col relative">
                            <div className="flex absolute z-10 items-center ml-5 mt-5 h-1/4">
                                <img className="w-10" src="https://tbs-marketing.com/wp-content/uploads/2022/09/1280px-Wix.com_website_logo.svg_.webp" />
                                <h1 className="font-bold text-lg tracking-wider ml-2 text-stone-800">Wixsite</h1>
                                <h6 className="tracking-wider text-xs absolute bottom-1.5 right-0">portfolio</h6>
                            </div>
                            <div className="w-[200px] h-[200px] bg-stone-100 rounded-full flex absolute ml-4 mt-5"></div>
                            <img className="absolute bottom-5 right-2 w-5/6 rounded-md shadow-md shadow-gray-400" src={wix_screenshot} />
                        </div>
                    </a>
                    <a href="https://merry-project-frontend.vercel.app/" target='_blank' className='bg-white rounded-xl shadow-2xl shadow-blue-800 m-8 hover:scale-105'>
                        <div className="w-[300px] h-[230px] flex flex-col relative"> 
                            <div className="flex flex-col absolute z-10 ml-5 mt-4 h-1/4 justify-center items-end text-[#C70039]">
                                <h1 className="font-bold text-lg tracking-wider ml-2">Fullstack</h1>
                                <h6 className="tracking-wider text-xs absolute bottom-1.5">solo project</h6>
                            </div>
                            <div className="w-[200px] h-[200px] bg-[#ffe1ea5e] rounded-full flex absolute ml-4 mt-5"></div>
                            <img className="absolute bottom-5 right-2 w-5/6 rounded-md shadow-md shadow-[#32000E]" src={merry_screenshot} />
                        </div>
                    </a>
                    <a href="https://github.com/PloyIIV" target='_blank' className='bg-white rounded-xl shadow-2xl shadow-blue-800 m-8 hover:scale-105'>
                        <div className="w-[300px] h-[230px] flex flex-col relative">
                            <div className="flex absolute z-10 items-center ml-5 mt-5 h-1/4">
                                <img className="w-24" src='https://cdn-images-1.medium.com/max/1200/1*dDNpLKu_oTLzStsDTnkJ-g.png' />
                                <h6 className="tracking-wider text-xs absolute bottom-1.5 left-10">Repositories</h6>
                            </div>
                            <div className="w-[200px] h-[200px] bg-[#17254118] rounded-full flex absolute ml-4 mt-5"></div>
                            <img className="absolute bottom-5 right-2 w-5/6 rounded-md shadow-md shadow-blue-950" src={github_screenshot} />
                    </div></a>
                </div>
            </div>
        </div>
    )
}

export default Portfolio