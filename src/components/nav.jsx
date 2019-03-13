import React from "react"
import { Link } from "gatsby"

const Nav = () => (
  <nav>
    <ul style={{ display: "flex", listStyleType: "none", margin: "0" }}>
      <li style={{ marginRight: "1rem" }}>
        <Link to="/" activeClassName="active">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about/" activeClassName="active">
          About
        </Link>
      </li>
    </ul>
  </nav>
)

export default Nav
