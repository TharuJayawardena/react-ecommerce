import React,{useState} from 'react';
import "./Signup.css";

// import key from '././image/download9.jpg'
// import email from '././image/download9.jpg'

const Signup = () => {

    const [action, setAction] = useState("Sign Up");
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        password:"",
    });
    const [errors, setErrors] = useState({})
    const validate = () => {
        const newErrors = {};
        if (action === "Sign Up" && !formData.name.trim()) {
          newErrors.name = "Name is required";
        }
        if (!formData.email.trim()) {
          newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = "Enter a valid email address";
        }
        if (!formData.password.trim()) {
          newErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
          newErrors.password = "Password must be at least 6 characters long";
        }
        return newErrors;
      };

      const handleSubmit = () => {
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
        } else {
          setErrors({});
          alert(`${action} successful!`);
          // Reset form if needed
          setFormData({ name: "", email: "", password: "" });
        }
      };
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    

    return(
        <div className='container'>
              <div className='heading'>
                <div className='text'>
                  {action}
                </div>
                <div className='underline'></div>
              </div>
            <div className='inputs'>
                {action === "Login"?<div></div>: <div className='input'>
                 <img src="./image/person.png" alt="" /> 
                <input type="text" placeholder='Name' name="name" value={formData.name} onChange={handleChange} />    
              </div>}
              {action === "Login"?<div></div>:<div>
                {errors.name && <div className="error">{errors.name}</div>}
              </div>} 
            </div>
            <div className='inputs'>
              <div className='input'>
                <img src="./image/email.png" alt="" /> 
                <input type="email" placeholder='Email' name="email" value={formData.email} onChange={handleChange} />
              </div>
              {errors.email && <div className="error">{errors.email}</div>}
            </div>
            <div className='inputs'>
              <div className='input'>
                <img src="./image/password.png" alt="" /> 
                <input type="password" placeholder='Password' name='password' value={formData.password} onChange={handleChange} />
              </div>
              {errors.password && <div className="error">{errors.password}</div>}
              {action === "Login" && (
          <div className="forgot-password">
            Lost Password? <span>Click Here!</span>
          </div>
        )}
      </div>
      <div className="submit-container">
        <div
          className={`submit ${action === "Login" ? "gray" : ""}`}
          onClick={() => setAction("Sign Up")}
        >
          Sign Up
        </div>
        <div
          className={`submit ${action === "Sign Up" ? "gray" : ""}`}
          onClick={() => setAction("Login")}
        >
          Login
        </div>
      </div>
      <div className="submitForm" onClick={handleSubmit}>
        Submit
      </div>
    </div>
    )
}

export default Signup