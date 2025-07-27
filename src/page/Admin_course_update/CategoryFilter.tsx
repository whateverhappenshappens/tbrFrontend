// import React from 'react';
// import { CategoryFilter as CategoryFilterType } from '../types/Course';

// interface CategoryFilterProps {
//   categories: CategoryFilterType[];
//   activeCategory: CategoryFilterType;
//   onCategoryChange: (category: CategoryFilterType) => void;
// }

// const CategoryFilter: React.FC<CategoryFilterProps> = ({
//   categories,
//   activeCategory,
//   onCategoryChange
// }) => {
//   return (
//     <div className="flex items-center gap-3 mb-8 flex-wrap">
//       {categories.map((category) => (
//         <button
//           key={category}
//           onClick={() => onCategoryChange(category)}
//           className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
//             activeCategory === category
//               ? 'bg-blue-600 text-white shadow-md'
//               : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//           }`}
//         >
//           {category}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default CategoryFilter;