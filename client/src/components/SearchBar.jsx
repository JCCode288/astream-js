export default function SearchBar({ searchAnimes, setSearch }) {
  function handleSearch(e) {
    setSearch(e.target.value);
  }
  return (
    <div className="block w-full form-control mt-4">
      <div className="input-group">
        <input
          onChange={handleSearch}
          type="text"
          placeholder="Search…"
          className="input input-bordered w-3/4"
        />
        <button className="btn btn-square cursor-default">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
