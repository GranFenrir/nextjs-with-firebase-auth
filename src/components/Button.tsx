import { SubmitButtonT } from "@/types/ButtonTypes";

const SubmitButton = ({ label }: SubmitButtonT) => {
    return (
        <div className="mb-3 flex justify-center mt-6">
            <button className="bg-pink-700 text-white rounded-md p-3 hover:bg-pink-800 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50">
                {label}
            </button>
        </div>
    );
};

export default SubmitButton;