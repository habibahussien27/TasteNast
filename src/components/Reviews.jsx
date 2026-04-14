import { Dot, Plus, Quote, Star } from 'lucide-react'
import React from 'react'


const ReviewsData = [{
    id: 1,
    color: "#EB9D20",
    stars: 4,
    title: "John",
    job: "Business Man ",
    description: "Lorem ipsum dolor sit amet consectetur. Felis eget sit sit scelerisque vestibulum. . Felis eget sit sit scelerisque vestibulum. Urna faucibus amet massa lacus lorem. ",
},
{
    id: 2,
    color: "#EF7C6A",
    stars: 4,
    title: "John",
    job: "Business Man ",
    description: "Lorem ipsum dolor sit amet consectetur. Felis eget sit sit scelerisque vestibulum. . Felis eget sit sit scelerisque vestibulum. Urna faucibus amet massa lacus lorem. ",
},
{
    id: 3,
    color: "#F855CA",
    stars: 4,
    title: "John",
    job: "Business Man ",
    description: "Lorem ipsum dolor sit amet consectetur. Felis eget sit sit scelerisque vestibulum. . Felis eget sit sit scelerisque vestibulum. Urna faucibus amet massa lacus lorem. ",
}]

const statsData = [
    {
        id: 1,
        number: "1287",
        label: "VISITORS DAILY"
    },
    {
        id: 2,
        number: "578",
        label: "DELIVERIES MONTHLY"
    },
    {
        id: 3,
        number: "1440",
        label: "POSITIVE FEEDBACK"
    },
    {
        id: 4,
        number: "40",
        label: "AWARDS AND HONORS"
    }
];


const Reviews = () => {
    return (
        <section className='max-w-5/6 mx-auto flex flex-col justify-center items-center gap-8 px-8 my-16 text-center'>

            <div className='relative flex justify-center items-center text-base lg:text-lg'>
                Reviews<span className="absolute w-16 h-0.5 bg-[#ecaa77] -bottom-2 "></span>
            </div>

            <h3 className='text-2xl font-bold lg:text-4xl '>Why people choose us?</h3>
            <p className='text-sm lg:text-base text-[#797B78] lg:max-w-5xl mx-auto'>
                Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc varius. Facilisis eget cras sit semper sit enim. Turpis aliquet at ac eu donec ut. Sagittis vestibulum at quis non massa netus.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:mt-8'>
                {ReviewsData.map((card) =>
                    <div key={card.id} className='relative flex flex-col items-center m-4 rounded-xl p-8 bg-[#222425]'>
                        <div className='bg-[#10181B] rounded-full p-4 absolute -top-7'> <Quote className="rotate-180" size={14} color={card.color} fill={card.color} /></div>
                        <p className='text-sm lg:text-base text-[#797B78]' >{card.description}</p>
                        <div className='flex '>{[...Array(5)].map((_, i) => (<Star key={i} color="#222425" fill={card.color} size={16} />))}</div>
                        <h4 className='text-sm lg:text-md'>{card.title}</h4>
                        <span className='text-sm lg:text-md'>{card.job}</span>

                    </div>)}
            </div>


                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full m-8 gap-8'>
                        {statsData.map((stat) => <div>
                            <h4 className='relative font-extrabold md:text-2xl lg:text-4xl'>{stat.number} <spa className="absolute top-1"  ><Plus className='stroke-4' size={24} color='#ecaa77'/></spa></h4>
                            <p>{stat.label}</p>
                        </div>)}
                    </div>
        </section>
    )
}

export default Reviews 