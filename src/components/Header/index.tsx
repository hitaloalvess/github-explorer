import logo from '../../assets/images/logo.svg';

import './styles.scss';

export default function Header(){
    return(
        <header className="header-container container">
            <div className="header-content">
                <img src={logo} alt="logo" />
            </div>
        </header>
    )
}