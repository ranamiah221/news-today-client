
import { Link } from 'react-router-dom';
import loginPic from '../../assets/login.svg'

const Login = () => {
  return (
    <div className="hero min-h-screen flex justify-between items-center px-16">
        <div className="w-1/2">
            <img src={loginPic} alt="" />
        </div>
        <div className="card shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
            <h2 className='text-2xl font-medium text-center mt-4'>Sign In</h2> 
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name='email'
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name='password'
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Sign In" />
            </div>
            <div className='text-center'>
            <p className='text-base font-medium'> Sign In with or</p>
            <div>
                {/* social login.... */}
            </div>
            <p className='text-base font-medium'>New here ? Please <Link to='/register'><span className='text-blue-500'>Sign Up</span></Link></p>
            </div>
            
          </form>
        </div>
     
    </div>
  );
};

export default Login;
