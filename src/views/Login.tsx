import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import './Login.sass'

const Login = () => (
  <div className="login page">
    <div className="container">
      <div className="login__card">
        <Logo className="logo" />
        <form className="login__form">
          <h1>Sign-In</h1>
          <label htmlFor="email">Email or mobile phone number</label>
          <input type="text" id="email" />
          <button className="btn">Continue</button>
          <div className="login__legal">
            By continuing, you agree to Amazon's{' '}
            <a href="##">Conditions of Use</a> and{' '}
            <a href="##">Privacy Notice</a>.
          </div>
          <a href="##" className="login__help">
            Need help?
          </a>
        </form>
        <div className="login__sep">
          <span>New to Amazon?</span>
        </div>
        <Link to="/register">
          <button className="btn secondary">Create your Amazon account</button>
        </Link>
      </div>
    </div>
  </div>
)

export default Login
