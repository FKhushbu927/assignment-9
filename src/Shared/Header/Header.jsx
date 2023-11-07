import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (

        
        <div className='my-container'>

            <div className='flex items-center justify-between'>
                <img src="../../assets/images/logo.jpg" alt="" />
                    <Link to='/'
                    className='inline-flex items-center'>
                         <div className='flex items-center justify-center w-12 h-12'> 
                            
                               <span className='font-bold text-3xl'>BDCareer</span>
                          </div> 
                    </Link>

                <ul className='lg:flex items-center hidden space-x-12 text-xl font-medium text-sky-500'>
                    <li>
                        <NavLink to='/'
                          aria-label='Home'
                          title='Home'
                          className='l'
                        
                        >
                              Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/statistics'
                         aria-label='statistics'
                         title='statistics'
                         className=''
                        >
                           Statistics
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/blog'
                         aria-label='blog'
                         title='blog'
                         className=''> Blog

                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/applied'
                         aria-label='blog'
                         title='blog'
                         className=''>
                           Applied Jobs
                        </NavLink>
                    </li>
                </ul>
                <Link to="/apply-now"> <button className='btn-primary'>Start Apply</button></Link>




            </div>
        </div>
    );
};

export default Header;