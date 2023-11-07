import React from 'react';
import userImg from '../../assets/images/user.png'
import accountAndFinnanceIcon from '../../assets/icons/accounts.png'
import creativeDegin from '../../assets/icons/creative.png'
import marketingSales from '../../assets/icons/marketing.png'
import engineeringJob from '../../assets/icons/chip.png'
import { useLoaderData } from 'react-router-dom';
import FeaturedJob from './FeaturedJob';




const Home = () => {

    const featuredJobs = useLoaderData();
    console.log(featuredJobs)

    return (
        <>

            <section className='pl-80 pr-40 bg-slate-100'>
                <div className='grid grid-cols-2 gap-4'>
                    <div className=''>
                        <h1 className='banner-text'>One Step <br /> Closer To Your <br /> <span className='text-color'> Dream Job</span></h1>
                        <p className='mt-3 mb-4 text-zinc-300'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finis</p>

                        <button className='btn-primary'>Get Started</button>
                    </div>
                    <div className=''>
                        <img className='w-96 h-96' src={userImg} alt="" />
                    </div>
                </div>

            </section>

            <section className='pl-60 pr-60 pt-32'>
                <div className='text-center'>
                    <h1 className='text-5xl font-extrabold pb-3'>Job Category List</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, adipisci.</p>
                </div>
                <div className='category-boxes pt-10 pb-10 grid grid-cols-4 gap-4'>
                    <div className='category-box'>
                        <img src={accountAndFinnanceIcon} alt="" />
                        <h4 className='category-text'>Accounting and FInance</h4>
                        <p>100+ Available Jobs</p>
                    </div>
                    <div className='category-box'>
                        <img src={creativeDegin} alt="" />
                        <h4 className='category-text'>Accounting and FInance</h4>
                        <p>100+ Available Jobs</p>
                    </div>
                    <div className='category-box'>
                        <img src={marketingSales} alt="" />
                        <h4 className='category-text'>Accounting and FInance</h4>
                        <p>100+ Available Jobs</p>
                    </div>
                    <div className='category-box'>
                        <img src={engineeringJob} alt="" />
                        <h4 className='category-text'>Accounting and FInance</h4>
                        <p>100+ Available Jobs</p>
                    </div>
                </div>
            </section>

            <div className='pl-60 pr-60 pt-32'>
                <div className='text-center'>
                    <h1 className='text-5xl font-extrabold pb-2'>Featured Jobs  </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis!</p>
                </div>

                <div className='featured-job-container'>
                    {
                        featuredJobs.map((eachJob) => (
                            <FeaturedJob
                                key={eachJob.id}
                                eachJob={eachJob}
                            ></FeaturedJob>
                        ))
                    }
                </div>

                <div className='text-center'>  <button className='btn-primary'>See more Jobs</button></div>
            </div>
        </>
    );
};

export default Home;