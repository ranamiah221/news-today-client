
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginPic from '../../assets/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const Login = () => {
  const {signIn}=useContext(AuthContext);
 const navigate= useNavigate();
 const location=useLocation();

 const form = location.state?.form?.pathname || '/';

 const handleLogin=event=>{
  event.preventDefault();
  const form= event.target;
  const email= form.email.value;
  const password= form.password.value;
 
   signIn(email,password)
   .then(result=>{
    const user= result.user;
    console.log(user);
    Swal.fire({
      title: "User Login Successful",
      showClass: {
        popup: `
          animate__animated
          
        `
      },
      hideClass: {
        popup: `
          animate__animated
          
        `
      }
      
    });
    navigate(form,{replace: true})
   })

 }

  
  return (
   <>
   <section>
        <Helmet>
                      <title>News Today | SignIn</title>
        </Helmet>
        </section>
    <div className="hero min-h-screen flex justify-between items-center px-16">
        <div className="w-1/2">
            <img src={loginPic} alt="" />
        </div>
        <div className="card shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
            <h2 className='text-2xl font-medium text-center mt-4'>Sign In</h2> 
          <form onSubmit={handleLogin} className="card-body">
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
   </>
  );
};

export default Login;
