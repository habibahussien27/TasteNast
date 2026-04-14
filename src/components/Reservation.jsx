import React from 'react'
import Button from './Button'

const Reservation = () => {
    return (
        <section className='relative w-full h-[70vh] overflow-hidden flex items-center justify-center'>

            <div className="absolute bg-[url('/src/assets/reservation.png')] bg-center bg-cover inset-0 bg-no-repeat"></div>

            <div className='absolute z-10 w-full mx-auto flex flex-col md:flex-row justify-around items-center gap-12'>
                {/* left side */}
                <div className='flex flex-col gap-4'>
                    <div className='relative flex text-sm lg:text-lg'>Reservation
                        <span className="absolute w-16 h-0.5 bg-[#ecaa77] bottom-0"></span>
                    </div>

                    <h3 className='font-bold text-xl lg:text-4xl leading-relaxed'>Working Hours</h3>

                    <div className='flex justify-center items-center gap-4'>
                        <Button color="bg-[#ecaa77] hover:brightness-120 md:p-2 ">Book A Table</Button>
                        <Button color="bg-white/10 backdrop-blur-md border border-white/20 p-8">Contact us</Button>
                    </div>
                </div>

                {/* right side */}
                <div  className='bg-[#121A1D] py-8 px-16 md:p-16 flex flex-col text-center gap-10 border-l-4 border-[#ecaa77] '>
                    <div>
                        <h4 className='font-bold mb-2 lg:text-lg'>Sunday to Tuesday</h4>
                        <h4 className='text-sm lg:text-lg'>09:00 AM - 10.00 PM</h4>
                    </div>
                    <div>
                        <h4 className='font-bold mb-2 lg:text-lg'>Sunday to Tuesday</h4>
                        <h4 className='text-sm lg:text-lg' >09:00 AM - 10.00 PM</h4>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Reservation