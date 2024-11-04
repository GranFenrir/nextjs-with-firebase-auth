"use client";
import Link from 'next/link';
import InputField from '@/components/InputField';
import SubmitButton from '../../components/Button';
import { REGISTER_ROUTE } from '@/constants/routes';
import { loginValidation } from '@/validationSchema/auth';

const Login = () => {

    const { handleSubmit, register, formState: { errors } } = loginValidation();
    
    const submitForm = (values:object) => {
        console.log("form values", values);
    }
    return (


        <div className="flex justify-center items-center h-screen bg-gradient-to-br from-yellow-400 via-blue-300  to-purple-400">
            <div className="w-96 bg-white p-6 rounded-xl shadow-md ">
                <h2 className="text-2xl font-semibold text-center">Login</h2>
                <form onSubmit={handleSubmit(submitForm)} className="mt-6 col">
                    <div className="mb-4 mx-auto">
                        <InputField 
                            register={register}
                            error={errors.email}
                            type="text" 
                            name="email" 
                            placeholder="Email here" 
                            label="Email" 
                        />
                        <InputField
                            register={register}
                            error={errors.password}
                            type="password" 
                            name="password"
                            placeholder="Password here"
                            label="Password"
                        />
                    </div>
                    
                    <SubmitButton label='Submit' />
                </form>
                <p className="mt-4 text-center text-black">
                    Don't have an account? <Link className="text-blue-500" href={REGISTER_ROUTE}>Register here!</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;