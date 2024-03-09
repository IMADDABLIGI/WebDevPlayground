import './assets/error_page/ErrorPage.css';
import Racket from './assets/error_page/racket.svg';
import PingLogo from './assets/PingLogo.svg';

function App() {
  return (
    <div>
      <div className="error-page">
        {/* Nav Bar */}
        <div className="nav-bar">
          <img src={PingLogo} />
        </div>
        {/* Page Not Found + 404 */}
        <div className="header">
          <div className="box-page-not-found"> <strong> OOPS ! PAGE NOT FOUND. </strong> </div>
          <div className="box-404">
            <strong>4</strong> <img src={Racket} /> <strong>4</strong> 
          </div>
        </div>
        {/* Sub-header Error Message */}
        <div className="sub-header">
          <div className="err-msg">
            <strong> We can't seem to find the page you are looking for. </strong>
          </div>
          <div className="space"></div>
        </div>
        {/* Button Back To Home */}
        <div className="button-ctr">
          <strong> <a href="https://github.com/elmehdi-kenane/ft_transcendence" target="_blank" className="ctr-back-home"> BACK TO HOME </a></strong>
        </div>
      </div>
  </div>
  );
}

export default App;
