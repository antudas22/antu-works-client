import React from 'react';
import banner1 from '../../../assets/banner/banner1.jpg'
import banner2 from '../../../assets/banner/banner2.jpg'

const Home = () => {
    return (
        <div>
            <div className='flex justify-between'>
                <img width='635px' src={banner1} alt="" />
                <img width='635px' src={banner2} alt="" />
            </div>
            <div className='flex my-20'>
                <div className='ml-8'>
                    <h1 className='text-4xl font-bold'>Alone we can do so little,<br/> together we can do so much.</h1>
                </div>
                <div className='ml-36'> 
                    <p className='mb-4'>Find a comfortable place to work or other activities<br/> comfortably at our place</p>
                    <button className="btn btn-success text-white">Get Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Home;