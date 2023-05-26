import reactLogo from '../assets/react.svg'
import '../styles/Sponsors.css'

function Sponsors() {
    return (
        <div className="Sponsor">
            <h1>Sponsors</h1>
            <div className="media-scroller snaps-inline">
                <div className="media-element">
                    <img src={reactLogo} className="logo" alt="React logo" />
                </div>
                <div className="media-element">
                    <img src={reactLogo} className="logo" alt="React logo" />
                </div>
                <div className="media-element">
                    <img src={reactLogo} className="logo" alt="React logo" />
                </div>
                <div className="media-element">
                    <img src={reactLogo} className="logo" alt="React logo" />
                </div>
                <div className="media-element">
                    <img src={reactLogo} className="logo" alt="React logo" />
                </div>
                <div className="media-element">
                    <img src={reactLogo} className="logo" alt="React logo" />
                </div>
                <div className="media-element">
                    <img src={reactLogo} className="logo" alt="React logo" />
                </div>
                <div className="media-element">
                    <img src={reactLogo} className="logo" alt="React logo" />
                </div>
            </div>
        </div>
    )
}

export default Sponsors