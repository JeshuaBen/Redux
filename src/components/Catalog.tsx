import React, { useEffect, useState } from "react";

import { api } from "../services/api";
import { IProduct } from "../store/modules/cart/types";
import { CatalogItem } from "./CatalogItem";

export const Catalog: React.FC = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api
      .get("/products")
      .then((response) => {
        setCatalog(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <main>
      <h1>Catalog</h1>

      {catalog.map((product) => (
        <CatalogItem key={product.id} product={product} />
      ))}
    </main>
  );
};

/**
 * Esse é o nosso componente de catálogo que consegue fazer a manipulação do nosso estado global a partir do useSelector, o qual seleciona a parte específica do nosso createStore().
 */
