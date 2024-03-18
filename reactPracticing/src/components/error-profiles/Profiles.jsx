import { NavLink } from "react-router-dom";
import "./Profiles.css"

function Profiles()
{
    const pros= [1,2,3,4]

    return (
        <div className="profilesPage">
            { pros.map((profile) => {
                return ( <p key={profile}>
                    <NavLink className={'links'} key={profile} 
                        to={`/profiles/${profile}`} > profile N: {profile} 
                    </NavLink>
                </p>
                )
            }) } 
        </div>
    )
}

export default Profiles;