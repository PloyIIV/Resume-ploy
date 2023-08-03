function Passions () {
    const passionItems = [
        {
            title: 'Front-End',
            title2: 'Developer',
            language: '(Sass, Bootstrap, Tailwind)',
        },
        {
            title: 'Back-End',
            title2: 'Developer',
            language: '(NodeJS, Laravel, Codeigniter)',
        },
        {
            title: 'Front-End',
            title2: 'Developer',
            language: '(Figma, Zeplin, Adobe XD)',
        },
    ]

    return (
        <div id="passions" className="w-screen flex justify-center ">
            <div className="w-full lg:w-4/5 flex items-center flex-col mt-10">
                <h1 className="text-violet-700 tracking-widest text-3xl mt-8 text-center">Additional <strong className="text-purple-950">passions</strong></h1>
                <div className="flex flex-col lg:flex-row mt-5 items-center w-11/12 md:w-screen justify-center">

                    {passionItems.map((item,index) => {
                        return (
                            <div key={index} className="max-w-[400px] md:h-[230px] p-10 bg-white rounded-xl shadow-2xl m-8 flex flex-col justify-center items-center text-center hover:scale-105">
                                <img src="../src/image/undraw_Wireframing_re_q6k6 1.png" />
                                <h1 className="mt-2 text-lg tracking-widest"><strong>{item.title}</strong> {item.title2}</h1>
                                <p className="text-sm tracking-wider">{item.language}</p>
                            </div>
                        )
                    })}

                    {/* <div className="max-w-[400px] md:h-[230px] p-10 bg-white rounded-xl shadow-2xl m-8 flex flex-col justify-center items-center text-center">
                        <img src="../src/image/undraw_Wireframing_re_q6k6 1.png" />
                        <h1 className="mt-2 text-lg tracking-widest"><strong>Front-End</strong> Developer</h1>
                        <p className="text-sm tracking-wider">(Sass, Bootstrap, Tailwind)</p>
                    </div>
                    <div className="max-w-[400px] md:h-[230px] p-10 bg-white rounded-xl shadow-2xl m-8 flex flex-col justify-center items-center text-center">
                        <img src="../src/image/undraw_Detailed_analysis_re_tk6j 1.png" />
                        <h1 className="mt-2 text-lg tracking-widest"><strong>Back-End</strong> Developer</h1>
                        <p className="text-sm tracking-wider">(NodeJS, Laravel, Codeigniter)</p>
                    </div>
                    <div className="max-w-[400px] md:h-[230px] p-10 bg-white rounded-xl shadow-2xl m-8 flex flex-col justify-center items-center text-center">
                        <img src="../src/image/undraw_Design_process_re_0dhf 1.png" />
                        <h1 className="mt-2 text-lg tracking-widest"><strong>UI/UX</strong> Designer</h1>
                        <p className="text-sm tracking-wider">(Figma, Zeplin, Adobe XD)</p>
                    </div> */}

                </div>
            </div>
        </div>
    )
}

export default Passions