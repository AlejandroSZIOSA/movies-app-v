import React from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header/Header";
import NavTabs from "../components/NavTabs/NavTabs";
import SearchResultsList from "../components/SearchResultsList/SearchResultsList";
import Messages from "../components/Messages/Messages";
import SearchBar from "../components/SearchBar/SearchBar";

const SearchPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") || "";
  const [inputSearch, setInputSearch] = React.useState<string>(query);

  const handleSearch = () => {
    setSearchParams({
      query: inputSearch,
      page: "1",
    });
    setInputSearch("");
  };

  return (
    <>
      <Header
        subHeaderTitle={"Search"}
        afterSubHeader={
          <SearchBar
            inputSearch={inputSearch}
            setInputSearch={setInputSearch}
            handleSearch={handleSearch}
          />
        }
      >
        <NavTabs />
      </Header>
      <main className="search-page__main-container">
        {query ? (
          <SearchResultsList queryInput={query} />
        ) : (
          <Messages>
            <h4 style={{ textAlign: "center" }}>Enter a movie to search </h4>
          </Messages>
        )}
      </main>
    </>
  );
};
export default SearchPage;
