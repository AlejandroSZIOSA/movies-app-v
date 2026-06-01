import React from "react";
import Header from "../components/Header/Header";
import Picker from "../components/Picker/Picker";
import NavTabs from "../components/NavTabs/NavTabs";
import MoviesByGenreList from "../components/MoviesByGenreList/MoviesByGenreList";
import { useGetAllGenres } from "../hooks/useGetAllGenres";
import { useSearchParams } from "react-router-dom";
import Messages from "../components/Messages/Messages";
import Selector from "../components/desktopUi/Selector/Selector";

const MoviesByGenrePage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams(); //fixed:side effect problem after render
  const genre = Number(searchParams.get("genre")) || 1;

  const { data: genreList, loading, error } = useGetAllGenres();

  const getGenreName = (id: number) => {
    const genreObj = genreList?.find((g) => g.id === id);
    return genreObj ? genreObj.name : "Unknown Genre";
  };

  const handleGenreChange = (id: number) => {
    setSearchParams({
      genre: String(id),
      page: "1",
    });
  };

  return (
    <>
      <Header
        subHeaderTitle="Genres"
        afterSubHeader={
          <div>
            {loading && <h2>Loading genres...</h2>}
            {error && <Messages>{error}</Messages>}
            {genreList && (
              <>
                <div className="movies-by-genre-page__pickerMobile-outer-container">
                  <Picker
                    genres={genreList}
                    onChange={handleGenreChange}
                    selectedGenre={getGenreName(genre === null ? 1 : genre)}
                  />
                </div>
                <div className="movies-by-genre-page__Desktop-outer-container">
                  <Selector
                    genres={genreList}
                    onChange={handleGenreChange}
                    selectedGenre={getGenreName(genre === null ? 1 : genre)}
                  />
                </div>
              </>
            )}
          </div>
        }
      >
        <NavTabs />
      </Header>
      <main className="movies-by-genre-page__main-container">
        <MoviesByGenreList
          genreId={genre === null || genre === 1 ? "" : genre.toString()}
        />
      </main>
    </>
  );
};
export default MoviesByGenrePage;
