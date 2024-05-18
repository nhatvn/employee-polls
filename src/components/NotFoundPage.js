import { Link } from "react-router-dom";
import "../css/not-found-page.css"

const NotFoundPage = () => {
    return (
        <div className="center">
            <div className="four-zero-four-bg">
                <h1 className="mb-0">404</h1>
            </div>
            <div>
                <p>The page you are looking for not avaible!</p>
                <Link to="/" className="btn btn-success">Go to Home</Link>
            </div>
        </div>
    )
};


export default NotFoundPage;