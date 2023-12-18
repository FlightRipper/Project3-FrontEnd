import profile from "../assets/user.png"
import coffee1 from '../assets/pexels-kseniya-budko-8100531.jpg'
import './article.css'
import { Link, useLoaderData } from "react-router-dom"
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const Article = () =>{
    const {article,articles}= useLoaderData();
    const date=new Date(article.createdAt);
    console.log(article);
    console.log(articles);
    // console.log(recentArticles);
    return(
        <>
        <main className="post-main">
            <div className="post-details">
                <article className="post-article">
                    <div className="post-article--details">
                        <div className="post-article-metadata">
                            <ul className="metadata-admin-info">
                                <li>
                                    <span>
                                        <div className="img-name-flex">
                                        <div className="article-metadata--img">
                                            <img src={profile} alt="" />
                                    </div>
                                    <span className="article-metadata--name">
                                            Karen
                                        </span>
                                        </div>
                                    </span>
                                    </li>
                                <li><span>.</span></li>
                                <li><span>{`${months[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()}`}</span></li>
                                <li><span>.</span></li>
                                <li><span>{`${date.getHours()}:${date.getMinutes()}`}</span></li>
                            </ul>
                            <h1 className="post-metadata-title">{`${article.title}`}</h1>
                        </div>
                        <div className="article-body">
                            <div className="article-body-img">
                            <img src={`https://tpll-31oj.onrender.com/${article.image}`} alt="" />
                            </div>
                            <br className="sep-line" />
                            <div>
                                <p>
                                {`${article.body.slice(0,(article.body.length/2))}`}
                                </p>
                            <br className="sep-line" />

                                <p>{`${article.body.slice((article.body.length/2),article.body.length)}`}</p>
                            </div>
                        </div>
                        <div className="post-footer">
                            <div className="line-separator"></div>
                            <div className="post-footer-flex">
                                <div className="social-links">
                                    <button><svg xmlns="http://www.w3.org/2000/svg" width="19" viewBox="0 0 19 19" role="img" fill="rgb(44,44,43)" className="facebook"><path d="M8.08865986,17 L8.08865986,10.2073504 L5.7890625,10.2073504 L5.7890625,7.42194226 L8.08865986,7.42194226 L8.08865986,5.08269399 C8.08865986,3.38142605 9.46779813,2.00228778 11.1690661,2.00228778 L13.5731201,2.00228778 L13.5731201,4.50700008 L11.8528988,4.50700008 C11.3123209,4.50700008 10.874068,4.94525303 10.874068,5.48583089 L10.874068,7.42198102 L13.5299033,7.42198102 L13.1628515,10.2073892 L10.874068,10.2073892 L10.874068,17 L8.08865986,17 Z"></path></svg></button>
                                    <button><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" className="twitter"><path fill="currentColor" d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05L9.294 6.928ZM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843l-3.664-5.28Z"/></svg></button>
                                    <button><svg xmlns="http://www.w3.org/2000/svg" width="19" viewBox="0 0 19 19" role="img" fill="rgb(44,44,43)" className="linkedin"><path d="M17,17 L13.89343,17 L13.89343,12.1275733 C13.89343,10.9651251 13.87218,9.47069458 12.2781416,9.47069458 C10.660379,9.47069458 10.4126568,10.7365137 10.4126568,12.0434478 L10.4126568,17 L7.30623235,17 L7.30623235,6.98060885 L10.2883591,6.98060885 L10.2883591,8.3495072 L10.3296946,8.3495072 C10.7445056,7.56190587 11.7585364,6.7312941 13.2709225,6.7312941 C16.418828,6.7312941 17,8.80643844 17,11.5041407 L17,17 Z M3.80289931,5.61098151 C2.80647978,5.61098151 2,4.80165627 2,3.80498046 C2,2.80903365 2.80647978,2 3.80289931,2 C4.79669898,2 5.60434314,2.80903365 5.60434314,3.80498046 C5.60434314,4.80165627 4.79669898,5.61098151 3.80289931,5.61098151 Z M2.24786773,17 L2.24786773,6.98060885 L5.35662096,6.98060885 L5.35662096,17 L2.24786773,17 Z"></path></svg></button>
                                </div>
                                <ul>
                                    <li><a href="#">TPLL</a></li>
                                    <li>.</li>
                                    <li><a href="#">Posts</a></li>
                                </ul>
                            </div>
                            <div className="line-separator"></div>

                        </div>

                    </div>
                </article>
                <div className="recent-posts">
                    <div className="recent-posts--header">
                        <h2>Recent Posts</h2>
                        <Link to={'/news'}>See All</Link>
                    </div>
                    <div className="recent-posts--list">
                        {articles.map(each=>{
                            return <Link key={each._id} to={`/news/${each._id}`}>
                                 <div className="post-card">
                            <article>
                                <div className="card-img">
                                <img src={`https://tpll-31oj.onrender.com/${each.image}`} alt="" />
                                </div>
                                <div className="post-card--body">
                                    <h3>{`${each.title}`}</h3>
                            <div className="line-separator"></div>
                            <div className="recent-post--description">
                            <p className="">
                            {`${each.body.slice(0,120)}`}
                            </p>
                            </div>  
                                </div>

                            </article>
                        </div>
                            </Link>
                        })}
                       
                    </div>

                </div>
            </div>
        </main>
        </>
    );
}

export default Article;