import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../assets/banner/tax-lawyer.jpg'
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <div className=''>
                <img width='100%' src={banner} alt="" />
            </div>
            <div className='flex my-20 justify-around'>
                <div className=''>
                    <h1 className='text-4xl font-bold'>The hardest thing to<br/> understand in the world<br/> is the income tax.</h1>
                    <h4 className='text-end text-sm'>- Albert Einstein</h4>
                </div>
                <div className=''> 
                    <p className='mb-4'>Find a comfortable place to work or other activities<br/> comfortably with me.</p>
                    <button className="btn btn-success text-white">Get Appointment</button>
                </div>
            </div>
            <Services />
            <div className='flex justify-center'>
            <Link to='/services'><button className="btn btn-success my-10">Show All</button></Link>
            </div>
        </div>
    );
};

export default Home;