"use client";
import InputField from '@/components/InputField';
import { LOGIN_ROUTE } from "@/constants/routes";
import SubmitButton from "../../components/Button";
import Link from "next/link";
import { registerValidation } from '@/validationSchema/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/services/firebase';
import { useRouter } from 'next/navigation';

const Register = () => {
    const router = useRouter();
    const { handleSubmit, register, formState: { errors }, reset } = registerValidation();
    
    const submitForm = async(values:any) => {
        console.log("form values", values);
        createUserWithEmailAndPassword(auth, values.email, values.password).then((response) => {
            alert("User created successfully");
            reset();
            router.push(LOGIN_ROUTE);
        }
        ).catch((error) => {
            console.log("firebase error", error);
        });
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-br from-yellow-400 via-blue-300 to-purple-400">
            <div className="w-96 bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-2xl font-semibold text-center">Register</h2>
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
                        <InputField
                            register={register}
                            error={errors.confPassword}
                            type="password"
                            name="confPassword"
                            placeholder="Confirm Password here"
                            label="Confirm Password"
                        />
                    </div>
                    
                    <SubmitButton label='Submit' />
                </form>
                <p className="mt-4 text-center text-black">
                Already have an account? <Link className="text-blue-500" href={LOGIN_ROUTE}>Login!</Link>
                </p>
            </div>
        </div>
    );
}

export default Register;