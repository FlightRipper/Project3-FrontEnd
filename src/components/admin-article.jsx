// import { useState } from "react";
// import { useLoaderData } from "react-router-dom";
// // import "../News.css";
// import axios from "axios";
// import EditForm from "./EditForm.jsx";
// const AdminArticles = () => {
//     const [showEditForm, setShowEditForm] = useState(false);
//     const articles = useLoaderData();
//     console.log("Articles:", articles);
    

//   return (
//     <>
      
       
//         {articles.map((ar) => {
//           return <AdminArticle key={ar.id} ar={ar} showEditForm={showEditForm} setShowEditForm={setShowEditForm} />;
//          })}
         
    
//     </>
//   );
// };
// export const AdminArticle = ({ ar,showEditForm,setShowEditForm }) => {
//   console.log("Article Data:", ar);
//   const handleDelete = async () => {
//     console.log("Deleting article with id:", ar.id);
//     try {
//       await axios.delete(`http://localhost:4000/article/${ar.id}`);
//       console.log("Article deleted successfully");
//     } catch (error) {
//       console.error("Failed to delete article", error.message);
//     }
 
//   };

//       console.log('Before state change - showEditForm:', showEditForm);
//       const handleEdit = () => {
//         setShowEditForm((prevShowEditForm) => !prevShowEditForm);
//       };
      
//       console.log('After state change - showEditForm:', showEditForm);
    

//   return (
//     <div className="post-card">
//       <article>
//         <div className="card-img">
//           {/* <img src={`https://tpll-31oj.onrender.com/${ar.image}`} alt="" /> */}
//           <img src={`http://localhost:4000/uploads/${ar.image}`} alt="" />
//         </div>
//         <div className="post-card--body">
//           <h3>{ar.title}</h3>
//           <div className="line-separator"></div>
//           <div className="admin-article-control">
//             <button onClick={handleEdit} className="admin-edit--button"> 
//               <p>Edit</p>
//             </button>

//             <button onClick={handleDelete} className="admin-delete--button">
//               <p>Delete</p>
//             </button>
//           </div>
//         </div>
//       </article>
   
//       {showEditForm && (
//         <EditForm article={ar} onClose={() => setShowEditForm(false)} />
//       )}
//     </div>
//   );
// };
// export default AdminArticles;


import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "../News.css";
import axios from "axios";
import EditForm from "./EditForm.jsx";

const AdminArticles = () => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = useLoaderData();
  console.log("Articles:", articles);

  const handleEdit = (article) => {
    setShowEditForm(true);
    setSelectedArticle(article);
  };

  return (
    <>
      {articles.map((ar) => (
        <AdminArticle
          key={ar.id}
          ar={ar}
          showEditForm={showEditForm}
          setShowEditForm={setShowEditForm}
          onEdit={() => handleEdit(ar)}
        />
      ))}

      {showEditForm && (
        <EditForm article={selectedArticle} onClose={() => setShowEditForm(false)} />
      )}
    </>
  );
};

export const AdminArticle = ({ ar, showEditForm, onEdit }) => {
  console.log("Article Data:", ar);

  const handleDelete = async () => {
    console.log("Deleting article with id:", ar.id);
    try {
      await axios.delete(`http://localhost:4000/article/${ar.id}`);
      console.log("Article deleted successfully");
    } catch (error) {
      console.error("Failed to delete article", error.message);
    }
  };

  console.log('Before state change - showEditForm:', showEditForm);
  const handleEditClick = () => {
    onEdit();
  };

  return (
    <div className="post-card">
      <article>
        <div className="card-img">
          <img src={`http://localhost:4000/uploads/${ar.image}`} alt="" />
        </div>
        <div className="post-card--body">
          <h3>{ar.title}</h3>
          <div className="line-separator"></div>
          <div className="admin-article-control">
            <button onClick={handleEditClick} className="admin-edit--button">
              <p>Edit</p>
            </button>

            <button onClick={handleDelete} className="admin-delete--button">
              <p>Delete</p>
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default AdminArticles;
