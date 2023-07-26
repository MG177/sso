
import { useEffect, useRef, useState } from 'react';
import Search from './Search';

import data from '../dummy/userData';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function UserManager() {
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
                <div className="flex flex-row items-end justify-between mb-5">
                    <h1 className="font-semibold font-main text-h1 text-bw4">
                        User Manager
                    </h1>
                </div>
                <div className="flex flex-row items-end justify-between mb-5">
                    <Search />
                </div>
            </div>
            <div className="overflow-hidden shadow-lg rounded-main border-bw2 bg-bw1">
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
                    scrollHeight="calc(100vh - 300px)"
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
            <dialog className="p-0 h-fit rounded-main w-fit" id="dialog">
                <div className="flex flex-row justify-between items-center gap-52 bg-bw2 py-3.5 px-6 ">
                    <span className="font-semibold font-main text-bw3 text-h5">
                        User Details
                    </span>
                    <i
                        className="transition ease-in-out cursor-pointer pi pi-times hover:scale-110"
                        onClick={closeModal}
                    />
                </div>
                <div className="p-5">
                    <div className="grid grid-cols-2 font-semibold font-main text-title1 text-bw3 ">
                        <div>Nim</div>
                        <div>: {user.nim}</div>
                        <div>Name</div>
                        <div>: {user.name}</div>
                        <div>Role Title:</div>
                        <div>: {user.role}</div>
                    </div>
                    <div className="my-3 ">
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
                                className={`pi pi-chevron-down cursor-pointer w-fit justify-self-end ${passwordEditor && 'rotate-180 order-first'
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