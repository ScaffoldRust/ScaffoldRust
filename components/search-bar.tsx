import { Search, ChevronDown, X } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [query, setQuery] = useState("");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [selectedFilters, setSelectedFilters] = useState<{
    [key: string]: string;
  }>({
    "Choose Category": "Choose Category",
    "Choose State": "Choose State",
    Ecosystem: "Ecosystem",
  });

  const categories = [
    {
      value: "Choose Category",
      label: "Choose Category",
      options: ["Rust", "JavaScript", "TypeScript", "Python"],
    },
    {
      value: "Choose State",
      label: "Choose State",
      options: ["React", "Svelte", "Next.js", "Vue"],
    },
    {
      value: "Ecosystem",
      label: "Ecosystem",
      options: ["Node.js", "Deno", "Bun", "Electron"],
    },
  ];

  const handleSelect = (category: string, option: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: option,
    }));
    setOpenDropdown(null);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="flex w-full flex-col items-center">
      <div className="gap-[16px] flex flex-col text-center">
        <h1 className="text-2xl sm:text-3xl md:text-[46.88px] font-bold text-[#0A0A0A]">Rust Templates for Stellar</h1>
        <p className="text-[#737373] md:text-[16.73px] font-light mt-2 pb-5">
        Explore our collection of optimized templates for Stellar development
        </p>
      </div>
      <div className="lg:w-[1024px] relative w-auto h-[50px] gap-4 flex lg:gap-[16px] p-[8px] items-center rounded-[9999px] bg-white shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
        {/* Search Input */}
        <div className="lg:w-[364px] sm:w-[300px] flex items-center h-[40px] pl-[8px] rounded-[6px]">
          <input
            type="text"
            placeholder="Search templates"
            className="w-full h-full md:w-[220px] lg:w-full p-[8px] text-sm text-[#0A0A0A] rounded-[6px] bg-transparent focus:outline-none"
            value={query}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
          />
          {query && (
            <X
              color="#0A0A0A"
              size={16}
              onClick={() => setQuery("")}
              className="cursor-pointer"
            />
          )}
        </div>

        {/* Mobile Dropdown */}
        <div>
          <ChevronDown
            className="md:hidden cursor-pointer"
            color="#0A0A0A"
            size={16}
            onClick={toggleVisibility}
          />
          <div
            className={`md:hidden sm:w-fit ${isVisible ? "hidden" : "flex"} absolute sm:left-0 right-10 sm:-bottom-[55px] top-14 flex-col sm:flex-row sm:rounded-full sm:h-[50px] sm:items-center justify-around bg-white flex items-start sm:gap-4`}>
            {categories.map((category) => (
              <div
                key={category.value}
                className="relative w-full rounded-lg  flex items-center justify-between">
                {/* Dropdown Button */}
                <button
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === category.value ? null : category.value
                    )
                  }
                  className="flex items-center justify-between px-4 py-2  bg-white sm:truncate w-full text-[13.02px] text-[#0A0A0A] rounded-lg sm:rounded-full md:rounded-lg text-left hover:bg-gray-100 transition-all duration-300">
                  {selectedFilters[category.value]}
                  <ChevronDown color="#0A0A0A" size={13} />
                </button>

                {/* Dropdown Menu */}
                {openDropdown === category.value && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute right-[150px] -top-2 sm:top-10 sm:right-0  mt-2 w-full bg-white text-[13px] text-[#0A0A0A] shadow-lg rounded-lg">
                    {category.options.map((option) => (
                      <li
                        key={option}
                        onClick={() => handleSelect(category.value, option)}
                        className="px-4 min-w-[140px] relative z-10 py-2 bg-white rounded-lg hover:bg-gray-200 transition-all duration-300 cursor-pointer">
                        {option}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Dropdown */}
        <div className="md:flex hidden items-center gap-4 w-fit">
          {categories.map((category) => (
            <div
              key={category.value}
              className="relative flex items-center md:w-fit lg:w-[180px]">
              {/* Dropdown Button */}
              <button
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === category.value ? null : category.value
                  )
                }
                className="w-full flex items-center justify-between px-4 py-2 bg-white text-[13.02px] text-[#0A0A0A] rounded-lg text-left hover:bg-gray-100 transition-all duration-300">
                {selectedFilters[category.value]}
                <ChevronDown color="#0A0A0A" size={13} />
              </button>

              {/* Dropdown Menu */}
              {openDropdown === category.value && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 top-[25px] mt-2 w-full bg-white text-[13px] text-[#0A0A0A] shadow-lg rounded-lg border">
                  {category.options.map((option) => (
                    <li
                      key={option}
                      onClick={() => handleSelect(category.value, option)}
                      className="px-4 py-2 rounded-lg hover:bg-gray-200 transition-all duration-300 cursor-pointer">
                      {option}
                    </li>
                  ))}
                </motion.ul>
              )}
            </div>
          ))}
        </div>

        {/* Search Button */}
        <div
          onClick={handleSearch}
          className="bg-[#171717] hover:scale-[1.1] transition-all duration-300 rounded-full p-[12px] w-[40px] h-[40px] flex items-center justify-center cursor-pointer">
          <Search color="white" size={16} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
