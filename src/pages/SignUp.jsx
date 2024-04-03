import { useLoaderData } from "react-router-dom";
import SignupForm from "../components/SignupForm";

const SignUp = () => {

    const allCountries = useLoaderData();
    // console.log(allCountries)

    return (
        <div className='flex flex-col-reverse lg:flex-row gap-4 w-full lg:w-4/5 mx-auto'>
            <div className='w-full lg:w-1/2 bg-white'>
                <h2 className="font-bold text-2xl md:text-3xl p-2 lg:p-0">Some Other Ways to contact with us</h2>

                <div className="space-y-3 my-3">
                    <div>
                        <p className="font-semibold">Speak with the sales:</p>
                        <p>01234 233 515</p>
                    </div>

                    <div>
                        <p className="font-semibold">Need help with existing account?</p>
                        <a href="http://aeonaxy.org" target="_blank" rel="noopener noreferrer">Visit our Support Center</a>
                    </div>

                    <div>
                        <p className="font-semibold">Email Us:</p>
                        <p>aeonaxy@email.com</p>
                    </div>
                </div>
            </div>
            <div className='w-full lg:w-1/2 bg-white rounded-xl -mt-0 lg:-mt-32 shadow-lg'>
                <SignupForm countries={allCountries}></SignupForm>
            </div>
        </div>
    );
};

export default SignUp;