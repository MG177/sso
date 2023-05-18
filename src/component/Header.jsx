import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Header() {
  const location = useLocation();
  const [currentUrl, setCurrentUrl] = useState(location.pathname);

  useEffect(() => {
    setCurrentUrl(location.pathname);
  }, [location.pathname]);

  console.log(currentUrl);

  return (
    <div className="flex flex-row top-0 justify-between sticky px-5 py-5 bg-bw1 h-fit rounded-b-main shadow offset-y-1px blur-14 font-semibold font-main text-bw3 min-w-fit">
      <div className="flex flex-row gap-4 text-title1">
        <Link
          to="/dashboard/log"
          className="flex flex-col align-middle gap-1 mx-1 transition ease-in-out hover:scale-110"
        >
          <div>User Log</div>
          {location.pathname.startsWith('/dashboard/log') && (
            <hr className="bg-bw4 h-0.5 border-0"></hr>
          )}
        </Link>
        <Link
          to="/dashboard/userManager"
          className="flex flex-col align-middle gap-1 mx-1 transition ease-in-out hover:scale-110"
        >
          <div>User Manager</div>
          {location.pathname.startsWith('/dashboard/userManager') && (
            <hr className="bg-bw4 h-0.5 border-0"></hr>
          )}
        </Link>
        <Link
          to="/dashboard/appManager"
          className="flex flex-col align-middle gap-1 mx-1 transition ease-in-out hover:scale-110"
        >
          <div>App Manager</div>
          {location.pathname.startsWith('/dashboard/appManager') && (
            <hr className="bg-bw4 h-0.5 border-0"></hr>
          )}
        </Link>
      </div>
      <div className="flex flex-row justify-end align-middle text-2xl gap-2">
        <div className="self-center">John Doe</div>
        <div className=" flex rounded-full bg-2 text-bw3 w-9 h-9 place-content-center border-2 border-bw3 self-center">
          <i
            className="pi pi-user h-fit self-center"
            aria-label="User"
            style={{ fontSize: '1.5rem' }}
          />
        </div>
      </div>
    </div>
  );
}
