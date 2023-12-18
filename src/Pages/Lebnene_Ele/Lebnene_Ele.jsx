import Slider from "../../components/Slider";
import {  useLoaderData } from "react-router-dom";
import "../Lebnene_Ele/Lebnene_Ele.css";

const Lebnene_Ele = () => {
    const {lebneneleData, milestonesData}=useLoaderData();
    
    return (
        <>
            <div className="lebneneEle-img-center">
                <img src={`https://tpll-31oj.onrender.com/${lebneneleData.image}`} alt="LebneneEle" className="lebneneEle-img"/>
            </div>
            <div className="wrapper">
                <section id="ourStory" className="lebneneEle-story">
                    <h2 className="lebneneEle-h3">OUR <span className="h3-red">STORY</span></h2>
                    <p className="lebneneEle-text">{`${lebneneleData.story}`}</p>
                </section>
                <section id="milestones" className="lebneneEle-library">
                    <h2 className="lebneneEle-h3">MILE<span className="h3-red">STONES</span></h2>
                </section>
                <Slider milestonesData={milestonesData}/>
                <section id="library" className="lebneneEle-library">
                    <h2 className="lebneneEle-h3">FROM OUR LIBRARY TO <span className="h3-red">YOURS</span></h2>
                    <p className="lebneneEle-text">{`${lebneneleData.ourLibrary}`}</p>
                </section>
            </div>
        </>
    );
}
 
export default Lebnene_Ele;