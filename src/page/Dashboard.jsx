import { Routes, Route } from 'react-router-dom';
import Header from '../component/Header';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useEffect, useRef, useState } from 'react';
import log from '../dummy/userLog';
import data from '../dummy/userData';
import app from '../dummy/appData';

export default function Dashboard() {
  return (
    <div className="">
      <Header />
      <div className="mx-5">
        <Routes>
          <Route path="/log" element={<Log />} />
          <Route path="/userManager" element={<UserManager />} />
          <Route path="/appManager" element={<AppManager />} />
        </Routes>
      </div>
    </div>
  );
}

function Log() {
  const dt = useRef(null);
  const status = (rowData) => {
    const { status } = rowData;
    return (
      <div
        className={`${
          status.isSuccess ? 'text-green-500' : 'text-red-500'
        } font-main font-semibold`}
      >
        {status.message}
      </div>
    );
  };
  const time = (rowData) => {
    const { date, time } = rowData;
    return <div>{`${date} at ${time}`}</div>;
  };
  return (
    <div>
      <div className="w-full h-fit bg-bw2">
        <div className="flex flex-row justify-between items-end mb-5">
          <h1 className="font-main font-semibold text-h1 text-bw4">User Log</h1>
        </div>
        <div className="flex flex-row justify-between items-end mb-5">
          <Search />
        </div>
      </div>
      <div className="h-[70vh] rounded-main shadow-lg border-bw2 overflow-hidden bg-bw1">
        <DataTable
          ref={dt}
          value={log}
          paginator
          rows={15}
          rowsPerPageOptions={[15, 25, 50]}
          size="sm"
          sortField="id"
          sortOrder={1}
          removableSort
          scrollable
          scrollHeight="flex"
          rounded
          // paginatorRight={footer}
          // paginatorLeft={<div></div>}
        >
          <Column field="id" header="No." />
          <Column field="nim" header="NIP/NIM" className="font-bold" />
          <Column field="name" header="Name" />
          <Column field="app" header="App" />
          <Column body={time} header="Date & Time" />
          <Column body={status} header="Date & Time" />
        </DataTable>
      </div>
    </div>
  );
}

function UserManager() {
  const dt = useRef(null);
  const [user, setUser] = useState({});
  const [passwordEditor, setPasswordEditor] = useState(false);
  const dialog = document.querySelector('#dialog');
  if (dialog !== null) {
    dialog.addEventListener('click', (e) => {
      const dialogDimensions = dialog.getBoundingClientRect();
      if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
      ) {
        dialog.close();
      }
    });
  }

  const closeModal = () => {
    if (dialog !== null) {
      dialog.close();
    }
  };

  const handlePasswordEditor = () => {
    setPasswordEditor(!passwordEditor);
  };

  const handleViewDetails = (rowData) => {
    const { nim, id, name, role } = rowData;
    const dialog = document.querySelector('#dialog');
    console.log(passwordEditor);
    return (
      <div className="flex justify-center w-fit">
        <Button
          label="View"
          className="p-button-rounded p-button-text"
          onClick={() => {
            console.log(nim);
            setUser({ nim, id, name, role });
            dialog.showModal();
          }}
        />
      </div>
    );
  };

  return (
    <div>
      <div className="w-full h-fit bg-bw2">
        <div className="flex flex-row justify-between items-end mb-5">
          <h1 className="font-main font-semibold text-h1 text-bw4">
            User Manager
          </h1>
        </div>
        <div className="flex flex-row justify-between items-end mb-5">
          <Search />
        </div>
      </div>
      <div className="h-[70vh] rounded-main shadow-lg border-bw2 overflow-hidden bg-bw1">
        <DataTable
          ref={dt}
          value={data}
          paginator
          rows={15}
          rowsPerPageOptions={[15, 25, 50]}
          size="sm"
          sortField="date"
          sortOrder={-1}
          removableSort
          scrollable
          scrollHeight="flex"
          rounded
          // paginatorRight={footer}
          // paginatorLeft={<div></div>}
        >
          <Column field="id" header="No." />
          <Column field="nim" header="NIP/NIM" className="font-bold" />
          <Column field="name" header="Name" />
          <Column field="role" header="role" />
          <Column body={handleViewDetails} header="View Details" />
        </DataTable>
      </div>
      <dialog className="h-fit rounded-main w-fit p-0" id="dialog">
        <div className="flex flex-row justify-between items-center gap-52 bg-bw2 py-3.5 px-6 ">
          <span className="font-semibold font-main text-bw3 text-h5">
            User Details
          </span>
          <i
            className="pi pi-times cursor-pointer transition ease-in-out hover:scale-110"
            onClick={closeModal}
          />
        </div>
        <div className="p-5">
          <div className="grid grid-cols-2 font-main text-title1 text-bw3 font-semibold ">
            <div>Nim</div>
            <div>: {user.nim}</div>
            <div>Name</div>
            <div>: {user.name}</div>
            <div>Role Title:</div>
            <div>: {user.role}</div>
          </div>
          <div className=" my-3">
            <div
              className={`flex flex-col gap-3 ${!passwordEditor && 'hidden'}`}
            >
              <hr className="bg-bw4 h-0.5 border-0 w-full"></hr>
              <input
                type="password"
                placeholder="Password"
                className="rounded-main px-3.5 py-3 bg-bw1 focus:outline-none border-bw3 border-2 border-solid"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="rounded-main px-3.5 py-3 bg-bw1 focus:outline-none border-bw3 border-2 border-solid"
              />
            </div>

            <div className="grid grid-cols-1">
              <hr className="bg-bw4 h-0.5 border-0 w-full"></hr>
              <i
                className={`pi pi-chevron-down cursor-pointer w-fit justify-self-end ${
                  passwordEditor && 'rotate-180 order-first'
                }`}
                onClick={handlePasswordEditor}
              />
            </div>
          </div>
          <div className="flex flex-row justify-end">
            <Button label="Cancel" isFill={false} />
            <Button label="Confirm" isFill={true} />
          </div>
        </div>
      </dialog>
    </div>
  );
}

function AppManager() {
  return <div>App Manager</div>;
}

function Search() {
  return (
    <div className="flex flex-row border border-bw3 bg-bw1 rounded-main px-3.5 py-2 w-full h-fit">
      <span
        className="input-group-text flex items-center rounded pr-3 text-center text-base font-normal text-black"
        id="basic-addon2"
      >
        <i className="text-black pi pi-search" />
      </span>
      <input
        type="text"
        name="search"
        id="search"
        // onChange={handleSearch}
        placeholder="Search"
        className="bg-transparent flex-1 text-body font-main focus:outline-none"
      />
    </div>
  );
}

function Button({ label, isFill, onClick }) {
  if (isFill) {
    return (
      <button
        onClick={onClick}
        className="flex flex-row py-1.5 px-4 justify-center items-center bg-bw3 rounded-main font-main text-title1 text-bw2 font-semibold border-2 hover:brightness-110 active:brightness-90 select-none"
      >
        {label}
      </button>
    );
  } else {
    return (
      <button
        onClick={onClick}
        className="flex flex-row py-1.5 px-4 justify-center items-center bg-bw1 rounded-main font-main text-title1 text-bw3 font-semibold border-bw3 border-2 hover:brightness-105 active:brightness-90 select-none"
      >
        {label}
      </button>
    );
  }
}
