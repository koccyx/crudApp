import React from 'react';
import { Link } from 'react-router-dom';


let User = (props) => {
  return (
    <tr>
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td>{props.username}</td>
        <td>{props.email}</td>
        <td><Link to={`/edit/${props.id}`} className='btn btn-outline-primary mx-2'>Edit</Link></td>
        <td><button className='btn btn-danger mx-2' onClick={() => props.onDelete(props.id)}>Delete</button></td>
    </tr>
  );
};

export default User;