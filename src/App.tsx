import React from "react";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import {
  Stack,
  Select,
  MenuItem,
  CardContent,
  Typography,
  Avatar,
  Card,
  CardHeader,
  SelectChangeEvent,
  FormControl,
  InputLabel,
} from "@mui/material";
import { repositories } from "./repositories";

export type RepoObject = {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
  };
  html_url: string;
  description: string | null;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: string | null;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string | null;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_discussions: boolean;
  forks_count: number;
  mirror_url: string | null;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: string | null;
  allow_forking: boolean;
  is_template: boolean;
  web_commit_signoff_required: boolean;
  topics: string[];
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
};

function App() {
  const [repos, setRepos] = useState<RepoObject[]>(repositories);
  const [filteredRepos, setFilteredRepos] = useState<RepoObject[]>([]);
  const [languages, setLanguages] = useState(["JavaScript", "HTML"]);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [sortingOptions] = useState(["A-Z", "Z-A", "No sorting"]);
  const [selectedSortingOption, setSelectedSortingOption] = useState("");

  const handleTextFieldChange = (username: string) => {
    if (username === "") setRepos([]);
    // axios
    //   .get(`https://api.github.com/users/${username}/repos`)
    //   .then((response) => {
    //     setRepos(response.data); // Store the data in state

    //     const languagesList = response.data.map(
    //       (repo: RepoObject) => repo.language || "No language"
    //     );
    //     languagesList.push("All languages");
    //     setLanguages(Array.from(new Set(languagesList)));
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching data:", error);
    //   });
  };

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedLanguage(event.target.value);
  };

  const handleChangeSort = (event: SelectChangeEvent<string>) => {
    setSelectedSortingOption(event.target.value);
  };

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

  const reposToDisplay = filteredRepos?.length > 0 ? filteredRepos : repos;
  return (
    <>
      <Stack
        direction="column"
        sx={{ display: "flex", alignItems: "center", margin: "20px" }}
      >
        <Stack
          direction="column"
          spacing={2}
          sx={{ width: "80%", margin: "20px" }}
        >
          <TextField
            fullWidth
            label="Search for repos by username"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleTextFieldChange(event?.target.value)
            }
          />
          {repos?.length > 0 && (
            <>
              <FormControl sx={{ width: "100%" }}>
                <InputLabel>Programming Language</InputLabel>
                <Select
                  label="Programming language"
                  value={selectedLanguage}
                  onChange={handleChange}
                >
                  {languages.map((language) => (
                    <MenuItem value={language}>{language}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl sx={{ width: "100%" }}>
                <InputLabel>Sort by</InputLabel>
                <Select
                  label="Sort by"
                  value={selectedSortingOption}
                  onChange={handleChangeSort}
                >
                  {sortingOptions.map((sortOption) => (
                    <MenuItem value={sortOption}>{sortOption}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </>
          )}
        </Stack>
        <Stack spacing={2} sx={{ width: "80%" }}>
          {reposToDisplay.map((repo) => (
            <Card>
              <CardHeader
                avatar={
                  <a
                    href={repo["owner"]["html_url"]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Avatar src={`${repo["owner"]["avatar_url"]}`}></Avatar>
                  </a>
                }
                title={
                  <a
                    href={repo["html_url"]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Typography>{repo["name"]}</Typography>
                  </a>
                }
              ></CardHeader>
              <CardContent>
                <Typography
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {repo["description"]}
                </Typography>
                <Typography>
                  Open Issues: {repo["open_issues_count"]}
                </Typography>
                <Typography> Watchers: {repo["watchers"]}</Typography>
                {repo["language"] && (
                  <Typography> Language: {repo["language"]}</Typography>
                )}
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Stack>
    </>
  );
}

export default App;
