import Error404 from "../../components/Error404/Error404";
import ErrorBanner from "../../components/ErrorBanner/ErrorBanner";

const ErrorPage = () => {
    return (
        <div>
            <ErrorBanner/>
            <Error404/>
        </div>
    );
};

export default ErrorPage;