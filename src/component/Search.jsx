export default function Search() {
    return (
        <div className="flex flex-row border border-bw3 bg-bw1 rounded-main px-3.5 py-2 w-full h-fit">
            <span
                className="flex items-center pr-3 text-base font-normal text-center text-black rounded input-group-text"
                id="basic-addon2"
            >
                <i className="text-black pi pi-search" />
            </span>
            <input
                type="text"
                name="search"
                id="search"
                placeholder="Search"
                className="flex-1 bg-transparent text-body font-main focus:outline-none"
            />
        </div>
    );
}