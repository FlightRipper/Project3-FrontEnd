import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registration from './components/registration-page';


function App() {
 return (
   <Router>
     <Routes>
      
       <Route path="/registration" element={<Registration />} />
     </Routes>
   </Router>
 );
}

export default App;