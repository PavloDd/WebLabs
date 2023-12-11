import React from "react"
import {Routes, Route, NavLink } from "react-router-dom";
import './Header.css';
import {QqOutlined} from "@ant-design/icons";


function Header(props) {
    return (
        <>
            <div className={props.className}>
                <div className="Header">
                    <logo>
                        <QqOutlined className="firstLogo" />
                    </logo>
                    
                    <div>
                    <ul>
                        <li><NavLink exact to='/' className='selected'>Home</NavLink></li>
                        <li><NavLink exact to='/shop' className='selected'>Shop</NavLink></li>
                        <li><NavLink exact to='/cart' className='selected'>Cart</NavLink></li>
                        <li><NavLink exact to='/contact' className='selected'>Contact</NavLink></li>
                    </ul>
                    <Routes>
                        <Route path='/Shop'>
                            {/* <div></div> */}
                        </Route>
                        <Route path='/cart'>
                            {/* <div></div> */}
                        </Route>
                        <Route path='/contact'>
                            {/* <div></div> */}
                        </Route>
                        <Route path='/'>
                            {/* <Home /><div></div> */}
                        </Route>        
                    </Routes>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Header