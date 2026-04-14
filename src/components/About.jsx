import chef1 from '../assets/chef1.png'
import chef2 from '../assets/chef2.png'
import chef3 from '../assets/chef3.png'
import Button from './Button';


const sections = [
    {
        id: 1,
        subtitle: "ABOUT US",
        title: "We Invite You to Visit Our Coffee House",
        description: "Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc varius. Facilisis eget cras sit semper sit enim. Turpis aliquet at ac eu donec ut. Sagittis vestibulum at quis non massa netus.",
        image: chef1,
    },
    {
        id: 2,
        subtitle: "COFFEE MENU",
        title: "Quality Kava Beans",
        description: "Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc varius. Facilisis eget cras sit semper sit enim. Turpis aliquet at ac eu donec ut. Sagittis vestibulum at quis non massa netus.",

        image: chef2,
    },
    {
        id: 3,
        subtitle: "OUR TEAM",
        title: "Use the Tips & Recipes of Our Barista",
        description: "Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc varius. Facilisis eget cras sit semper sit enim. Turpis aliquet at ac eu donec ut. Sagittis vestibulum at quis non massa netus.",

        image: chef3,
    }
];


const AboutSection = () => {
    return (
        <section className="px-8 my-16 lg:max-w-5/6 mx-auto">
            {sections.map((item, i) => (
                <div key={item.id} className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0`}>
                    {/* we can do it with row reverse instead of order*/}
                    <div className={`max-w-3/4 flex flex-col items-start justify-center gap-4  ${i % 2 !== 0 ? 'md:order-2 md:mx-auto' : 'md:order-1'}`}>
                        <div className='relative flex text-sm lg:text-lg'>
                            {item.subtitle}<span className="absolute w-16 h-0.5 bg-[#ecaa77] bottom-0"></span>
                        </div>
                        <h4 className='font-bold lg:text-4xl'>{item.title}</h4>
                        <p className='text-sm lg:text-base text-[#797B78]'>{item.description}</p>
                        <Button color="bg-[#ecaa77] hover:brightness-120 md:p-2">Read More</Button>
                    </div>


                    <img src={item.image} alt="chef" className={`object-cover w-full ${i % 2 !== 0 ? 'md:order-1' : 'md:order-2'}`}/>
                </div>
            ))}
        </section>   
    );
};

export default AboutSection

