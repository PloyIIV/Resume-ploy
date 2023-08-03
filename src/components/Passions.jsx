import undraw1 from "../assets/image/undraw1.png"
import undraw2 from "../assets/image/undraw2.png"
import undraw3 from "../assets/image/undraw3.png"

function Passions () {
    const passionItems = [
        {
            title: 'Front-End',
            title2: 'Developer',
            image: undraw1,
            language: '(Sass, Bootstrap, Tailwind)',
        },
        {
            title: 'Back-End',
            title2: 'Developer',
            image: undraw2,
            language: '(NodeJS, Laravel, Codeigniter)',
        },
        {
            title: 'Front-End',
            title2: 'Developer',
            image: undraw3,
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
                                <img src={item.image} />
                                <h1 className="mt-2 text-lg tracking-widest"><strong>{item.title}</strong> {item.title2}</h1>
                                <p className="text-sm tracking-wider">{item.language}</p>
                            </div>
                        )
                    })}


                </div>
            </div>
        </div>
    )
}

export default Passions