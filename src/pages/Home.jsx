import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="h-[calc(100vh-64px)] lg:h-[calc(100vh-68px)] flex flex-col gap-3 justify-center items-center">
            <p className="text-4xl font-extrabold">This Is Home</p>
            <p>click <Link to="/login" className="font-bold text-primary">Log In</Link> or <Link to="/signup" className="font-bold text-secondary">Sign Up</Link> to see the assignment task</p>
        </div>
    );
};

export default Home;