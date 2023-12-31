import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Logo() {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 800;

    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);

        window.addEventListener("resize", handleResizeWindow);
    }, []);

    return (
        <>
        <Link to="/" style={{textDecoration: "none"}}>
            <h1 className="logo">{ width > breakpoint ? "Prometheus Automation" : "P.A." }</h1>
        </Link>
        </>
    )
}

export default Logo;