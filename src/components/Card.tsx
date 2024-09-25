import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Avatar,
} from "@mui/material";
import { RepoObject } from "../types";
import { generateLineStyle } from "../utils/generateLineStyle";

const InfoCard: React.FC<{ repo: RepoObject }> = ({ repo }) => {
  return (
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
          <a href={repo["html_url"]} target="_blank" rel="noopener noreferrer">
            <Typography>{repo["name"]}</Typography>
          </a>
        }
      ></CardHeader>
      <CardContent>
        <Typography sx={generateLineStyle(2)}>{repo["description"]}</Typography>
        <Typography>Open Issues: {repo["open_issues_count"]}</Typography>
        <Typography> Watchers: {repo["watchers"]}</Typography>
        {repo["language"] && (
          <Typography> Language: {repo["language"]}</Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default InfoCard;
