import { Form } from 'react-router-dom';
import './admin-form.css';
const AdminForm = ()=>{
    return(
        <>
        <Form method='patch' action=''>
        <div className="popup-body">
            <label htmlFor="username">Username</label>
            <input type="text" placeholder='user name' autoFocus/>
            <label htmlFor="email">Email</label>
            <input type="text"  placeholder='Email'/>
            <label htmlFor="message">Message</label>
            <textarea rows={5} className={`popup-textarea `} >

            </textarea>
                <button className="popup-send-btn">Send</button>
           </div>
           </Form>
        </>
    );
}
export default AdminForm;