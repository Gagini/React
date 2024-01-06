import '../assets/css/Register.css';
import { Link } from 'react-router-dom';

function Register(){

  return (
    <div className="register-container2">
      <div className='container2'>
      <form className="register-form2">
        <h2 className='heading'>Travelo</h2>
        <br></br>
        <h4>Register</h4>
        <br></br>
        <label htmlFor="firstName">First Name</label>
        <input className='infocollection2'
          type="text"
          id="firstName"
        />
        <label htmlFor="lastName">Last Name</label>
        <input className='infocollection2'
          type="text"
          id="lastName"
        />
        <label htmlFor="email">Email</label>
        <input className='infocollection2'
          type="email"
          id="email"
        />
        <label htmlFor="password">Password</label>
        <input className='infocollection2'
          type="password"
          id="password"
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input className='infocollection2'
          type="password"
          id="confirmPassword"
        />
        <Link to = '/Login'>
        <button type="button">
          Register
        </button></Link>
        <p>I'm already a member! <Link to="/Login">Sign In</Link></p>
      </form>
      <div className='picside'>
      </div>
      </div>
    </div>
  );
};

export default Register;
