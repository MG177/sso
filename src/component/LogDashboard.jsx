
import { useEffect, useRef, useState } from 'react';

import Search from './Search';

import log from '../dummy/userLog';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function Log() {
    const dt = useRef(null);
    const status = (rowData) => {
        const { status } = rowData;
        return (
            <div
                className={`${status.isSuccess ? 'text-green-500' : 'text-red-500'
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
                <div className="flex flex-row items-end justify-between mb-5">
                    <h1 className="font-semibold font-main text-h1 text-bw4">User Log</h1>
                    {/* <p className="font-semibold font-main text-bw4">{user}</p> */}
                </div>
                <div className="flex flex-row items-end justify-between mb-5">
                    <Search />
                </div>
            </div>
            <div className="overflow-hidden shadow-lg rounded-main border-bw2 bg-bw1">
                <DataTable
                    ref={dt}
                    value={log}
                    paginator
                    rows={25}
                    rowsPerPageOptions={[25, 50, 100]}
                    size="sm"
                    sortField="id"
                    sortOrder={1}
                    removableSort
                    scrollable
                    scrollHeight="calc(100vh - 300px)"
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