import React from 'react'
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";

const FeaturesData = [{
    id: 1,
    image: icon1,
    text: "MENU FOR EVERY TASTE",
    description: "Lorem ipsum dolor sit amet consectetur. Felis eget sit sit scelerisque vestibulum. . Felis eget sit sit scelerisque vestibulum. Urna faucibus amet massa lacus lorem. ",
},
{
    id: 2,
    image: icon2,
    text: "ALWAYS QUALITY BEANS",
    description: "Lorem ipsum dolor sit amet consectetur. Felis eget sit sit scelerisque vestibulum. . Felis eget sit sit scelerisque vestibulum. Urna faucibus amet massa lacus lorem. ",
},
{
    id: 3,
    image: icon3,
    text: "EXPERIENCED BARISTA",
    description: "Lorem ipsum dolor sit amet consectetur. Felis eget sit sit scelerisque vestibulum. . Felis eget sit sit scelerisque vestibulum. Urna faucibus amet massa lacus lorem. ",
}]


const Features = () => {
    return (
        <section className='max-w-5/6 mx-auto flex flex-col justify-center items-center gap-8 px-8 my-24 text-center '>
            
            <div className='relative flex justify-center items-center text-base lg:text-lg'>
                FEATURES<span className="absolute w-16 h-0.5 bg-[#ecaa77] bottom-0 "></span>
            </div>

            <h3 className='text-2xl font-bold lg:text-4xl '>Why people choose us?</h3>
            <p className='text-sm lg:text-base text-[#797B78] lg:max-w-5xl mx-auto'>
                Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc varius. Facilisis eget cras sit semper sit enim. Turpis aliquet at ac eu donec ut. Sagittis vestibulum at quis non massa netus.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:mt-8'>
                {FeaturesData.map((card) =>
                    <div key={card.id} className='flex flex-col items-center gap-8 m-4'>
                        <img src={card.image} alt="" />
                        <h4 className='font-bold text-lg lg:text-2xl'>{card.text}</h4>
                        <p className='text-sm lg:text-base text-[#797B78]' >{card.description}</p>
                    </div>)}
            </div>

        </section>
    )
}

export default Features 