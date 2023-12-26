import { useState } from "react";
import leftArrow from '../../assets/left-arrow.png'
import rightArrow from '../../assets/right-arrow.png'
import introVideo from"../../assets/intro.mp4"
import { Link, useLoaderData } from "react-router-dom";
import "./home.css"

const Home = () =>{
    const articles= useLoaderData();
    const images =articles.map(a => {
    return`https://tpll-31oj.onrender.com/${a.image}`
    })
    const [index,setIndex]= useState(0);
    const [visible,setVisible]= useState(false);
    const length=images.length;//number of images
    const handleShowDetails = () =>{
            setVisible(true);
    }
    const handleHideDetails = ()=>{
        setVisible(false);
    }
    const handlePrevImage = ()=>{
        setIndex((index-1+length) % length);
    }
    const handleNextChange = () =>{
            setIndex((index+1) % length);
    }
    return(
        <>
        <section className="body-section">
            <div className="video-section">
                <video className="video" autoPlay loop muted controls={false} preload="auto">
                    <source src={introVideo} type="video/mp4"/>
                </video>
            </div>
            <div className="carousel-section">
                <div className="title">
                    <h1>LATEST <span className="red">NEWS</span></h1>
                </div>
                <div className="carousel">
                    <div className="carousel-container">
                    <div className="item1"><img src={images[(index-1+length)%length]} alt="" width={355} height={360}/></div>
                        <Link to='/news'><div className="item2" onMouseEnter={handleShowDetails} onMouseLeave={handleHideDetails}>
                            <img src={images[index]} alt=""  />
                           {visible? <div className="details">
                                <h1 className="details-title">
                                 {articles[index]?articles[index].title:"New title"}
                                </h1>
                                <p className="description">
                                    {articles[index]?articles[index].body.slice(0,300):"Some description"}
                                </p>
                            </div>:null}
                        </div>
                        </Link>
                       <div className="item3"><img src={images[(index+1)%length]} alt="" width={355} height={360}/></div>
                        <div className="arrows">
                            <button className="carousel-btns" onClick={handlePrevImage}><img src={leftArrow} alt="prev button" width={60} height={60} /></button>
                            <button className="carousel-btns" onClick={handleNextChange}><img src={rightArrow} alt="next button" width={60} height={60}/></button>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Home;