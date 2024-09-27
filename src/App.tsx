import React from "react";
import { useEffect, useState } from "react";
import { Stack } from "@mui/material";
//import { repositories } from "./repositories"; used for testing
import { type RepoObject } from "./types";
import SearchAndFilter from "./components/Search&Filter";
import InfoCard from "./components/Card";

function App() {
  const [repos, setRepos] = useState<RepoObject[]>([]);
  const [filteredRepos, setFilteredRepos] = useState<RepoObject[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [sortingOptions] = useState(["A-Z", "Z-A"]);
  const [selectedSortingOption, setSelectedSortingOption] = useState("");
  const [isInputDeleted, setIsInputDeleted] = useState(false);

  useEffect(() => {
    if (selectedLanguage) {
      if (selectedLanguage === "All languages") setFilteredRepos(repos);
      setFilteredRepos(
        repos?.filter(
          (repo) =>
            repo["language"] === selectedLanguage ||
            (repo["language"] === null && selectedLanguage === "No language")
        )
      );
    }
  }, [selectedLanguage, repos]);

  useEffect(() => {
    if (selectedSortingOption) {
      // If we have already filtered the repos, we should sort the filtered repos
      const reposToSort =
        filteredRepos?.length > 0 ? [...filteredRepos] : [...repos];
      const sortedRepos = [...reposToSort].sort(
        (a: RepoObject, b: RepoObject) => {
          if (selectedSortingOption === "A-Z") {
            return a.name.localeCompare(b.name);
          } else if (selectedSortingOption === "Z-A") {
            return b.name.localeCompare(a.name);
          }
          return 0;
        }
      );
      setFilteredRepos(sortedRepos);
    }
  }, [selectedSortingOption, repos, filteredRepos]);

  useEffect(() => {
    if (isInputDeleted) {
      setSelectedLanguage("");
      setSelectedSortingOption("");
      setRepos([]);
      setFilteredRepos([]);
    }
  }, [isInputDeleted]);

  const reposToDisplay = filteredRepos?.length > 0 ? filteredRepos : repos;
  return (
    <Stack
      direction="column"
      sx={{ display: "flex", alignItems: "center", margin: "20px" }}
    >
      <SearchAndFilter
        setRepos={setRepos}
        setLanguages={setLanguages}
        repos={repos}
        selectedLanguage={selectedLanguage}
        selectedSortingOption={selectedSortingOption}
        sortingOptions={sortingOptions}
        languages={languages}
        setSelectedLanguage={setSelectedLanguage}
        setSelectedSortingOption={setSelectedSortingOption}
        setIsInputDeleted={setIsInputDeleted}
      ></SearchAndFilter>
      <Stack spacing={2} sx={{ width: "80%" }}>
        {reposToDisplay.map((repo) => (
          <InfoCard repo={repo} />
        ))}
      </Stack>
    </Stack>
  );
}

export default App;
