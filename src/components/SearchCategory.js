import CategoryButton from "./CategoryButton";
const categories = ["mountains", "music", "animals", "beaches"];

const SearchCategory = ({ setCategory }) => {
  const styles = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  };
  return (
    <div style={styles}>
      {categories.map((cat, id) => (
        <CategoryButton key={id} category={cat} setCategory={setCategory} />
      ))}
    </div>
  );
};

export default SearchCategory;
