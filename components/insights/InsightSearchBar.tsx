"use client";

import { Clock, Search, X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

interface SearchSuggestion {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  thumbnail_url: string;
  category: {
    name: string;
    slug: string;
  };
  read_time: string;
  link: string;
}

interface InsightSearchBarProps {
  initialValue?: string;
  selectedCategory?: string;
  onSearch?: (query: string) => void;
}

export default function InsightSearchBar({
  initialValue = "",
  selectedCategory = "",
  onSearch,
}: InsightSearchBarProps) {
  const [searchQuery, setSearchQuery] = useState(initialValue);
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Debounce search
  useEffect(() => {
    if (searchQuery.trim().length < 2) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const timeoutId = setTimeout(() => {
      fetchSuggestions(searchQuery);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const fetchSuggestions = async (query: string) => {
    try {
      setIsLoading(true);
      const params = new URLSearchParams();
      params.append("search", query);
      params.append("limit", "5"); // Limit suggestions to 5

      if (selectedCategory) {
        params.append("category", selectedCategory);
      }

      const response = await fetch(`/api/insights?${params.toString()}`);
      const data = await response.json();

      setSuggestions(data.insights || []);
      setShowSuggestions(true);
      setSelectedIndex(-1);
    } catch (error) {
      console.error("Failed to fetch suggestions:", error);
      setSuggestions([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (value.trim().length < 2) {
      setShowSuggestions(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const params = new URLSearchParams();
      if (searchQuery) params.append("s", searchQuery);
      if (selectedCategory) params.append("category", selectedCategory);
      router.push(`/insights?${params.toString()}`);
      setShowSuggestions(false);
      if (onSearch) {
        onSearch(searchQuery);
      }
    }
  };

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    setSearchQuery(suggestion.title);
    setShowSuggestions(false);
    router.push(suggestion.link);
  };

  const handleClear = () => {
    setSearchQuery("");
    setSuggestions([]);
    setShowSuggestions(false);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showSuggestions || suggestions.length === 0) {
      if (e.key === "Enter") {
        handleSubmit(e);
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < suggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
        break;
      case "Enter":
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < suggestions.length) {
          handleSuggestionClick(suggestions[selectedIndex]);
        } else {
          handleSubmit(e);
        }
        break;
      case "Escape":
        setShowSuggestions(false);
        setSelectedIndex(-1);
        break;
    }
  };

  return (
    <div ref={searchRef} className="flex-1 max-w-md w-full relative">
      <form onSubmit={handleSubmit} className="relative">
        {selectedCategory && (
          <input type="hidden" name="category" value={selectedCategory} />
        )}
        <input
          ref={inputRef}
          type="text"
          name="s"
          value={searchQuery}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            if (suggestions.length > 0) {
              setShowSuggestions(true);
            }
          }}
          placeholder="Search insights..."
          className="w-full px-4 py-2 pl-12 pr-20 bg-neutral border border-neutral rounded-full text-primary focus:outline-none focus:border-accent transition-all duration-300"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary pointer-events-none" />
        {searchQuery && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-14 top-1/2 -translate-y-1/2 text-secondary hover:text-primary transition-colors"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1 bg-accent text-white rounded-full text-sm font-semibold hover:bg-primary transition-colors duration-300"
        >
          Search
        </button>
      </form>

      {/* Suggestions Dropdown */}
      {showSuggestions && (suggestions.length > 0 || isLoading) && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-neutral overflow-hidden z-50 max-h-[400px] overflow-y-auto">
          {isLoading ? (
            <div className="p-4 text-center text-secondary">
              <p>Searching...</p>
            </div>
          ) : (
            <>
              <div className="p-2">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={suggestion.id}
                    type="button"
                    onClick={() => handleSuggestionClick(suggestion)}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`w-full text-left p-3 rounded-xl transition-all duration-200 ${
                      selectedIndex === index
                        ? "bg-accent/10 border-2 border-accent"
                        : "hover:bg-neutral border-2 border-transparent"
                    }`}
                  >
                    <div className="flex gap-3">
                      {suggestion.thumbnail_url && (
                        <div className="shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-neutral">
                          <Image
                            src={suggestion.thumbnail_url}
                            alt={suggestion.title}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h4 className="text-sm font-semibold text-primary line-clamp-1">
                            {suggestion.title}
                          </h4>
                        </div>
                        <p className="text-xs text-secondary line-clamp-2 mb-2">
                          {suggestion.excerpt}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-secondary">
                          <span className="px-2 py-0.5 bg-accent/10 text-accent rounded-full font-medium">
                            {suggestion.category.name}
                          </span>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{suggestion.read_time}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              {searchQuery && (
                <div className="border-t border-neutral p-2">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="w-full text-left px-4 py-2 text-sm font-semibold text-accent hover:bg-neutral rounded-lg transition-colors flex items-center gap-2"
                  >
                    <Search className="w-4 h-4" />
                    View all results for "{searchQuery}"
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}
