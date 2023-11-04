import React from "react";
import "./Heading.css"
import CardItem from "./CardItem";

function Heading(props) {
    return (
        <>
            <div className={props.className}>
                <div className="Heading">
                <div>
                    <img src='https://www.bodo.ua/resize/upload/files/cm-experience/103/102643/images_file/all_all_big-t1542032877-r1w768h425q90zc1.jpg' className="firstImage" alt='Penguin Paradise'/>
                </div>
                <div className="headingText">
                    <h1 className="Title">"Penguin Paradise Tickets: Explore the Zoo!"</h1>
                    <p>Ласкаво просимо до "Penguin Paradise Tickets" – ваш вхід до світу пригод та відкриттів!
                        Придбайте квитки онлайн та долучайтеся до нас у захопливому зоопарку.
                        Пінгвіни та інші чудові тварини чекають на ваших дітей.
                        Розваги та вивчення природи – все це в нашому зоопарку!
                        Забронюйте квитки зараз та розпочніть свою пригоду.
                        </p>
                    <button size="large" className="buttonShowMore">Show More</button>

                </div>
                </div>
                <div className="tileHeading">
                    <div>
                        <div className='CardWrapper'>
                            {data.map(({ title, text, image, price }, idx) => (
                                <CardItem
                                    title={title}
                                    text={text}
                                    imageSrc={image}
                                    price={price}
                                    id={idx}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const data = [
  {
    title: "Zoo of XII monthes",
    text: "Kyiv",
    image:'https://beton.kovalska.com/wp-content/uploads/2021/09/zoo-1.jpg',
    price: 90,
  },
  {
    title: "Feldman Ecopark",
    text:"Харків",
    image:'https://www.sq.com.ua/img/news/2019/08/13/6.jpg',
    price: 88,
  },
  {
    title: "Kyiv Zoo",
    text:"Kyiv",
    image:'https://vechirniy.kyiv.ua/uploads/2022/11/24/637f3aed6ee8b.jpg',
    price: 75,
  },
];

export default Heading;