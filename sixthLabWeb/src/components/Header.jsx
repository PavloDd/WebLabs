import React from "react"
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import './Header.css';
import {QqOutlined} from "@ant-design/icons";
// import Home from '../Home/Home';

function Header(props) {
    return (
        <>
            <div className={props.className}>
                <div className="Header">
                    <logo>
                        <QqOutlined className="firstLogo"/>
                    </logo>
                    <Router>
                        <div>
                            <ul>
                                <li><NavLink exact to='/' className='selected'>Home</NavLink></li>
                                <li><NavLink exact to='/shop' className='selected'>Shop</NavLink></li>
                                <li><NavLink exact to='/blog' className='selected'>Blog</NavLink></li>
                                <li><NavLink exact to='/contact' className='selected'>Contact</NavLink></li>
                            </ul>
                            <Routes>
                                <Route path='/shop'>
                                    {/* <div></div> */}
                                </Route>
                                <Route path='/blog'>
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
                    </Router>
                </div>
            </div>
        </>
    )
}

export default Header