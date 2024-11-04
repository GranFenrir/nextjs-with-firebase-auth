import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const loginSchema = yup.object({
    email: yup.string().email("Please enter valid email").required("Please fill email"),
    password: yup.string().required("Please fill password").min(6, "Password must be at least 6 characters"),
    });

export const loginValidation = () => useForm({
        resolver: yupResolver(loginSchema),
    });

    const registerSchema = yup.object({
        email: yup.string().email("Please enter a valid email").required("Please fill email"),
        password: yup.string().required("Please fill password").min(6, "Password must be at least 6 characters"),
        confPassword: yup
            .string()
            .required("Please fill confirm password")
            .min(6, "Password must be at least 6 characters")
            .oneOf([yup.ref('password')], 'Passwords must match')
    });
    

export const registerValidation = () => useForm({
        resolver: yupResolver(registerSchema),
    });