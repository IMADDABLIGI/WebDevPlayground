import { useParams } from "react-router-dom";

function Profile(){

const params = useParams();
console.log(params);
    return (
        <>
            <h1> Profile Page {params.profileId} </h1>
        </>
    )
}

export default Profile;