import { useRef } from "react";
const styles = {
  buttonStyles: {
    backgroundColor: "#f44336",
    color: "white",
    width: "100px",
    padding: "8px",
    borderRadius: "5px",
    cursor: "pointer"
  },
  inputStyles: {
    padding: "8px",
    borderRadius: "5px",
    width: "300px"
  }
};
const SearchBar = ({ setCategory }) => {
  const inputRef = useRef();
  const setCategoryHandler = (event) => {
    event.preventDefault();
    setCategory(inputRef.current.value);
  };
  return (
    <div style={{ margin: "10px" }}>
      <input type="text" style={styles.inputStyles} ref={inputRef} />
      <button style={styles.buttonStyles} onClick={setCategoryHandler}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
