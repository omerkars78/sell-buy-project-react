// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RegisterPage from './containers/RegisterPage';

const App: React.FC = () => {
    return (
        <Router>
            <Route path="/register" Component={RegisterPage} />
            {/* Other routes */}
        </Router>
    );
};

export default App;
