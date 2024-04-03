import { Outlet } from "react-router-dom";
import FormHeader from "../components/FormHeader";

const FormPage = () => {
    return (
        <>
            <div className="my-10">
                <FormHeader></FormHeader>
            </div>

            <Outlet></Outlet>
        </>
    );
};

export default FormPage;