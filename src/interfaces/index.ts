export interface category {
    id: number,
    documentId: string,
    title: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    locale: string | null
}

export interface format {
    name: string,
    hash: string,
    ext: string,
    mime: string,
    path: string,
    width: number,
    height: number,
    size: number,
    sizeInBytes: number,
    url: string
}

export interface formats {
    thumbnail: format;
    small: format;
    medium: format;
    large: format;
}

export interface thumbnail {
    id: string,
    documentId: string,
    name: string,
    alternativeText?: string,
    caption?: string,
    width: number,
    height: number,
    formats: formats
    hash: string,
    ext: string,
    mime: string,
    size: number,
    url: string,
    previewUrl: string | null,
    provider: string,
    provider_metadata?: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    locale: string | null
}

export interface meta{
    pagination:{
        page: number;
        pageCount: number;
        pageSize: number;
        total: number;
    }
}

export interface IProduct{
    id: number;
    documentId: string;
    title: string;
    price: number;
    stock: number;
    thumbnail: thumbnail;
    description: string;
    category?: category;
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    locale: string | null,
}

export interface IFormInput {
    username: string;
    email: string;
    password: string;
  }

  export interface ILoginInput {
    identifier: string;
    password: string;
  }

  export interface IErrorResponse {
    error: {
        // details?: {
        //     errors: {
        //         message: string;
        //     }[]
        // };
        message?: string;
    }
  }

  interface ProductReview {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  };
  
  interface ProductDimensions {
    width: number;
    height: number;
    depth: number;
  };
  
  interface ProductMeta {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  
  export interface IDummyProduct {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: ProductDimensions;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: ProductReview[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: ProductMeta;
    images: string[];
    thumbnail: string;
  };
  
  export interface cartProduct{
    id: number;
    thumbnail: string;
    title: string;
    price: number;
    quantity: number;
    total: number;
  }

  export interface wishlistProduct{
    id: number;
    thumbnail: string;
    title: string;
    price: number;
    rating: number;
    reviews: ProductReview[];
  }