import { Link } from 'react-router-dom'

const Login = () => (
  <div className="auth page">
    <div className="container">
      <div className="auth__card">
        <form className="auth__form">
          <h1 className="auth__title">Login</h1>
          <label htmlFor="email">Email or mobile phone number</label>
          <input type="text" placeholder="Email Address" id="email" />
          <button className="btn">Continue</button>
          <div className="auth__legal">
            By continuing, you agree to Amazon's{' '}
            <a href="##">Conditions of Use</a> and{' '}
            <a href="##">Privacy Notice</a>.
          </div>
          <a href="##" className="auth__help">
            Need help?
          </a>
        </form>
        <div className="auth__sep">
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
