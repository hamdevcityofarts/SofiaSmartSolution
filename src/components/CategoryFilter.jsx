export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  const formatCategory = (cat) => {
    if (cat === "all") return "Tous les livres";
    if (cat === "digital") return "Transformation digitale";
    if (cat === "management") return "Management";
    return cat.charAt(0).toUpperCase() + cat.slice(1);
  };

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map(category => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition ${
            selectedCategory === category
              ? "bg-accent text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {formatCategory(category)}
        </button>
      ))}
    </div>
  );
}