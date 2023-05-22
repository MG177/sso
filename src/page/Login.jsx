import loginBg from '../assets/bg.svg';
import logo from '../assets/Lumen.svg';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="relative">
      <img
        src={loginBg}
        alt="login"
        className="w-full h-screen object-cover select-none z-0 "
        draggable="false"
      />
      <div className="left-0 top-0 h-screen w-full z-20 absolute flex items-center justify-center select-none drop-shadow-xl">
        <div className="bg-bw1 rounded-main p-8 text-center">
          <img
            src={logo}
            alt="logo"
            className="w-40 mx-auto mb-2"
            draggable="false"
          />
          <div className="font-montserrat font-bold text-h2 text-Primary leading-none">
            Selamat datang!
          </div>
          <div className="font-montserrat font-regular text-title1 leading-none text-Primary">
            masukan informasi login anda.
          </div>
          <div className="flex flex-col text-left gap-3 mt-8">
            <div>
              <label
                htmlFor="NIM"
                className="font-main text-title2 text-bw4 ml-2"
              >
                NIK
              </label>
              <input
                type="text"
                name="NIK"
                id="NIK"
                placeholder="05912348509"
                className="bg-transparent flex-1 text-title2 font-main focus:outline-none flex flex-row border border-bw3 bg-bw1 rounded-main px-3.5 py-4 w-full h-fit"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="font-main text-title2 text-bw4 ml-2 mt-5 "
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="******"
                className="bg-transparent flex-1 text-title2 font-main focus:outline-none flex flex-row border border-bw3 bg-bw1 rounded-main px-3.5 py-4 w-full h-fit"
              />
            </div>
            <button
              onClick={() => navigate('/dashboard')}
              className="flex flex-row px-3.5 py-2.5 justify-center items-center bg-Primary rounded-main font-main text-title1 text-bw2 font-semibold border-2 hover:brightness-110 active:brightness-90 select-none mt-3"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
