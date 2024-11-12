import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AuthProvider } from './context/authContext';
import AuthForm from './components/authForm';
import CollectionList from './components/CollectionList';
import MaterialList from './components/MaterialList';
import ReportCard from './components/ReportCard';
import { useAuth } from './context/authContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<AuthForm />} />
          <Route path="/collections" element={<CollectionList />} />
          <Route path="/materials" element={<MaterialList />} />
          <Route path="/reports" element={<ReportCard />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
