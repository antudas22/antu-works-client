import React, { useEffect, useState } from 'react';
import useTitle from '../../../hooks/useTitle';
import ServiceCard from './ServiceCard';

const AllServices = () => {
    useTitle('All Services')
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/allservices')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div className='mb-16'>
            <div className='text-center mb-14'>
            <h3 className='inline-block text-2xl font-bold text-muted border-b-4 border-sky-500'>ALL Services</h3>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-14 justify-items-center'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    >

                    </ServiceCard>)
                }
            </div>
        </div>
    );
};

export default AllServices;