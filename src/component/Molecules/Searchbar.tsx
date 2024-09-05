import { useRef, useState, useEffect } from "react";
import Image from "../Atomic/Icon";
import Text from "../Atomic/Text";
import TextInput from "../Atomic/TextInput";
import useApi from "../Hooks/useApi";
import Modal from "../utils/Modal";
import Alert from "../utils/Alert";

const Searchbar = ({
  handleClick,
}: {
  handleClick: (search: string) => void;
}) => {
  const [search, setSearch] = useState("");
  const hidden = useRef<HTMLUListElement>(null);
  const { data, loading, error } = useApi(
    search
      ? `https://api.weatherapi.com/v1/search.json?key=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&q=${search}`
      : null
  );
  const [history, setHistory] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const storedHistory = JSON.parse(
      localStorage.getItem("searchHistory") || "[]"
    );
    setHistory(storedHistory);
  }, []);

  const saveToHistory = (term: string) => {
    if (term && !history.includes(term)) {
      const newHistory = [term, ...history].slice(0, 8);
      setHistory(newHistory);
      localStorage.setItem("searchHistory", JSON.stringify(newHistory));
    }
  };

  const handleSearch = () => {
    if (search) {
      saveToHistory(search);
      handleClick(search);
      if (hidden.current) hidden.current.style.display = "none";
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearch(suggestion);
    handleSearch();
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex flex-col">
      <div>
        <TextInput
          type="text"
          placeholder="Search Location..."
          onChange={(event) => {
            setSearch(event.target.value);
          }}
          value={search}
        />
        <div className="search-icon" onClick={handleSearch}>
          <Image src="search.svg" width="28px" height="28px" />
        </div>
      </div>
      <button className="search-history-button" onClick={toggleModal}>
        View Search History
      </button>
      {loading ? (
        <Alert type="info" message="Loading..."></Alert>
      ) : error ? (
        <Alert type="error" message={error.message}></Alert>
      ) : Array.isArray(data) && data.length > 0 ? (
        <ul className="suggestion" ref={hidden}>
          {data.map((suggestion: any) => (
            <li
              className="suggestion__item"
              key={suggestion.id}
              onClick={() => handleSuggestionClick(suggestion.name)}
            >
              <Text type="h4" color="black">
                {suggestion.name}
              </Text>
            </li>
          ))}
        </ul>
      ) : null}

      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <Text type="h4">Search History</Text>
        {history.length > 0 ? (
          <ul>
            {history.map((item, index) => (
              <li
                key={index}
                className="history__item"
                onClick={() => {
                  handleSuggestionClick(item);
                  toggleModal();
                }}
              >
                <Text type="h4">{item}</Text>
              </li>
            ))}
          </ul>
        ) : (
          <Text type="p">No search history available.</Text>
        )}
      </Modal>
    </div>
  );
};

export default Searchbar;
