import loginBg from '../assets/bg.svg';
import logo from '../assets/Lumen.svg';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="relative overflow-hidden">
      <img
        src={loginBg}
        alt="login"
        className="w-full h-screen object-cover select-none z-0"
        draggable="false"
      />
      <div className="left-0 top-0 h-screen w-full z-20 absolute flex items-center justify-center select-none drop-shadow-xl">
        <div className="bg-bw1 rounded-main p-6 text-center w-5/6 md:max-w-fit mb-44 md:mb-0">
          <img
            src={logo}
            alt="logo"
            className="w-24 md:w-40 mx-auto md:mb-2"
            draggable="false"
          />
          <div className="font-montserrat font-bold text-h4 text-Primary md:leading-none md:text-h2">
            Selamat datang!
          </div>
          <div className="font-montserrat font-regular text-body md:text-title1 leading-none text-Primary">
            masukan informasi login anda.
          </div>
          <div className="flex flex-col text-left gap-3 mt-4 mb:mt-8">
            <div>
              <label
                htmlFor="NIM"
                className="font-main text-body md:text-title2 text-bw4 ml-2 "
              >
                NIK
              </label>
              <input
                type="text"
                name="NIK"
                id="NIK"
                placeholder="05912348509"
                className="bg-transparent flex-1 text-body md:text-title2 font-main focus:outline-none flex flex-row border border-bw3 bg-bw1 rounded-main py-2.5 px-3 md:px-3.5 md:py-4 w-full h-fit"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="font-main text-body md:text-title2 text-bw4 ml-2 "
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="******"
                className="bg-transparent flex-1 text-body md:text-title2 font-main focus:outline-none flex flex-row border border-bw3 bg-bw1 rounded-main py-2.5 px-3 md:px-3.5 md:py-4 w-full h-fit"
              />
            </div>
            <button
              onClick={() => navigate('/dashboard')}
              className="flex flex-row px-2.5 py-1.5  md:px-3.5 justify-center items-center bg-Primary rounded-main font-main text-title1 text-bw2 font-semibold border-2 hover:brightness-110 active:brightness-90 select-none mt-3"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
