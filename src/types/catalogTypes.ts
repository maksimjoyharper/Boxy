export interface fetchCatalogProps {
  shops: {
    id: string;
    name: string;
    description: string;
    price: string;

    products: {
      link: string;
      description: string;
      id: string;
      name: string;
      is_purchased: string;
      is_accessible: string;
      price: number;
    }[];
  }[];
}

export interface ICatalog {
  id: string;
  name: string;
  price: number;
  description: string;
  prof: string;
  is_accessible: boolean | string;
  is_purchased: boolean | string;
  link: string;
  currentCoin: number | undefined;
}

export interface ISlidingCatalog {
  isOpen: boolean;
  onClose: () => void;
  initialHeight: string;
  fullHeight: string;
}
