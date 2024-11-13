import { FC, Fragment } from 'react';

import { TypeCategory } from 'src/types';

import { FilterStroke } from 'src/components/FilterStroke/FilterStroke';

type TypeCategoriesFilterProps = {
  category_id: null | string;
  categories: TypeCategory[];
};

const CategoriesFilter: FC<TypeCategoriesFilterProps> = ({
  category_id,
  categories,
}) => {
  return (
    <Fragment>
      {categories.map((category) => {
        return !(category.parent) &&
          <FilterStroke
            isSelected={category_id === category.id.toPrecision()}
            key={category.id}
            category={category}
            categories={categories}
          />
      })}
    </Fragment>
  );
};

export { CategoriesFilter };
