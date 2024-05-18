import { Link } from "react-router-dom";
import "../css/not-found-page.css"

const NotFoundPage = () => {
    return (
        <section class="page-404">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="col-sm-10 col-sm-offset-1 text-center">
                            <div class="four-zero-four-bg">
                                <h1 class="text-center">404</h1>
                            </div>

                            <div class="contant-box-404">
                                <p>The page you are looking for not avaible!</p>
                                <Link to="/" className="link-404">Go to Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};


export default NotFoundPage;