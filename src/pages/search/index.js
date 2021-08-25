import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CircularIndeterminate from "../../components/loading";
import UserCard from "../../components/user-card";

import { useUserContext } from "../../contexts/UserProvider";
import { BUSINESS_SEARCH } from "../../queries";

import "./index.css";

const Search = (props) => {
  const { state, dispatch } = useUserContext();

  const { data, error, loading } = useQuery(BUSINESS_SEARCH, {
    variables: {
      businessSearchBusinessType: state.search.type,
      businessSearchCountry: state.search.country,
      businessSearchRegion: state.search.region,
    },
  });

  if (loading) {
    return (
      <div className="dashboard-container">
        <CircularIndeterminate />
      </div>
    );
  }

  if (error) {
    return <div>error</div>;
  }

  const searchResults = data.businessSearch;

  return (
    <div className="search-card-container">
      {searchResults.map((result) => {
        return <UserCard result={result} key={result.id} />;
      })}
    </div>
  );
};

export default Search;
