/*
 * File: components/SearchBox.tsx
 * Author: Pinhung Chiang
 * Date: October 30, 2026
 * This component displays the student name search input.
 * It receives the search text and an onSearchChange callback through props.
 * Typing sends the new text to StudentPortal, where the filtering happens.
 * Its value always comes from the parent rather than separate local state.
 * It returns a labelled input that fits the available screen width.
 */

"use client";

// StudentPortal owns the search text.
interface SearchBoxProps {
  searchText: string;
  onSearchChange: (text: string) => void;
}

const SearchBox = ({ searchText, onSearchChange }: SearchBoxProps) => {
  // Pass each change back to the parent.
  return (
    <div className="mb-6">
      <label htmlFor="student-search" className="block text-sm font-medium text-slate-700">
        Search by name
      </label>
      <input
        id="student-search"
        type="search"
        value={searchText}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="First name or last name"
        className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600"
      />
    </div>
  );
};

export default SearchBox;
