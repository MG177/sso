import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

export default function Header() {
  const location = useLocation();
  const [currentUrl, setCurrentUrl] = useState(location.pathname);
  const navigate = useNavigate();
  const { loginWithRedirect, logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();



  useEffect(() => {
    setCurrentUrl(location.pathname);
  }, [location.pathname]);


  return (
    <div className="sticky top-0 z-20 flex flex-row justify-between px-5 py-2 font-semibold shadow bg-bw1 h-fit rounded-b-main offset-y-1px blur-14 font-main text-bw3 min-w-fit">
      <div className="flex flex-row gap-4 text-title2">
        <Link
          to="/log"
          className="flex flex-col gap-1 mx-1 align-middle transition ease-in-out hover:scale-110"
        >
          <div>User Log</div>
          {currentUrl.startsWith('/log') && (
            <hr className="bg-bw4 h-0.5 border-0"></hr>
          )}
        </Link>
        <Link
          to="/userManager"
          className="flex flex-col gap-1 mx-1 align-middle transition ease-in-out hover:scale-110"
        >
          <div>User Manager</div>
          {currentUrl.startsWith('/userManager') && (
            <hr className="bg-bw4 h-0.5 border-0"></hr>
          )}
        </Link>
      </div>
      <div className='flex flex-row gap-5'>
        {(isAuthenticated && !isLoading) && (
          <div
            className="flex flex-row justify-end gap-2 text-2xl align-middle transition ease-in-out cursor-pointer hover:scale-110 active:brightness-50"
            onClick={() => logout({
              logoutParams: {
                returnTo: window.location.origin
              }
            })}
          >
            <div className="self-center">{user.name || "Your name"}</div>
            <div className="flex self-center border-2 rounded-full bg-2 text-bw3 w-9 h-9 place-content-center border-bw3">
              <i
                className="self-center pi pi-user h-fit"
                aria-label="User"
                style={{ fontSize: '1.5rem' }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
