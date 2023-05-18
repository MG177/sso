import { Routes, Route } from 'react-router-dom';
import Header from '../component/Header';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useRef } from 'react';
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
      <div className="h-[70vh] rounded-main shadow-lg border-bw2 overflow-hidden">
        <DataTable
          ref={dt}
          value={log}
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
          <Column field="app" header="App" />
          <Column field="date" header="Date & Time" />
        </DataTable>
      </div>
    </div>
  );
}

function UserManager() {
  const dt = useRef(null);
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
      <div className="h-[70vh] rounded-main shadow-lg border-bw2 overflow-hidden">
        <DataTable
          ref={dt}
          value={log}
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
          <Column field="app" header="App" />
          <Column field="date" header="Date & Time" />
        </DataTable>
      </div>
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
