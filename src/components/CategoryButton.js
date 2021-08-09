const styles = {
  margin: "20px 5px",
  padding: "10px",
  borderRadius: "5px",
  fontSize: "15px",
  backgroundColor: "#001219",
  color: "#edf6f9",
  fontWeight: "600",
  cursor: "pointer"
};

const CategoryButton = ({ category, setCategory }) => {
  const setCategoryHandler = (event) => {
    event.preventDefault();
    setCategory(event.target.value);
  };
  return (
    <button style={styles} onClick={setCategoryHandler} value={category}>
      {category}
    </button>
  );
};

export default CategoryButton;
