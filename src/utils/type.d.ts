export interface IPropsIcon {
  width?: number;
  height?: number;
  fill?: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string | File;
  category_id: number;
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
