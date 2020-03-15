import React from 'react';

import Narbar from './Narbar.jsx';
import Content from './Content.jsx';
import Footer from './Footer.jsx';

const MainPanel = () => {
    return (
        <div className="main-panel">
                <Narbar />
                <Content />
                <Footer />
        </div>
    );
}

export default MainPanel;