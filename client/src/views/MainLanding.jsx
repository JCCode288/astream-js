import { toast } from "react-toastify";
import { useLazyQuery, useQuery } from "@apollo/client";
import { GET_RECENT_ANIMES, GET_SEARCHED_ANIMES } from "../store/anime";
import { Anicard, SearchBar } from "../components";
import Loader from "../components/Loader";
import { useState } from "react";

export default function MainLanding() {
  let { loading, error, data: animes } = useQuery(GET_RECENT_ANIMES);
  let [searchQuery, setSearchQuery] = useState("");

  if (loading) {
    console.log(loading);
  }
  if (error) {
    toast(error.message);
  }

  let [loadSearchedAnimes, { called, error: errorSearch, data: searched }] =
    useLazyQuery(GET_SEARCHED_ANIMES, {
      variables: {
        query: { searchQuery },
      },
    });

  let [
    loadRecentAnimes,
    { called: recentCalled, error: errorRecent, data: recentAnimesReload },
  ] = useLazyQuery(GET_RECENT_ANIMES);

  let recentAnimes = animes?.recentAnimes?.results;

  let queryCall;

  if (called) {
    recentAnimes = searched?.searchAnimes?.results;
    called = false;
  }

  if (recentCalled) {
    recentAnimes = recentAnimesReload?.recentAnimes?.results;
    recentCalled = false;
  }

  if (errorSearch) {
    toast.error(errorSearch.message);
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="container justify-center flex flex-row gap-4 flex-wrap">
          <SearchBar
            searchAnimes={{ loadSearchedAnimes, loadRecentAnimes }}
            setSearch={setSearchQuery}
          />
          {recentAnimes?.map((el) => (
            <Anicard anime={el} key={el.id} />
          ))}
        </div>
      )}
    </>
  );
}
