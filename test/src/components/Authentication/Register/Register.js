import React, {useState} from "react";
import register from "../../../Service/Auth/Authentication"
import { Link } from "react-router-dom";


const Register = () => {

    // const [values, setValues] = useState({
    //     username: "",
    //     email: "",
    //     fullname: "",
    //     role: "",
    //     phone: "",
    //     password: "",
    //     repeated_password: "",
    //   });
    
    //   const [errors, setErrors] = useState({});
    
    //   const [submitted, setSubmitted] = useState(false);
    
    //   const [valid, setValid] = useState(false);
    
    //   const handleUsename = (e) => {
    //     setValues({ ...values, username: e.target.value });
    //   };
    
    //   const handleEmail = (e) => {
    //     setValues({ ...values, email: e.target.value });
    //   };
    
    //   const handleRole = (e) => {
    //     setValues({ ...values, role: e.target.value });
    //   };
    
    //   const handlPhone = (e) => {
    //     setValues({ ...values, phone: e.target.value });
    //   };

    //   const handlFullname = (e) => {
    //     setValues({ ...values, fullname: e.target.value });
    //   };
    
    //   const handlePassword = (e) => {
    //     setValues({ ...values, password: e.target.value });
    //   };
    
    //   const handleRepeatedPassword = (e) => {
    //     setValues({ ...values, repeated_password: e.target.value });
    //   };
    
    //   const handleErrors = (errors) => {
    //     setErrors({ ...errors });
    //   };
    
    //   const handleSubmit = (e) => {
    //     let errors = {};
    //     e.preventDefault();
    //     if (
    //       values.username &&
    //       values.email &&
    //       values.password &&
    //       values.repeated_password
    //     ) {
    //       register(
    //         values.username,
    //         values.email,
    //         values.fullname,
    //         values.role,
    //         values.phone,
    //         values.password,
    //         values.repeated_password
    //       ).then((response) => {
    //         console.log(response.data);
    //         if (response.data.errorsObject) {
    //           errors = {
    //             username: response.data.errorsObject.username,
    //             email: response.data.errorsObject.email,
    //             fullname: response.data.errorsObject.fullname,
    //             role: response.data.errorsObject.role,
    //             phone: response.data.errorsObject.phone,
    //             password: response.data.errorsObject.password,
    //             repeated_password: response.data.errorsObject.repeated_password,
    //           };
    //           handleErrors(errors);
    //           setValid(true);
    //           values.username = "";
    //           values.email = "";
    //           values.fullname = "";
    //           values.phone = "";
    //           values.role = "";
    //           values.password = "";
    //           values.repeated_password = "";
    //         } else {
    //           window.location = "/";
    //         }
    //       });
    //     }
    //     setSubmitted(true);
    //   };

          // States for registration
            const [username, setUsername] = useState('');
            const [fullname, setFullname] =  useState('');
            const [phone, setPhone] = useState('');
            const [email, setEmail] = useState('');
            const [password, setPassword] = useState('');
            const [repeate_password, setRepeate_password] = useState('');

        
        
        // States for checking the errors
            const [submitted, setSubmitted] = useState(false);
            const [error, setError] = useState(false);

        // Handling the name change
            const handleUsename = (e) => {
                setUsername(e.target.value);
                setSubmitted(false);
            };

        // Handling the name change
            const handlFullname = (e) => {
                setFullname(e.target.value);
                setSubmitted(false);
            };

        // Handling the email change
            const handleEmail = (e) => {
                setEmail(e.target.value);
                setSubmitted(false);
            };

         // Handling the email change
            const handlPhone = (e) => {
                setPhone(e.target.value);
                setSubmitted(false);
            };    
 
        // Handling the password change
            const handlePassword = (e) => {
                setPassword(e.target.value);
                setSubmitted(false);
            };

         // Handling the password change
            const handleRepeatedPassword = (e) => {
                setRepeate_password(e.target.value);
                setSubmitted(false);
            };

        // Handling the form submission
            const handleSubmit = (e) => {
                e.preventDefault();
                if (username === '' || fullname === '' ||email === '' ||  phone === '' || password === '' || repeate_password === '') {
                setError(true);
                } else {
                    console.log(email);
                    register(
                        username,
                        fullname,
                        email,
                        phone,
                        password,
                        repeate_password
                    
                    ).then(res =>{
                    console.log(res);
                    })
                setSubmitted(true);
                setError(false);
                }
            };    

        
        // Showing success message
            const successMessage = () => {
                return (
                <div
                    className="success"
                    style={{
                    display: submitted ? '' : 'none',
                    }}>
                    <h1>User {username} successfully registered!!</h1>
                </div>
                );
            };

        
        // Showing error message if error is true
            const errorMessage = () => {
                return (
                <div
                    className="error"
                    style={{
                    display: error ? '' : 'none',
                    }}>
                    <h1>Please enter all the fields</h1>
                </div>
                );
            };    





  return (
    <div>
    <div className="auth-wrapper">
    <div className="auth-content">
        <div className="auth-bg">
            <span className="r"></span>
            <span className="r s"></span>
            <span className="r s"></span>
            <span className="r"></span>
        </div>
        {/* Calling to the methods */}
      
         
        
      
        <form >
        <span>{errorMessage()}
        {successMessage()}</span>
        <div className="card">
            <div className="card-body text-center">
                <div className="mb-4">
                    <i className="feather icon-user-plus auth-icon"></i>
                </div>
                <h3 className="mb-4">Sign up</h3>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Username"
                    onChange={handleUsename}
                    value={username}
                    />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Full Name"
                     onChange={handlFullname}
                    value={fullname}/>
                </div>
                <div className="input-group mb-3">
                    <input type="email" className="form-control" placeholder="Email"
                     onChange={handleEmail}
                    value={email}
                    />
                </div>
                <div className="input-group mb-3">
                    <input type="number" className="form-control" placeholder="Phone"
                     onChange={handlPhone}
                    value={phone}
                    />
                </div>
                <div className="input-group mb-4">
                    <input type="password" className="form-control" placeholder="password"
                     onChange={handlePassword}
                    value={password}/>
                </div>
                <div className="input-group mb-4">
                    <input type="password" className="form-control" placeholder="password"
                     onChange={handleRepeatedPassword}
                    value={repeate_password}/>
                </div>
                
                <div className="form-group text-left">
                    <div className="checkbox checkbox-fill d-inline">
                        <input type="checkbox" name="checkbox-fill-2" id="checkbox-fill-2"/>
                        <label for="checkbox-fill-2" className="cr">Send me the <a href="#!"> Newsletter</a> weekly.</label>
                    </div>
                </div>
                <button onClick={handleSubmit} className="btn btn-primary shadow-2 mb-4">Sign up</button>
                <p className="mb-0 text-muted">Allready have an account?<Link to="/login" id="to_login">
                  Login now
                </Link></p>
            </div>
        </div>
        </form>
    </div>
</div>
    </div>
  );
}

export default Register;
