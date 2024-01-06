import '../assets/css/Login.css';
// import pic from '';
import { Link } from 'react-router-dom';

function Login(){
  return (
    <div className="login-container1">
      <div className='container1'>
      <form className="login-form1">
        
        <h2 className='heading'>Travelo</h2>
        <br></br>
        <h4>Login</h4>
        <br></br>
        <label className='label1'htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
        />
        <br />
        <Link to="/">Forgot Password?</Link>
        <Link to="/">
        <button type="button" >
          Login
        </button>
        </Link>
        <p>New customer? <Link to="/Register">Create your account</Link></p>
      </form>
      {/* <div>
        <img src={pic} alt="" />
      </div> */}
      </div>
    </div>
  );
};

export default Login;
