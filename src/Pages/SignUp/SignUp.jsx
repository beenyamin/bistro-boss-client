import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SocialLogin from "../../Components/SocailLogin/SocialLogin";


const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        createUser(data.email, data.password)
        
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        //create user entry in the database
                        const userinfo = {
                            name: data.name,
                            email: data.email
                        }

            axiosPublic.post('/users', userinfo)
                .then(res => {
                    if (res.data.insertedId) {
                        console.log('user added to the database');
                        reset();
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your work has been saved",
                            showConfirmButton: false,
                            timer: 1500
                        });

                        navigate('/')
                    }
                })

                    })

                    .catch(error => console.log(error));

            })
    }

    return (

        <>
            <Helmet>
                <title>Bistro Boss | Sign UP</title>
            </Helmet>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name"  {...register("name", { required: true })} name="name" placeholder="Your Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-400"> Name is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="name"  {...register("photoURL", { required: true })} placeholder="Your Photo" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-400"> PhotoURL is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-400"> Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password",
                                    {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/

                                    })} name="password" placeholder="password" className="input input-bordered" />

                                {errors.password?.type === "required" && (
                                    <p className="text-red-500">Password is required</p>
                                )}

                                {errors.password?.type === "minLength" && (
                                    <p className="text-red-500"> PassWord Must be  6 Characters</p>
                                )}

                                {errors.password?.type === "maxLength" && (
                                    <p className="text-red-500"> PassWord Must be less then 20 Characters</p>
                                )}

                                {errors.password?.type === "pattern" && (
                                    <p className="text-red-500"> PassWord Must have one Uppercase one Lowercase One number one Special Characters</p>
                                )}


                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-primary" value='Sign Up' />
                            </div>
                        </form>

                        <p className="px-6"><small>Already Have an Account? <Link className="underline text-red-400" to={'/login'}>Login</Link></small></p>
                        <SocialLogin></SocialLogin>

                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;