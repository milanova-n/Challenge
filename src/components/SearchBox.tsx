import { TextField } from "@mui/material";
import { type SetReposType, type SetLanguagesType, RepoObject } from "../types";
import axios from "axios";
const SearchBox: React.FC<{
  setRepos: SetReposType;
  setLanguages: SetLanguagesType;
}> = ({ setRepos, setLanguages }) => {
  const handleTextFieldChange = (username: string) => {
    if (username === "") setRepos([]);
    axios
      .get(`https://api.github.com/users/${username}/repos`)
      .then((response) => {
        setRepos(response.data); // Store the data in state

        const languagesList = response.data.map(
          (repo: RepoObject) => repo.language || "No language"
        );
        languagesList.push("All languages");
        setLanguages(Array.from(new Set(languagesList)));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <TextField
      fullWidth
      label="Search for repos by username"
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        handleTextFieldChange(event?.target.value)
      }
    />
  );
};

export default SearchBox;
