import { useLoaderData } from 'react-router-dom';
import '../../Pages/News/news.css';
import { Form } from 'react-router-dom';


 const AdminArticles = () =>{
    const articles = useLoaderData();
    console.log(articles);
    return (
        <>
        {articles.map(ar=>{
            return <AdminArticle key={ar._id} ar={ar}/>
        
        })}
        </>
    )
}


 export const AdminArticle = ({ar})=>{
    return(
    <div className="post-card">
            <article>
                <div className="card-img">
                <img src={`https://tpll-31oj.onrender.com/${ar.image}`} alt="" />
                </div>
                <div className="post-card--body">
                    <h3>{ar.title}</h3>
            <div className="line-separator"></div>
            <div className="admin-article-control">
                <button className="admin-edit--button">
                    <p>Edit</p>
                </button>
                <Form method='DELETE' action={`delete/${ar._id}`}>
                <button type='submit' className="admin-delete--button">
                    <p>Delete</p>
                </button>
                </Form>
             
                            
            </div>  
                </div>

            </article>
        </div>
    );

}
export default AdminArticles;
