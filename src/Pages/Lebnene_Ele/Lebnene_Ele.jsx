import Slider from "../../components/Slider";
import { useLoaderData } from "react-router-dom";
import "../Lebnene_Ele/Lebnene_Ele.css";

const Lebnene_Ele = () => {
  const { lebneneleData, milestonesData } = useLoaderData();
  console.log("lebneneEleData", lebneneleData);
  console.log("milestoneData", milestonesData);

  return (
    <>
      {lebneneleData.map((item, index) => (
        <div key={index} className="lebneneEle-img-center">
          <img
            src={`http://localhost:4000/uploads/${item.image}`}
            alt={`LebneneEle ${index}`}
            className="lebneneEle-img"
          />
        </div>
      ))}

      <div className="wrapper">
        <section id="ourStory" className="lebneneEle-story">
          <h2 className="lebneneEle-h3">
            OUR <span className="h3-red">STORY</span>
          </h2>
          {lebneneleData.map((item, index) => (
            <p key={index} className="lebneneEle-text">{`${item.story}`}</p>
          ))}
        </section>
        <section id="milestones" className="lebneneEle-library">
          <h2 className="lebneneEle-h3">
            MILE<span className="h3-red">STONES</span>
          </h2>
        </section>
        <Slider milestonesData={milestonesData} />
        <section id="library" className="lebneneEle-library">
          <h2 className="lebneneEle-h3">
            FROM OUR LIBRARY TO <span className="h3-red">YOURS</span>
          </h2>
          {lebneneleData.map((item, index) => (
            <p key={index} className="lebneneEle-text">{`${item.ourLibrary}`}</p>
          ))}
        </section>
      </div>
    </>
  );
};

export default Lebnene_Ele;
