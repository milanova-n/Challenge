export const generateLineStyle = (lines: number) => {
  return {
    overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: lines,
            WebkitBoxOrient: "vertical",
  }
}