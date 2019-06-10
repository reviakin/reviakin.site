import React from 'react'
import { Link } from '@reach/router'

export default function Header() {
    return (
        <div>
            <div>
                <h1>Reviakin Dmitry</h1>
            </div>
            <div>
                <ul>
                    <li>
                        <Link to="/">
                            Abount me
                    </Link>
                    </li>
                    <li>
                        <Link to="/">
                            My project
                    </Link>
                    </li>
                    <li>
                        <Link to="/contacts">
                            Contacts
                    </Link>
                    </li>
                    <li>
                        <Link to="anonymous">
                            Anonymous
                    </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}