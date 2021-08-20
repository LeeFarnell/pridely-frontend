import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { useUserContext } from "../../contexts/UserProvider";
import { BUSINESS_SEARCH } from "../../queries";

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
    return <div>loading</div>;
  }

  if (error) {
    return <div>error</div>;
  }

  const searchResults = data.businessSearch;

  return (
    <div>
      {searchResults.map((result) => {
        return (
          <div key={result.id}>
            <div>{result.name}</div>
            <div>{result.username}</div>
            <div>{result.businessName}</div>
            <div>{result.email}</div>
            <div>{result.country}</div>
            <div>{result.region}</div>
            <div>{result.businessType}</div>

            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Search;
