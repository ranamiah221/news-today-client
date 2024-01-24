import { Link, useNavigate } from "react-router-dom";
import registerPic from "../../assets/login.svg";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../hook/useAxiosPublic";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hook/useAuth";

const Register = () => {
  const {googleSignIn}=useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const handleGoogleSignIn=()=>{
    googleSignIn()
    .then(result=>{
      console.log(result.user);
      const userInfo={
        name: result.user?.displayName,
        email: result.user?.email,
      }
      axiosPublic.post('/users',userInfo)
      .then(res=>{
        console.log(res.data)
        navigate('/');
      })
    })
  }

  const onSubmit = (data) => {
    createUser(data.email, data.password).then(() => {
      updateUserProfile(data.name, data.photoUrl)
        .then(() => {
          const userInfo = {
            name: data.name,
            email: data.email,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            console.log("new user", res.data);
            if (res.data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Sign Up successful",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/login");
              reset();
            }
          });
        })
        .catch((error) => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${error}`,
            showConfirmButton: false,
            timer: 1500,
          });
        });
    });
  };
  return (
    <>
      <section>
        <Helmet>
          <title>News Today | SignUp</title>
        </Helmet>
      </section>
      <div className="hero min-h-screen flex justify-between items-center px-16">
        <div className="card shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
          <h2 className="text-2xl font-medium text-center mt-4">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                {...register("name")}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                placeholder="photo url"
                name="photoUrl"
                {...register("photoUrl")}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                {...register("email")}
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
                name="password"
                {...register("password")}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Sign Up"
              />
            </div>
            <div className="text-center">
              <p className="text-base font-medium"> Sign up with or</p>
              <div>
                <button onClick={handleGoogleSignIn} className="btn">
                  Google
                  <FaGoogle></FaGoogle>
                </button>
              </div>
              <p className="text-base font-medium">
                Already Account ? Please{" "}
                <Link to="/login">
                  <span className="text-blue-500">Sign In</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
        <div className="w-1/2">
          <img src={registerPic} alt="" />
        </div>
      </div>
    </>
  );
};

export default Register;
