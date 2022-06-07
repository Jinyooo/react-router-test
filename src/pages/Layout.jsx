import React from 'react';
import { useNavigate } from 'react-router';
import { Outlet, NavLink } from 'react-router-dom';

function Layout() {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1)
    }
    const ActiveStyles = {
        color : "green"
    }
    const menus = [
        { id: 1, title: "Home | ", to: "/"},
        { id: 2, title: "About | ", to: "/about"},
        { id: 3, title: "Board", to: "/boardlist"},
    ]
    return (
        <div>
            <header className='NavBar'>
                {
                    menus.map( menu => (
                        <NavLink to={menu.to} className="link" style={ ({isActive}) => (
                            isActive ? ActiveStyles : undefined 
                        ) }>{menu.title}</NavLink>
                    ))
                }
            </header>

            <main>
                <Outlet />
            </main>
            
            <footer>
                <button onClick={goBack}>뒤로가기</button>
            </footer>
        </div>
    );
}

export default Layout;