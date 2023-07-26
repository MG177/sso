import { Routes, Route, Navigate } from 'react-router-dom';
import Header from '../component/Header';

import { useAuth0 } from "@auth0/auth0-react";

import Log from '../component/LogDashboard';
import UserManager from '../component/UserManagerDashboard';


export default function Dashboard() {
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  // if (!isAuthenticated && !isLoading) {
  //   loginWithRedirect();
  // }

  console.log(user);
  console.log(isAuthenticated);
  console.log(isLoading);
  if (isLoading) return <div>Loading...</div>
  return (
    <div className="">
      <Header />
      <div className="mx-5">
        <Routes>
          <Route path="/" element={<Navigate to="log" />} />
          <Route path="/log" element={<Log />} />
          <Route path="/userManager" element={<UserManager />} />
          <Route path="*" element={<Navigate to="log" />} />
        </Routes>
      </div>
    </div>
  );
}


