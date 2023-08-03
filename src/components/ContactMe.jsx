function ContactMe () {

    const contactItems = [
        {
            image: '../src/image/github.png',
            name: 'Github',
            link: 'https://github.com/ployiiv'
        },
        {
            image: '../src/image/instagram.png',
            name: 'Instagram',
            link: 'https://www.instagram.com/ployiiv'
        },
        {
            image: '../src/image/fast message.png',
            name: 'Email',
            link: 'https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsdHGMVmfqWzkVftjlcLpVlcpSXRjfVHXThFsVkHDZMXqgJPrjRHZgxTDrLxbnVpkkxStlgq'
        },
        {
            image: '../src/image/call.png',
            name: 'Tel',
        },
    ]

    return (
        <div id="contact" className="w-screen flex justify-center overflow-x-hidden">
            <div className="w-4/5 flex items-center flex-col mt-10">
                <h1 className="text-violet-700 tracking-widest text-3xl mt-8 text-center">Contact <strong className="text-purple-950">Me</strong></h1>
                <div className="w-4/5 flex flex-col lg:flex-row justify-around mt-10">

                    {contactItems.map((item, index) => {
                        return (
                            <div key={index} className="flex flex-col items-center mb-10">
                                <div className="flex relative justify-center items-center">
                                    <img className="absolute" src={item.image} alt={item.name + ' icon'} />
                                    <img src="../src/image/Vector.png" alt="blue circlw" />
                                </div>
                                <a href={item.link} className="tracking-widest text-2xl mt-5 font-semibold text-stone-600 hover:scale-110 hover:text-amber-600">{item.name}</a>
                             </div>
                        )
                    })}

                    {/* <div className="flex flex-col items-center mb-10">
                        <div className="flex relative justify-center items-center">
                            <img className="absolute" src="../src/image/github.png" alt="github icon" />
                            <img src="../src/image/Vector.png" alt="blue circle" />
                        </div>
                        <h1 className="tracking-widest text-2xl mt-5 font-semibold text-stone-600">Github</h1>
                    </div>

                    <div className="flex flex-col items-center mb-10">
                        <div className="flex relative justify-center items-center">
                            <img className="absolute" src="../src/image/instagram.png" alt="github icon" />
                            <img src="../src/image/Vector.png" alt="blue circle" />
                        </div>
                        <h1 className="tracking-widest text-2xl mt-5 font-semibold text-stone-600">Instagram</h1>
                    </div>
                    <div className="flex flex-col items-center mb-10">
                        <div className="flex relative justify-center items-center">
                            <img className="absolute" src="../src/image/fast message.png" alt="email icon" />
                            <img src="../src/image/Vector.png" alt="blue circle" />
                        </div>
                        <h1 className="tracking-widest text-2xl mt-5 font-semibold text-stone-600">Email</h1>
                    </div>
                    <div className="flex flex-col items-center mb-10">
                        <div className="flex relative justify-center items-center">
                            <img className="absolute" src="../src/image/call.png" alt="phone icon" />
                            <img src="../src/image/Vector.png" alt="blue circle" />
                        </div>
                        <h1 className="tracking-widest text-2xl mt-5 font-semibold text-stone-600">Tel</h1>
                    </div> */}


                </div>
            </div>
        </div>
    )
}

export default ContactMe