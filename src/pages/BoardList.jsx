import React from 'react';
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';

function BoardList() {
    const pages = [ 1, 2, 3, 4, 5 ];

    return (
        <div>
            <h1>Board</h1>
            <p>파라미터 및 중첩 라우터를 사용하여 아래 Board의 내용이 보입니다</p>
            <Outlet />
                {
                    pages.map( (page, i) => (
                        <NavLink to={`/boardlist/${page}`} key={i} className="link" >
                            {page} 
                        </NavLink>
                    ))
                    }
        </div>
    );
}

export default BoardList;