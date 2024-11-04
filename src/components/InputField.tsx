import { InputT } from "../types/FormTypes";

const InputField = ({ type, name, placeholder, label, register, error }:InputT) => {
    return (
        <div className="mb-4 mx-auto">
            <label htmlFor={name} className="block text-black font-semibold">{label}</label>
            <input 
            {...register(name)}
            type={type} 
            name={name} 
            placeholder={placeholder} 
            id={'field_${name}'} 
            className="w-full p-2 border text-black rounded mt-1" />
            {
                error && <span className="text-red-500 text-xs mt-1">{error.message}</span>
            }
        </div>
    );
}
 
export default InputField;