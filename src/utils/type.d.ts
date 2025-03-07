export interface IPropsIcon {
  width?: number;
  height?: number;
  fill?: string;
}

export interface Product {
  id: any;
  name: string;
  price: any;
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
  role: any;
  password: any;
}

export interface Banner {
  id: string;
  image: string | File;
  title: string;
}
