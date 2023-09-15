import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { LINK } from '../MainPage/MainPage.jsx';
import style from './AddUser.module.css';

let EditUser = () => {
  let navigate = useNavigate();

  const {id} = useParams();

  let initialState = {
    name: '',
    username: '',
    email: '',
  };

  const [user, setUser] = useState(initialState);
  
  const onInputChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      axios.put(`http://localhost:8080/user/${id}`, user);
    } catch (error) {
      console.log('Invalid call');
    }
    navigate('/');
  };

  const loadUser = async () => {
    const response = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(response.data);
    console.log(response.data);
  };

  useEffect(() => { loadUser();}, []);

  return (
    <form 
      className={style.main} 
      onSubmit={(e) => onSubmit(e)}
      >
    <h1 className="h3 mb-3 fw-normal">Edit user data</h1>
      <div className={`${style.inputsContainer} form-container container`}>
        <label htmlFor="form-floating">Name</label>
        <div className="form-floating">
          <input value={user.name} name="name" onChange={onInputChange} type="text" className={`form-control ${style.input}`} id="floatingInput" placeholder="name@example.com"/>
        </div>
        <label htmlFor="form-floating">Username</label>
        <div className="form-floating">
          <input value={user.username} name="username" onChange={onInputChange} type="text" className={`form-control ${style.input}`} id="floatingInput" placeholder="name@example.com"/>
        </div>
        <label htmlFor="form-floating">Email address</label>
        <div className="form-floating">
          <input value={user.email} name="email" onChange={onInputChange} type="email" className={`form-control ${style.input}`} id="floatingPassword" placeholder="Password"/>
        </div>
        <button className="btn btn-primary w-100 py-2" type="submit">Edit user</button>
      </div>
    </form>
  );
};

export default EditUser;