import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import 'popper.js'

import '../assets/js/plugins/perfect-scrollbar.jquery.min.js'
import '../assets/js/plugins/chartist.min.js'
import '../assets/js/material-dashboard.min.js'
import '../assets/js/init-chart.js'
import '../assets/js/plugins/bootstrap-notify.js'
import '../assets/js/plugins/arrive.min.js'
import '../assets/js/core/bootstrap-material-design.min.js'
// import '../assets/js/plugins/moment.min.js'
import '../assets/js/plugins/sweetalert2.js'
import '../assets/js/plugins/jquery.validate.min.js'
import '../assets/js/plugins/jquery.bootstrap-wizard.js'
import '../assets/js/plugins/bootstrap-selectpicker.js'
// import '../assets/js/plugins/bootstrap-datetimepicker.min.js'
// import '../assets/js/plugins/jquery.dataTables.min.js'
import '../assets/js/plugins/bootstrap-tagsinput.js'
import '../assets/js/plugins/jasny-bootstrap.min.js'
// import '../assets/js/plugins/fullcalendar.min.js'
import '../assets/js/plugins/jquery-jvectormap.js'
import '../assets/js/plugins/nouislider.min.js'

import '../assets/css/material-dashboard.min.css';
import '../assets/css/material-icons.css'
import 'font-awesome/css/font-awesome.min.css'

import Sidebar from './SideBar.jsx';
import MainPanel from './MainPanel.jsx';
import Settings from './Settings.jsx';

const App = () => {
    return (
        <div>
            <div className="wrapper">
                <BrowserRouter>
                    <Sidebar />
                    <MainPanel />
                </BrowserRouter>
            </div>
            <div>
                <Settings />
            </div>
        </div>

    );
}

export default App;