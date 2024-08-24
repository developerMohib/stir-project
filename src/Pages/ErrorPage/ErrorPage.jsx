import Error404 from "./Error404/Error404";
import ErrorBanner from "./ErrorBanner/ErrorBanner";

const ErrorPage = () => {
    return (
        <div>
            <ErrorBanner/>
            <Error404 />
        </div>
    );
};

export default ErrorPage;