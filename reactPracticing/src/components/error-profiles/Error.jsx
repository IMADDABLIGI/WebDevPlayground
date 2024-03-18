import { Link } from "react-router-dom";

function Error() {
    return (
        <>
            <h1 style={{color: "white", background: "darkred"}} > Error PAGE </h1>
            <Link to="/"> Back To Home </Link>
        </>
    )
}

export default Error;