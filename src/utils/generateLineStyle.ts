// simplify styles
// we can use ellipsis now and an arbitrary number of lines -> can be reused
export const generateLineStyle = (lines: number) => {
  return {
    overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: lines,
            WebkitBoxOrient: "vertical",
  }
}