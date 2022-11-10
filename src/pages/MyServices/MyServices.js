import React from 'react';
import useTitle from '../../hooks/useTitle';

const MyServices = () => {
    useTitle('My Services')
    return (
        <div>
            <div className="text-center mb-14">
        <h3 className="inline-block text-2xl font-bold text-muted border-b-4 border-sky-500">
          My Services
        </h3>
      </div>
        </div>
    );
};

export default MyServices;