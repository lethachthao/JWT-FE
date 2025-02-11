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

export interface UserFormValues {
  name: string;
  email: string;
  avatar: string | File;
  password: string;
}

export interface Category {
  id: string;
  name: string;
  logo: string | File;
  banner: string | File;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: RcFile;
}

export interface Banner {
  id: string;
  image: string | File;
  title: string;
}
