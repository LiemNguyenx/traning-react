import React from 'react';
import '../assets/css/material-dashboard.min.css';
import '../assets/css/font-awesome.min.css';
import Sidebar from './SideBar.jsx';

const App = () => {
    return(
        <div className="wrapper">
            <Sidebar />
        </div>
    );
}

export default App;