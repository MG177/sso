import './App.css';
import Dashboard from './page/Dashboard';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import not_found from './assets/404 Error-bro.svg';

//theme
import 'primereact/resources/themes/lara-light-indigo/theme.css';

//core
import 'primereact/resources/primereact.min.css';

import 'primeicons/primeicons.css';
import Login from './page/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route
          path="*"
          element={
            <div className="w-full h-screen flex flex-col items-center justify-center">
              <img src={not_found} className="object-contain w-[80vh]" />
              <Link
                to="/"
                className="m-4 w-fit h-fit flex p-4 px-20 bg-[#8d8dd0] rounded-lg text-white font-bold items-center justify-center"
              >
                Back
              </Link>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
