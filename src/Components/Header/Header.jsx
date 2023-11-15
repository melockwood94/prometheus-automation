import Logo from './Logo';
import Navbar from './Navbar';
import HeaderAction from './HeaderAction';
import './Header.css';

function Header() {
    return (
        <>
        <header>
            <Logo />

            <Navbar />

            <HeaderAction />
        </header>
        </>
    )
}

export default Header;