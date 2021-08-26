import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { useHistory } from "react-router-dom";

import Button from "../button";

import "./index.css";
import { useUserContext } from "../../contexts/UserProvider";

const SearchBar = (props) => {
  const { state, dispatch } = useUserContext();

  const [currentType, setCurrentType] = useState(state.search.type);
  const [country, setCountry] = useState(state.search.country);
  const [region, setRegion] = useState(state.search.region);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const history = useHistory();

  const onSubmit = (payload) => {
    try {
      dispatch({
        type: "SEARCH",
        payload,
      });
      history.push("/search");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="search-bar-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <select
            className="searchbar-input"
            defaultValue={currentType}
            onChange={setCurrentType}
            {...register("type", { required: true })}
          >
            <option value="Animation">Animation</option>
            <option value="Art">Art</option>
            <option value="Crafts">Crafts</option>
            <option value="Dance">Dance</option>
            <option value="Event Planning">Event Planning</option>
            <option value="Fashion">Fashion</option>
            <option value="Film/Video">Film/Video</option>
            <option value="Graphic Design">Graphic Design</option>
            <option value="Hair/Make Up">Hair/Make Up</option>
            <option value="Illustration">Illustration</option>
            <option value="Interior Design">Interior Design</option>
            <option value="Music">Music</option>
            <option value="Photography">Photography</option>
            <option value="Product Design">Product Design</option>
            <option value="Web Design">Web Design</option>
            <option value="Writing">Writing</option>
            <option value="Other">Other</option>
          </select>

          <Controller
            control={control}
            name="country"
            render={({ field: { onChange, onBlur, value, name, ref } }) => (
              <CountryDropdown
                className="searchbar-input"
                value={country}
                onChange={(data) => {
                  onChange(data);
                  setCountry(data);
                }}
              />
            )}
          />
          <Controller
            control={control}
            name="region"
            render={({ field: { onChange, onBlur, value, name, ref } }) => (
              <RegionDropdown
                className="searchbar-input"
                disableWhenEmpty={true}
                country={country}
                value={region}
                onChange={(data) => {
                  onChange(data);
                  setRegion(data);
                }}
              />
            )}
          />
          <Button name="Search" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
