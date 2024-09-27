import {
  SetLanguagesType,
  SetReposType,
  RepoObject,
  SetLanguage,
  SetSortingOption,
  SetIsInputDeleted,
} from "../types";
import SearchBox from "./SearchBox";
import Filter from "./Filter";
import { Stack, SelectChangeEvent } from "@mui/material";
import React from "react";
const SearchAndFilter: React.FC<{
  setRepos: SetReposType;
  setLanguages: SetLanguagesType;
  repos: RepoObject[];
  selectedLanguage: string;
  selectedSortingOption: string;
  sortingOptions: string[];
  languages: string[];
  setSelectedLanguage: SetLanguage;
  setSelectedSortingOption: SetSortingOption;
  setIsInputDeleted: SetIsInputDeleted;
}> = ({
  setRepos,
  setLanguages,
  repos,
  selectedLanguage,
  selectedSortingOption,
  sortingOptions,
  languages,
  setSelectedLanguage,
  setSelectedSortingOption,
  setIsInputDeleted,
}) => {
  const handleChangeLanguage = (event: SelectChangeEvent<string>) => {
    setSelectedLanguage(event.target.value);
  };

  const handleChangeSort = (event: SelectChangeEvent<string>) => {
    setSelectedSortingOption(event.target.value);
  };
  return (
    <Stack direction="column" spacing={2} sx={{ width: "80%", margin: "20px" }}>
      <SearchBox
        setRepos={setRepos}
        setLanguages={setLanguages}
        setIsInputDeleted={setIsInputDeleted}
      ></SearchBox>
      {repos?.length > 0 && (
        <Stack direction="row" spacing={1}>
          <Filter
            label={"Programming Language"}
            value={selectedLanguage}
            handleChange={handleChangeLanguage}
            sortingOptions={languages}
          ></Filter>
          <Filter
            label={"Sort by"}
            value={selectedSortingOption}
            handleChange={handleChangeSort}
            sortingOptions={sortingOptions}
          ></Filter>
        </Stack>
      )}
    </Stack>
  );
};

export default SearchAndFilter;
