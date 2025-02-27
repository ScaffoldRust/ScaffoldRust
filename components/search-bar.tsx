import { Search } from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { div } from "framer-motion/client";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [query, setQuery] = useState("")
   
    const categories = [
        {
          value: "Languages",
          label: "Programming Languages",
          options: ["Languages", "Rust", "JavaScript", "TypeScript", "Python"],
        },
        {
          value: "Frameworks",
          label: "Frameworks",
          options: ["Frameworks", "React", "Svelte", "Next.js", "Vue"],
        },
        {
          value: "Ecosystem",
          label: "Ecosystem",
          options: ["Ecosystem", "Node.js", "Deno", "Bun", "Electron"],
        },
      ];
     
     ;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="w-[1024px] h-[50px] flex gap-[16px] p-[8px] items-center rounded-[9999px] bg-white shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
      
        <div className="w-[364px] h-[40px] pl-[8px] rounded-[6px]">
            <input
                type="text"
                placeholder="Search templates"
                className="w-full h-full p-[8px] text-sm rounded-[6px] bg-transparent border-none focus:outline-none"
                value={query}
                onChange={handleInputChange}
            />
        </div>
    
        {/* <div className="flex flex-col gap-4 w-[200px]">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={() => setIsVisible((prev) => !prev)}
      >
        Toggle Dropdowns
      </button>

      <AnimatePresence>
        {isVisible &&
          categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <select className="flex justify-between transition-all duration-300 outline-none w-[180px] h-[40px] rounded-[6px] py-[10px] px-[12px] bg-white text-[#0A0A0A] text-[13.02px] shadow-md cursor-pointer">
                {category.options.map((option, i) => (
                  <option key={i} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </motion.div>
          ))}
      </AnimatePresence>
    </div> */}
            <div className="bg-[#171717] hover:scale-[1.1] transition-all duration-300 rounded-full p-[12px] w-[40px] h-[40px] flex items-center justify-center">
            <Search  color="white" size={16}/>
            </div>
    </div>
  );
};

export default SearchBar;
