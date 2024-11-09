import { FC, Fragment } from 'react';

import {
  About,
  MainProducts,
  Promotions,
  Stories,
  Banner,
  CatalogBlock,
  Brands,
  ShippingPaymentInfo,
} from 'src/components/Main';
import { TypeCategory, TypeProduct } from 'src/types';

type TypeMainPageProps = {
  products: TypeProduct[];
  categories: TypeCategory[];
};

const MainPage: FC<TypeMainPageProps> = ({
  products = [],
  categories = [],
}) => {
  return (
    <Fragment>
      <Banner />
      <CatalogBlock categories={categories} />
      <Brands />
      <ShippingPaymentInfo />
    </Fragment>
  );
};

export default MainPage;
