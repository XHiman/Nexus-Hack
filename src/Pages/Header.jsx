import reactLogo from '../assets/react.svg'
import '../styles/Header.css'

function Header () {
    return (
        <div className='Head'>
        <div className="Head_Left">
            <img src={reactLogo} className="logo" alt="React logo" />
        </div>
        <div className="Head_Right">
            <ul className='ULN'>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact US</li>
                <li>Apply</li>
            </ul>
        </div>
        </div>
    )
}
export default Header