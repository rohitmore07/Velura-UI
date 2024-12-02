import { Search } from 'lucide-react';

const DocSearch = ({ onSearch }) => {
  const handleSearch = (e) => {
    const query = e.target.value;
    onSearch(query);
  };

  return (
    <div className="relative max-w-md mx-auto mb-8">
      <div className="relative">
        <input
          type="text"
          placeholder="Search documentation..."
          onChange={handleSearch}
          className="w-full px-4 py-2 pl-10 bg-white border border-black/20 rounded-lg focus:outline-none focus:border-black/40"
        />
        <Search className="absolute left-3 top-2.5 text-black/60" size={20} />
      </div>
    </div>
  );
};

export default DocSearch;