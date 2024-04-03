import { Link } from "react-router-dom";

const LoginForm = () => {
    return (
        <form className="card-body text-black">
            <div className="form-control">
                <input type="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <input type="password" placeholder="password" className="input input-bordered" required />
            </div>
            <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
            </div>

            <p>Dont have any account? <Link to="/signup" className="text-secondary">Sign Up</Link> here</p>
        </form>
    );
};

export default LoginForm;