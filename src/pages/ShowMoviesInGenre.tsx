import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import MoviesByGenreList from "../components/MoviesByGenreList/MoviesByGenreList";
import { useGetAllGenres } from "../hooks/useGetAllGenres";
import Header from "../components/Header/Header";
import NavTabs from "../components/NavTabs/NavTabs";
import SpinnerLoader from "../components/SpinnerLoader/SpinnerLoader";
import Messages from "../components/Messages/Messages";
import CustomButton from "../components/CustomButton/CustomButton";

const ShowMoviesInGenrePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: genreList, loading, error } = useGetAllGenres();

  if (!id) {
    return <Messages>No genre ID provided.</Messages>;
  }
  const genreName = genreList?.find((genre) => genre.id === Number(id))?.name;

  return (
    <>
      <Header
        subHeaderTitle={
          loading
            ? "Loading genre..."
            : genreName
              ? `${genreName} Movies`
              : "Genre not found"
        }
      >
        <NavTabs />
      </Header>
      <main className="show-movies-in-genre-page__main-container">
        {loading && <SpinnerLoader spinnerPosition="center" />}
        {error && <Messages> {error}</Messages>}
        {!loading && !error && genreList && (
          <>
            <MoviesByGenreList genreId={id} />
            <div className="show-movies-in-genre-page__back-button-outer-container">
              <CustomButton variant="back" onClick={() => navigate(-1)} />
            </div>
          </>
        )}
      </main>
    </>
  );
};
export default ShowMoviesInGenrePage;
