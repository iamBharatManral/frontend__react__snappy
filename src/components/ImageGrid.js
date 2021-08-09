import Image from "./Image";
const styles = {
  display: "grid",
  grid: "repeat(4, 100px)/repeat(4, 150px)",
  gap: "5px"
};

const ImageGrid = ({ category }) => {
  const url = `https://picsum.photos/200/300?${category}`;
  return (
    <div style={styles}>
      {Array.from(Array(16)).map(() => {
        return <Image url={url} key={Math.floor(Math.random() * 100000)} />;
      })}
    </div>
  );
};

export default ImageGrid;
