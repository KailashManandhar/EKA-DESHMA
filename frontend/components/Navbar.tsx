import { Link } from "react-router-dom"
import "./../styles/Home.css"

export default function Navbar() {
    console.log("working navbabr");

    return (
        <div className="navbar">
            <Link to="/"><p>Home</p></Link>
            <Link to="/read"><p>Read</p></Link>
            <Link to="/upload"><p>Upload</p></Link>
        </div>
    )
}