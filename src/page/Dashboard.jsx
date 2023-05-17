import { Routes } from 'react-router-dom';
import Header from '../component/Header';
import { BrowserRouter, Route } from 'react-router-dom';

export default function Dashboard({ page }) {
  return (
    <div className="log">
      <Header />
      <Routes>
        <Route path="/log" element={<Log />} />
        <Route path="/userManager" element={<UserManager />} />
        <Route path="/appManager" element={<AppManager />} />
      </Routes>
    </div>
  );
}

function Log() {
  return <div>Log</div>;
}

function UserManager() {
  return <div>User Manager</div>;
}

function AppManager() {
  return <div>App Manager</div>;
}
