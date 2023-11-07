import React from 'react';

const FeaturedJob = ({ eachJob }) => {
    const { id, logo, company_name, remote_or_onsite, location, job_type, salary, job_title } = eachJob

    return (

        <div className='featured-job-box p-10'>
            <img src={logo} alt="" />
            <h1 className='font-extrabold text-xl text-slate-600'>{job_title}</h1>
            <h2 className='font-extrabold text-lg text-slate-300'>{company_name}</h2>
            <div className='flex gap-4 items-center pt-3 '>
                <div className='job-type-box'>{remote_or_onsite}</div>
                <div className='job-type-box'>{job_type}</div>
            </div>
            <div className='flex items-center gap-4 pt-3 text-slate-400 '>
                <p>{location}</p>
                <p>{salary}</p>
            </div>
            <button className='btn-primary'>View Details</button>

        </div>


    );
};

export default FeaturedJob;