export type DietType =
  | "VEGAN"
  | "VEGETARIAN"
  | "KETO"
  | "NONE";

  
export type Product = {
  id: number;
  name: string;
  shortDescription: string;
  longDescription: string;
  dietType: DietType;
  mainImage: string;
  images: {
    id: number
    image: string
  }[]
  brandId: number;
  brandName: string;
  rating: number;
  originalPrice: number;
  discountPrice: number;
  weight: number;
  createdAt: Date;
  updatedAt: Date;
}
