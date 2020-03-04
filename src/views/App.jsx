import React from 'react';
import '../assets/css/material-dashboard.min.css';
import 'font-awesome/css/font-awesome.min.css'
import '../assets/css/material-icons.css'
// import '../assets/js/core/popper.min.js';
// import '../assets/js/core/bootstrap-material-design.min.js';
// import '../assets/js/plugins/perfect-scrollbar.jquery.min.js';
// import '@fortawesome/react-fontawesome';
import Sidebar from './SideBar.jsx';

const App = () => {
    return(
        <div className="wrapper">
            <Sidebar />
        </div>
    );
}

export default App;