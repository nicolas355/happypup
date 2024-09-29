export interface ViewMore {

  availability: boolean;
  sku: string;
  barcode: string;
  collections: string[];
  productType: string;
  vendedor: string;
  quantity: number;
  descripcion: string;
  delivery: string;
  sizeGuide: string;
}

export interface ProductPopulate {
  id: string;
  nombre: string;
  price: number; 
  img: string;
  viewMore: ViewMore; 
}


export interface SelectedProductFields {
  id: string;
  nombre: string;
  price: string;
  productType: string;
  quantity: string;
  title: string;  






}


export interface AllProducts extends ProductPopulate{}