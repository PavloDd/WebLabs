import React from 'react'
import '../css/Footer.css'
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
                        <QqOutlined style={{ fontSize: '50px' }} />
                        <h1>Penguin Paradise</h1>
                    </div>
                    <p>Enjoy <br />the effortless convenience and lightning-fast ticket purchasing experience through our service. <br />Penguin Paradise makes buying tickets a breeze, allowing you to embark on your adventures without a hitch.</p>
                    <hr className='line'/>
                    <div className='IconsWrapper'>
                        <YoutubeOutlined style={{ fontSize: '30px', color: '#FF0000' }} />
                        <TwitterOutlined style={{ fontSize: '30px', color: '#03A9F4' }} />
                        <FacebookOutlined style={{ fontSize: '30px', color: 'blue' }} />
                        <InstagramOutlined style={{ fontSize: '30px', color: '#3A9F4' }} />
                    </div>

                    <hr className='line'/>
                    <p className='lastParagraph'>© Penguin Paradise all rights reserved</p>
                </div>
            </div>
        </>
    )
}

export default Footer;