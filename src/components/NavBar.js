import React from 'react'
import { Link } from 'react-router-dom'

export function NavBar() {
    const Menus = [
        { name: "자유게시판", dis: "translate-x-0" },
        { name: "카풀", dis: "translate-x" },
        { name: "HOME", dis: "" },
        { name: "같이 타요!", dis: "" },
        { name: "동호회", dis: "" }
    ]
  return (
    <div>
        <ul>
            {/* {
                Menus.map((menu,i) => (
                    <li key={i}>
                        
                    </li>
                ))
            } */}
            <li>
                <Link to="/board">
                    자유게시판
                </Link>
            </li>
            <li>
                <Link to="/board">
                    카풀
                </Link>
            </li>
            <li>
                <Link to="/">
                    HOME
                </Link>
            </li>
        </ul>
    </div>
  )
}

