import { API_URL, token } from 'src/config/config';

import type { TypeCategoryTree } from 'src/types';
import type { TypeDefaultResData } from '../utils';

export const getCategoriesTree = async (): Promise<
  TypeDefaultResData<TypeCategoryTree>
> => {
  try {
    const response = await fetch(`${API_URL}/categories_tree/?token=${token}`);

    const data: TypeDefaultResData<TypeCategoryTree> = await response.json();

    return {
      result: data?.result ?? [],
      count: data?.count ?? 0,
    };
  } catch (error) {
    console.log(error);
    return {
      result: [],
      count: 0,
    };
  }
};
