import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [cpass, setCPass] = useState('');
    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [pno, setPno] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="first name">First Name</label>
            <input value={fname} name="first name" onChange={(e) => setFName(e.target.value)} id="first name" />
            <label htmlFor="last name">Last Name</label>
            <input value={lname} name="last name" onChange={(e) => setLName(e.target.value)} id="last name" />
            <label htmlFor="email">email id</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" id="email" name="email" />
            <label htmlFor="email">phone no</label>
            <input value={pno} onChange={(e) => setPno(e.target.value)} id="pno" name="Phone No" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" id="password" name="password" />
            <label htmlFor="password">confirm password</label>
            <input value={cpass} onChange={(e) => setCPass(e.target.value)} type="password" id="cpassword" name="cpassword" />
            <button type="submit">Create Account</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? click here to login.</button>
    </div>
    )
}
