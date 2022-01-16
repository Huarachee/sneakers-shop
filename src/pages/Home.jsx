import React from 'react';

import { Header, Categories, Card, Footer } from '../components/index';

function Home() {
    return (
        <div className="homePage">
            <Header/>
            <div className="homeTopInfo">
                {/* <div className="bgText">
                    <p className='bgTextContent1'>
                        <span>Акция</span>
                        <span>Акция</span>
                        <span>Акция</span>
                        <span>Акция</span>
                        <span>Акция</span>
                        <span>Акция</span>
                        <span>Акция</span>
                        <span>Акция</span>
                        <span>Акция</span>
                        <span>Акция</span>
                        <span>Акция</span>
                    </p>
                    <p className='bgTextContent2'>
                        <span>Акция</span>
                        <span>Акция</span>
                        <span>Акция</span>
                        <span>Акция</span>
                        <span>Акция</span>
                        <span>Акция</span>
                        <span>Акция</span>
                        <span>Акция</span>
                        <span>Акция</span>
                        <span>Акция</span>
                        <span>Акция</span>
                    </p>
                    <p className='bgTextContent3'>
                        <span>Акция</span>
                        <span>Акция</span>
                        <span>Акция</span>
                        <span>Акция</span>
                        <span>Акция</span>
                        <span>Акция</span>
                        <span>Акция</span>
                        <span>Акция</span>
                        <span>Акция</span>
                        <span>Акция</span>
                        <span>Акция</span>
                    </p>
                    <p className='bgTextContent4'>
                        <span>Акция</span>
                        <span>Акция</span>
                        <span>Акция</span>
                        <span>Акция</span>
                        <span>Акция</span>
                        <span>Акция</span>
                        <span>Акция</span>
                        <span>Акция</span>
                        <span>Акция</span>
                        <span>Акция</span>
                        <span>Акция</span>
                    </p>
                </div> */}
                <div className="circleContainer">
                    <div className="bgCircle"></div>
                    <div className="mainCircle"></div>
                    <img src="../img/sneakers-header-img-1.png" alt="Main Sneakers" width={772} height={574}/>
                </div>
                <marquee className="tickerAction">
                    <p>Акция на кроссовки для бега!</p>
                </marquee>
                <div className="container">
                    <div className="homeContentTop">
                        <h1 className="homeTitle">Акции на товары для бега</h1>
                    </div>
                </div>
            </div>
            <section className="homeContent">
                <div className="container">
                    <h1 className="homeContentTitle">
                        Кроссовки:
                    </h1>
                    <Categories/>
                    <Card/>
                </div>
                
            </section>
            <section className="frequentlyBought">
                <div className="container">
                    <h3 className="frequentlyBoughtTitle">Часто покупаемые:</h3>
                </div>
                
            </section>
            <Footer/>
        </div>
        
    );
}

export default Home;