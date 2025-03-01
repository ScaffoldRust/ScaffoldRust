import React, { useState, useRef, useEffect } from 'react';
import { Gamepad2, Wallet, Store, FileCode, Image, Users, Network, ChevronDown, X, Radio } from "lucide-react";

interface FiltersProps {
  onCategoryChange: (category: string | null) => void;
  selectedCategory: string | null;
}

const categories = [
  { name: "Gaming", icon: <Gamepad2 className="w-4 h-4 text-black" /> },
  { name: "DeFi", icon: <Wallet className="w-4 h-4 text-black" /> },
  { name: "Marketplace", icon: <Store className="w-4 h-4 text-black" /> },
  { name: "Smart Contracts", icon: <FileCode className="w-4 h-4 text-black" /> },
  { name: "NFT", icon: <Image className="w-4 h-4 text-black" /> },
  { name: "DAO", icon: <Users className="w-4 h-4 text-black" /> },
  { name: "Cross-Chain", icon: <Network className="w-4 h-4 text-black" /> },
  { name: "Oracles", icon: <Radio className="w-4 h-4 text-black" /> },
];

export function Filters({ onCategoryChange, selectedCategory }: FiltersProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleCategoryChange = (category: string) => {
    onCategoryChange(category);
    setIsOpen(false);
  };

  const clearFilter = () => {
    onCategoryChange(null);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col items-center w-full gap-4 mb-8 sm:flex-row sm:justify-center">
      
      {/* Desktop category list */}
      <div className="flex-wrap hidden gap-6 sm:flex">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => handleCategoryChange(category.name)}
            className={`flex flex-col items-center justify-center px-4 py-2 text-sm rounded-md transition-colors ${
              selectedCategory === category.name
                ? 'bg-gray-500 text-black'
                : 'text-black'
            }`}
          >
            <div className="mb-1">{category.icon}</div>
            <span>{category.name}</span>
          </button>
        ))}
      </div>

     {/* Mobile: Dropdown */}
<div className="relative w-full sm:hidden" ref={dropdownRef}>
  <button
    type="button"
    onClick={() => setIsOpen(!isOpen)}
    className="flex items-center justify-between w-full px-4 py-2 text-sm bg-white border rounded-md hover:bg-gray-50"
  >
    <span className="text-black">{selectedCategory || "Choose category"}</span>
    <ChevronDown
      className={`transition-transform text-black ${isOpen ? 'rotate-180' : ''}`}
    />
  </button>

  {isOpen && (
    <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg">
      <div className="p-1">
        <div className="p-1">
          <div className="px-2 py-1.5 text-xs font-medium text-black">
            Categories
          </div>
          {categories.map((category) => (
            <div
              key={category.name}
              className={`relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 px-2 text-sm outline-none hover:bg-gray-100 ${
                selectedCategory === category.name ? 'bg-gray-100' : ''
              }`}
              onClick={() => handleCategoryChange(category.name)}
            >
              <div className="mr-4 text-black">{category.icon}</div>
              <span className="text-black">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )}
</div>

      {/* Clear filter button */}
      {selectedCategory && (
        <button
          type="button"
          onClick={clearFilter}
          className="inline-flex items-center justify-center h-8 px-3 text-xs bg-white border border-gray-300 rounded-md hover:bg-gray-50 dark:bg-black dark:border-gray-600 dark:hover:bg-gray-700 sm:ml-2"
        >
          <X className="mr-1 text-white" />
          <span className="text-white">Clear filter</span>
        </button>
      )}
    </div>
  );
}