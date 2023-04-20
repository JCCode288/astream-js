import { toast } from "react-toastify";
import { useLazyQuery, useQuery } from "@apollo/client";
import { GET_RECENT_ANIMES, GET_SEARCHED_ANIMES } from "../store/anime";
import { Anicard, SearchBar } from "../components";
import Loader from "../components/Loader";
import { useEffect, useMemo, useState } from "react";

export default function MainLanding() {
  let [searchQuery, setSearchQuery] = useState("");

  let { loading, error, data } = useQuery(GET_RECENT_ANIMES);

  let [
    loadSearchedAnimes,
    { called, error: errorSearch, data: searched, loading: searchLoading },
  ] = useLazyQuery(GET_SEARCHED_ANIMES, {
    variables: {
      query: { searchQuery },
    },
  });

  useEffect(() => {
    if (searchQuery) {
      loadSearchedAnimes();
    }
  }, [searchQuery]);

  let recentAnimes = useMemo(() => {
    if (!searchQuery.length) {
      return data?.recentAnimes?.results;
    } else {
      return searched?.searchAnimes?.results;
    }
  }, [searchQuery, data, searched]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    toast(error.message);
  }

  if (errorSearch) {
    toast.error(errorSearch.message);
  }

  return (
    <>
      <div className="justify-center flex flex-row gap-8 flex-wrap w-screen">
        <SearchBar setSearch={setSearchQuery} />
        {searchLoading ? (
          <Loader />
        ) : (
          recentAnimes?.map((el) => <Anicard anime={el} key={el.id} />)
        )}
      </div>
    </>
  );
}
