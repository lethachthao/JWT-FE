export interface IPropsIcon {
  width?: number;
  height?: number;
  fill?: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  images: string[];
  status: string;
}

export interface DataProduct {
  brand: string;
  logo: string;
  banner: string;
  products: Product[];
}
