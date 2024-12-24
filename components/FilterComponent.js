"use client";

import { useState, useEffect, useRef } from "react";
import { Filter, X } from "lucide-react";

const FilterComponent = ({
  options,
  activeFilters,
  onFilterChange,
  placeholder = "Add filter",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const sortOptions = (options) => {
    return [...options].sort((a, b) => {
      const aIsSemester = a.includes("Semester");
      const bIsSemester = b.includes("Semester");

      if (aIsSemester && !bIsSemester) return -1;
      if (!aIsSemester && bIsSemester) return 1;
      if (aIsSemester && bIsSemester) {
        const aNum = parseInt(a.match(/\d+/)[0]);
        const bNum = parseInt(b.match(/\d+/)[0]);
        return aNum - bNum;
      }
      return a.localeCompare(b);
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const removeFilter = (filterToRemove) => {
    const newFilters = activeFilters.filter((f) => f !== filterToRemove);
    onFilterChange(newFilters);
  };

  const addFilter = (option) => {
    if (!activeFilters.includes(option)) {
      onFilterChange([...activeFilters, option]);
    }
    setIsOpen(false);
  };

  const unusedOptions = sortOptions(
    options.filter((opt) => !activeFilters.includes(opt)),
  );
  const sortedActiveFilters = sortOptions(activeFilters);

  return (
    <div className="filter-container" ref={containerRef}>
      <div className="active-filters">
        {sortedActiveFilters.map((filter) => (
          <div key={filter} className="filter-pill">
            <span>{filter}</span>
            <button
              onClick={() => removeFilter(filter)}
              className="remove-filter"
            >
              <X size={15} />
            </button>
          </div>
        ))}
        {unusedOptions.length > 0 && (
          <button onClick={() => setIsOpen(!isOpen)} className="add-filter-btn">
            <Filter size={16} />
            {placeholder}
          </button>
        )}
      </div>

      {isOpen && unusedOptions.length > 0 && (
        <div className="filter-dropdown">
          <div className="filter-options">
            {unusedOptions.map((option) => (
              <button
                key={option}
                onClick={() => addFilter(option)}
                className={`filter-option ${option.includes("Semester") ? "semester-filter" : ""}`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterComponent;
