import { Link } from "react-router-dom";

function HeaderAction() {
    return (
        <>
        <Link to='/contact' className="btn btn-outline-primary header-action">Contact</Link>
        </>
    )
}

export default HeaderAction;