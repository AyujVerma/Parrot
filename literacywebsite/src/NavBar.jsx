import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "./navBar.css";
import logo from "./images/otherlogo.png";

export default function Navbar() {

  <li><a class="active" href="#home"></a></li>

  return (
    <nav className="nav">
      <ul className="ul">
        <li> <CustomLink to="/">Home</CustomLink> </li>
        <li> <CustomLink to="/Reading">Read</CustomLink> </li>
        <li> <CustomLink to="/Writing">Write</CustomLink> </li>
        <li> <CustomLink to="/Analytics">Analyze</CustomLink> </li>
        <img src={logo} width="15%" height="auto"/>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} style={{ textDecoration: 'none'}} {...props}>
        {children}
      </Link>
    </li>
  )
}