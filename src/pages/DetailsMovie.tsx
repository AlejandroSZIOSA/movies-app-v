import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import { useGetMovieDetails } from "../hooks/useGetMovieDetails";
import SpinnerLoader from "../components/SpinnerLoader/SpinnerLoader";
import CustomButton from "../components/CustomButton/CustomButton";
import { type TMDBMovieResultsType } from "../services/Apis.types";
import ActorsSection from "../components/detailsMoviePage/ActorsSection/ActorsSection";
import GenresSection from "../components/detailsMoviePage/GenresSection/GenresSection";
import NavTabs from "../components/NavTabs/NavTabs";
import Messages from "../components/Messages/Messages";

import { API_IMAGE_BASE_URL } from "../services/Apis";

const DetailsMoviePage = () => {
  const navigate = useNavigate();
  const { id } = useParams<string>();

  const endpoint = id ? "/movie/" + id : "";

  const {
    data: movieDetails,
    loading,
    error,
  } = useGetMovieDetails<TMDBMovieResultsType>(endpoint);

  if (!id) {
    return <Messages>No movie ID provided.</Messages>;
  }

  return (
    <>
      <Header subHeaderTitle="Movie Details">
        <NavTabs />
      </Header>
      <main className="details-pages__main-container">
        {loading && <SpinnerLoader spinnerPosition="center" />}
        {error && <Messages> {error}</Messages>}
        {!loading && !error && movieDetails && (
          <div className="details-pages__inner-container">
            <div className="details-pages__intro-container">
              <section className="details-pages__inner-intro-section">
                {movieDetails.poster_path ? (
                  <img
                    src={API_IMAGE_BASE_URL + movieDetails.poster_path}
                    alt={movieDetails.title}
                  />
                ) : (
                  <div className="details-pages__no-image-container">
                    <p style={{ textAlign: "center" }}>No Movie imagen</p>
                  </div>
                )}
                <h2 className="details-pages-mobile__title">
                  {movieDetails.title}
                  {"  "}
                  {movieDetails.adult && (
                    <span>
                      <strong>(18+)</strong>
                    </span>
                  )}{" "}
                </h2>
              </section>
              <article>
                <h3>Overview</h3>
                <p>{movieDetails.overview}</p>
              </article>
            </div>
            <GenresSection genres={movieDetails.genres} />
            {id && <ActorsSection id={id} />}
            <div className="details-pages__btn-outer-container">
              <CustomButton variant="back" onClick={() => navigate(-1)} />
            </div>
          </div>
        )}
      </main>
    </>
  );
};
export default DetailsMoviePage;
