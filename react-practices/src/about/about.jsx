import { Link } from "react-router-dom";

function About() {
    return (
        <>
            <h1 style={{color: "white", background: "darkred"}} > ABOUT PAGE </h1>
            <Link to="/"> Back To Home </Link>
        </>
    )
}

export default About;