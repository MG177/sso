import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="flex flex-row justify-between sticky px-3.5 py-6 bg-[#f4f7f5] w-full rounded-b-2xl shadow offset-y-1px blur-14 font-semibold font-fredoka text-3">
      <div className="flex flex-row gap-4 text-title2">
        <Link to="/log" className="flex flex-col align-middle gap-3">
          <div className=" font-fredoka">User Log</div>
          <hr className="bg-4 h-px border-0"></hr>
        </Link>
        <Link to="/userManager" className="flex flex-col align-middle gap-3">
          <div className="font-fredoka font-semibold">User Manager</div>
          <hr className="bg-4 h-px border-0"></hr>
        </Link>
        <Link to="/appManager" className="flex flex-col align-middle gap-3">
          <div className="font-fredoka font-semibold">App Manager</div>
          <hr className="bg-4 h-px border-0"></hr>
        </Link>
      </div>
      <div className="flex flex-row justify-end align-middle text-2xl gap-2">
        <div className="self-center">John Doe</div>
        <div className=" flex rounded-full bg-2 text-3 w-9 h-9 place-content-center border-2 border-3 self-center">
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
