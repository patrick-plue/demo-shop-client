import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/'>Products</NavLink>
                </li>
                <li>
                    <NavLink to='/cart'>Cart</NavLink>
                </li>
            </ul>
        </nav>
    );
}
