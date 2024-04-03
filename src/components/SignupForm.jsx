import { Link } from "react-router-dom";
import PropTypes from "prop-types"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignupForm = ({ countries }) => {
    const notify = () => toast.success("Signed up successfully");


    return (
        <form className="card-body">
            <div className="form-control">
                <input type="text" placeholder="First Name" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <input type="text" placeholder="Last Name" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <input type="email" placeholder="Email Address" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <input type="number" placeholder="Mobile No" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <input type="Password" placeholder="Password" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <select name="" id="" className="h-12 rounded-lg bg-white px-2 text-gray-400 border-2">
                    <option value="">Choose Your Country</option>
                    {
                        countries.map((country, index) => <option key={index}>{country.name.common}</option>)
                    }
                </select>
            </div>
            <div className="form-control mt-6">
                <button className="btn btn-primary" onClick={notify}>Sign Up</button>
            </div>

            <p>Already have an account? <Link to="/login" className="text-secondary">Login</Link> here</p>
            <ToastContainer></ToastContainer>
        </form>
    );
};

SignupForm.propTypes = {
    countries: PropTypes.array
}


export default SignupForm;