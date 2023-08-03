import Vector from "../assets/image/Vector.png"
import github from "../assets/image/github.png"
import instagram from "../assets/image/instagram.png"
import email from "../assets/image/github.png"
import tel from "../assets/image/call.png"

function ContactMe () {

    const contactItems = [
        {
            image: github,
            name: 'Github',
            link: 'https://github.com/ployiiv'
        },
        {
            image: instagram,
            name: 'Instagram',
            link: 'https://www.instagram.com/ployiiv'
        },
        {
            image: email,
            name: 'Email',
            link: 'https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsdHGMVmfqWzkVftjlcLpVlcpSXRjfVHXThFsVkHDZMXqgJPrjRHZgxTDrLxbnVpkkxStlgq'
        },
        {
            image: tel,
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
                                    <img src={Vector} alt="blue circle" />
                                </div>
                                <a href={item.link} className="tracking-widest text-2xl mt-5 font-semibold text-stone-600 hover:scale-110 hover:text-amber-600">{item.name}</a>
                             </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default ContactMe