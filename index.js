import dotenv from "dotenv";
dotenv.config();
import { search } from "./api";
import { appendMovies, clearMovies, setMessage } from "./ui";

(() => {
  const handleSearchButtonClick = () => {
    const searchTerm = document.getElementById("search-pane-input").value;

    clearMovies();
    setMessage("searching, please wait...");
    search(searchTerm)
      .then((response) => {
        setMessage();
        if (response.Response === "True") {
          appendMovies(response.Search);
          console.log(response);
        } else {
          setMessage("Could not find anything");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  window.addEventListener("load", () => {
    document
      .getElementById("search-pane-button")
      .addEventListener("click", handleSearchButtonClick);
  });
})();
