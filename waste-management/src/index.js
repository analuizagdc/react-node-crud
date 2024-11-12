import React from 'react';
import ReactDOM from 'react-dom/client';
import CollectionsPage from './pages/CollectionsPage'
import MaterialsPage from './pages/MaterialsPage'
import ReportPage from './pages/ReportsPage' 
import LoginPage from './pages/Login'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CollectionsPage />
    <MaterialsPage />
    <ReportPage />
    <LoginPage />
  </React.StrictMode>
);

