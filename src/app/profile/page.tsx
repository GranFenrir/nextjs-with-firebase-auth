import {InputT} from "../../types/FormTypes";

const Profile = ({ type, name, placeholder, label }:InputT) => {
    return (
        <div>
            <h1>Welcome {name}</h1>
            <p>Here are your details:</p>
            <ul>
                <li>Email: {name}</li>
                <li>Phone: {name}</li>
                <li>Address: {name}</li>
            </ul>

            <p>Change your password</p>
            <form>
                <input type="password" placeholder="Enter your new password" />
                <input type="password" placeholder="Confirm your new password" />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Profile;