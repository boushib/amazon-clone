import Logo from '../assets/images/logo_black.svg'

import './Login.scss'

const Login: React.FC = () => {
  return (
    <div className="login page">
      <div className="container">
        <div className="login__card">
          <img src={Logo} alt="" className="logo" />
          <form className="login__form">
            <h1>Sign-In</h1>
            <label htmlFor="email">Email or mobile phone number</label>
            <input type="text" id="email" />
            <button className="btn">Continue</button>
            <div className="login__legal">
              By continuing, you agree to Amazon's{' '}
              <a href="#">Conditions of Use</a>
              and
              <a href="#">Privacy Notice</a>.
            </div>
            <a className="login__help">Need help?</a>
          </form>
          <div className="login__sep">
            <span>New to Amazon?</span>
          </div>
          <button className="btn secondary">Create your Amazon account</button>
        </div>
      </div>
    </div>
  )
}

export default Login
