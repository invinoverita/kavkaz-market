import { FC } from 'react';
import { TypeCategory } from 'src/types';
import { CategoriesFilter } from './CategoriesFilter';

type FilterProps = {
  categories: TypeCategory[];
  category_id?: string;
};

const Filter: FC<FilterProps> = ({ categories, category_id = 'all' }) => {
  return (
    <fieldset>
      <div className="pb-4 mb-8 border-b border-stroke">
        <legend className="font-medium text-black text-xl">Категории</legend>
      </div>
      <div className="pb-4">
        <CategoriesFilter categories={categories} category_id={category_id} />
      </div>
    </fieldset>
  );
};

export { Filter };
