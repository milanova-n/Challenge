import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { HandleChangeType } from "../types";
const Filter: React.FC<{
  label: string;
  value: string;
  handleChange: HandleChangeType;
  sortingOptions: string[];
}> = ({ label, value, handleChange, sortingOptions }) => {
  return (
    <FormControl sx={{ width: "100%" }}>
      <InputLabel>{label}</InputLabel>
      <Select label={label} value={value} onChange={handleChange}>
        {sortingOptions.map((sortOption: string) => (
          <MenuItem value={sortOption}>{sortOption}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Filter;
