import dynamic from "next/dynamic";
import { FC } from "react";
import { TypeCategory } from "src/types";

import arrow from "public/icons/arrow-green.svg";

type TypeCatalogBlockCardProps = {
  category: TypeCategory;
};

const Link = dynamic(() => import('src/components/Link/Link'), {
  ssr: false,
});

const CatalogBlockCard: FC<TypeCatalogBlockCardProps> = ({
  category,
}) => {
  return (
    <Link href={"/catalog/" + category.id}>
      <div className="w-[400px] h-[428px] bg-light rounded-lg p-7 flex flex-col gap-7">
        <div className="flex justify-between items-start">
          <aside>
            <p className="font-medium text-2xl mb-2">{category.name}</p>
            <p className="text-light-text text-sm">3 товара</p>
          </aside>
          <div className="rounded p-4 bg-white">
            <img src={arrow.src} />
          </div>
        </div>

      </div>
    </Link>
  )
}

export { CatalogBlockCard }