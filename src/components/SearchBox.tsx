import { TextField } from "@mui/material";
import {
  type SetReposType,
  type SetLanguagesType,
  RepoObject,
  SetIsInputDeleted,
} from "../types";
import axios from "axios";
const SearchBox: React.FC<{
  setRepos: SetReposType;
  setLanguages: SetLanguagesType;
  setIsInputDeleted: SetIsInputDeleted;
}> = ({ setRepos, setLanguages, setIsInputDeleted }) => {
  const handleTextFieldChange = (username: string) => {
    if (username === "") setIsInputDeleted(true);
    axios
      .get(`https://api.github.com/users/${username}/repos`)
      .then((response) => {
        setRepos(response.data);
        setIsInputDeleted(false);
        const languagesList = response.data.map(
          (repo: RepoObject) => repo.language || "No language" // Add option "No Language" if the repo doesnt have a specified language
        );
        languagesList.push("All languages"); //Add option "All languages" when you want to remove the selection of a specific language
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
