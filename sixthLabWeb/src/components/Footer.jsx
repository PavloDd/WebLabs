import React from 'react'
import {
    TwitterOutlined,
    InstagramOutlined,
    FacebookOutlined,
    YoutubeOutlined,
    QqOutlined
  } from "@ant-design/icons";

function Footer(props) {
    return (
        <>
            <div className={props.className}>
                <div className='footerWrapper'>
                    <div className='LogoWrapper'>
                        <QqOutlined />
                            <h1>Penguin Paradise</h1>
                    </div>
                    <p>Fashion is popular <br />aesthetic expression at a particular time, place and in a specific context, especially in <br />clothing, footwear, lifestyle, accessories, makeup.</p>
                    <hr />
                    <ul className='IconsWrapper'>
                        <li className='IconBase' YoutubeOutlined />
                        <li className='IconBase' TwitterOutlined />
                        <li className='IconBase' FacebookOutlined />
                        <li className='IconBase' InstagramOutlined />
                    </ul>
                    <hr />
                    <p className='lastParagraph'>© Clay Shop all rights reserved</p>
                </div>
            </div>
        </>
    )
}

export default Footer;