import Header from "../components/Header/Header";
import MoviesCollectionSection from "../components/MoviesCollectionSection/MoviesCollectionSection";
import NavTabs from "../components/NavTabs/NavTabs";

const HomePage = () => {
  return (
    <>
      <Header subHeaderTitle="Home">
        <NavTabs />
      </Header>
      <main className="home-page__main-container">
        <MoviesCollectionSection title="Now Playing" url="/movie/now_playing" />
        <MoviesCollectionSection title="Trending" url="/trending/movie/week" />
        <MoviesCollectionSection title="Top Rated" url="/movie/top_rated" />
      </main>
    </>
  );
};
export default HomePage;
