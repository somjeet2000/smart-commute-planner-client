import React from 'react';
import './Navbar.css';
// import Logo from '../../logo/Logo.png';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav
        className='navbar navbar-expand-lg bg-body-tertiary navbar bg-dark border-bottom border-body'
        data-bs-theme='dark'
      >
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/'>
            CommuteWise
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link className='nav-link active' aria-current='page' to='/'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/dashboard'>
                  Dashboard
                </Link>
              </li>
            </ul>
            <div className='d-grid gap-2 d-lg-flex justify-content-md-center'>
              <Link to='/login'>
                <button type='button' class='btn btn-dark me-md-2'>
                  Log in
                </button>
              </Link>
              <Link to='/signup'>
                <button type='button' class='btn btn-light'>
                  Sign up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
