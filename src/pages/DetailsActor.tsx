import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { type TMDBActorDataType } from "../services/Apis.types";
import { useGetMovieDetails } from "../hooks/useGetMovieDetails";
import MoviesActorSection from "../components/detailsActorPage/MoviesActorSection/MoviesActorSection";
import SpinnerLoader from "../components/SpinnerLoader/SpinnerLoader";
import Messages from "../components/Messages/Messages";
import Header from "../components/Header/Header";
import NavTabs from "../components/NavTabs/NavTabs";
import CustomButton from "../components/CustomButton/CustomButton";
import { API_IMAGE_BASE_URL } from "../services/Apis";

const DetailsActorPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<string>();

  const endpoint = id ? "/person/" + id : "";

  const {
    data: actor,
    loading,
    error,
  } = useGetMovieDetails<TMDBActorDataType>(endpoint);

  if (!id) {
    return <Messages>No actor ID provided.</Messages>;
  }

  return (
    <>
      <Header subHeaderTitle="Details Actor">
        <NavTabs />
      </Header>
      <main className="details-pages__main-container">
        {loading && <SpinnerLoader spinnerPosition="center" />}
        {error && <Messages> {error}</Messages>}
        {!loading && !error && actor && (
          <div className="details-pages__inner-container">
            <div className="details-pages__intro-container">
              <section className="details-pages__inner-intro-section">
                {actor.profile_path ? (
                  <img
                    src={API_IMAGE_BASE_URL + actor.profile_path}
                    alt={actor.name}
                  />
                ) : (
                  <div className="details-pages__no-image-container">
                    <p>No Actor picture</p>
                  </div>
                )}
                <h2>{actor.name}</h2>
              </section>

              <article>
                <h3>Biography</h3>
                {actor.biography ? (
                  <p>{actor.biography}</p>
                ) : (
                  <p style={{ textAlign: "center" }}>No-Biography</p>
                )}
              </article>
            </div>
            <MoviesActorSection id={id} />
            <div className="details-pages__btn-outer-container">
              <CustomButton variant="back" onClick={() => navigate(-1)} />
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default DetailsActorPage;
