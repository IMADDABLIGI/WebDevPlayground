import Lists from "./Lists";
import NavBar from "./NavBar";
import "../../App.css"

function Page() {
let showList = true;

    return (
        <div className="page">
            <NavBar Text="LOGO WILL BE HERE" ></NavBar>
            {showList && <Lists />}
        </div>
    )
  }

export default Page;