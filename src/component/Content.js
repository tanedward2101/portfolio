
import logo from '../img/logo2.svg';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Content() {
    return (
        <div>
            <div className="main-logo">
                <img src={logo} className="main-img" />
            </div>
            <div className="main-text">
                Hi, I'm Edward, a Full-stack web developer.
            </div>
        </div>)
}

export default Content;