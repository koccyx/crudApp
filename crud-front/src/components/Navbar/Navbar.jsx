import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

let Navbar = () => {
  return (
    <div className="container">
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div className="col-md-3 mb-2 mb-md-0">
        <Link className={styles.link} to={'/'}>SUPER-CRUD-APP</Link>
      </div>
      <div className="col-md-3 text-end">
        <Link to={'/add'}><button type="button" className="btn btn-primary">Create new user</button></Link>
      </div>
    </header>
  </div>
  );
};

export default Navbar;