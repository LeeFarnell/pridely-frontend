import { useQuery } from "@apollo/client";
import React from "react";

import UserCard from "../../components/user-card";
import { useUserContext } from "../../contexts/UserProvider";
import { BUSINESS_SEARCH } from "../../queries";
import ErrorMessage from "../../components/error-message";
import LoadingSpinner from "../../components/loading";
import NoSearchResults from "../../components/no-search-results";

import "./index.css";

const Search = (props) => {
  const { state } = useUserContext();

  const { data, error, loading, refetch } = useQuery(BUSINESS_SEARCH, {
    variables: {
      businessSearchBusinessType: state.search.type,
      businessSearchCountry: state.search.country,
      businessSearchRegion: state.search.region,
    },
  });

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage returnTo={"/"} />;
  }

  if (data.businessSearch.length === 0) {
    return <NoSearchResults returnTo={"/"} />;
  }

  const searchResults = data.businessSearch;
  const followers = data.allFollowers;

  return (
    <div className="search-card-container">
      {searchResults.map((result) => {
        const isFollowing = followers.findIndex((follower) => {
          return follower.id === result.id;
        });

        return (
          <UserCard
            result={result}
            isFollowing={isFollowing}
            key={result.id}
            refetch={refetch}
          />
        );
      })}
    </div>
  );
};

export default Search;
