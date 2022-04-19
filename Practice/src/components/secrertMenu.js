import * as React from "react"
import { Link } from "gatsby"

const SecretMenu = () =>{

    return(
        <div style={{
            background:'#f4f4f4f4'
        }}>
            <ul style={{
                listStyle:'none',
                display:'flex',
                justifyContent:'space-evenly'
            }}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/secret">Secret!</Link>
                </li>
                <li>
                    <Link to="/page-2">Page 2</Link>
                </li>
                <li>
                    <Link to="/blog"> Blog</Link>
                </li>
            </ul>

        </div>
    )
}

export default SecretMenu;