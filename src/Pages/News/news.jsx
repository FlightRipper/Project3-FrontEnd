import "./news.css";
import profile from "../../assets/user.png"
import { Link, useLoaderData } from "react-router-dom";
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const News = () =>{

    const articles = useLoaderData();
    console.log(articles)

    return (
        <div className="news">
            <div className="news-posts">
            {articles.map(ar=>{
                return <Link key={ar.id} to={`${ar.id}`}> <Post  article={ar} months={months}/></Link>
            })}                
            </div>

        </div>
        
    );
}
// eslint-disable-next-line react/prop-types
export const Post = ({article}) =>{
    const date= new Date(article.date);
    return (
        <>
        
        <div className="post">
                    
                    <div className="post-image">
                        <img src={`http://localhost:4000/uploads/${article.image}`} alt="" />
                    </div>
                    <div className="post-details">
                        <div className="article">
                            <div className="post-metadata">
                                <div className="post-metadata--flex-container">
                                    <div className="post-metadata--img">
                                            <img src={profile} alt="" />
                                    </div>
                                    <div className="post-metadata--admin">
                                        <span className="post-metadata--name">
                                            {article.admin.username}
                                        </span>
                                        <ul className="post-metadata--time">
                                            <li>{`${months[date.getMonth()]} ${date.getDate()}`}</li>
                                            <li> . </li>
                                            <li>{`${date.getHours()}:${date.getMinutes()} min`}</li>

                                        </ul>

                                    </div>

                                </div>
                            </div>
                            <div className="post-body">
                                <h1>{article.title}</h1>
                                <p>{article.body.slice(0,300)} <span>...read more</span> </p>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
}

export default News;