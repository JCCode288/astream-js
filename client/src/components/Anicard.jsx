import { Link } from "react-router-dom";

export default function Anicard({ anime }) {
  return (
    <div className="card sm:card-side bg-base-100 shadow-xl">
      <figure>
        <img className="w-52" src={anime?.image} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title flex flex-wrap w-52">{anime?.title}</h2>
        <p>Episode : {anime?.episodeNumber ? anime?.episodeNumber : ""}</p>
        <div className="card-actions justify-end">
          <Link to={`anime/${anime.id}`}>
            <button className="btn bg-green-600 border-none hover:bg-green-800">
              Watch
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
