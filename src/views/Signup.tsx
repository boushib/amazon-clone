import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo_black.svg'

import './Signup.scss'

const Signup: React.FC = () => {
  return (
    <div className="signup page">
      <div className="container">
        <div className="signup__card">
          <img src={Logo} alt="" className="logo" />
          <form className="signup__form">
            <h1>Create Account</h1>
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" />
            <label htmlFor="email">Email</label>
            <input type="text" id="email" />
            <label htmlFor="password">Password</label>
            <input type="text" id="password" />
            <label htmlFor="confirmPassword">Re-enter password</label>
            <input type="text" id="confirmPassword" />
            <button className="btn">Continue</button>
            <div className="signup__legal">
              By creating an account, you agree to Amazon's{' '}
              <a href="#">Conditions of Use</a> and{' '}
              <a href="#">Privacy Notice</a>.
            </div>
            <hr />
            <div className="signup__link">
              Already have an account? <Link to="/login">Sign-in</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
