export interface IItem {
    icon?: string;
    name: string;
    count: number;
}

export interface IProduct {
    id: number;
    name: string;
    location: string;
    price?: number;
    imgUrl?: string;
    isRecommended?: boolean;
}

export interface IListProduct {
    name: string;
    category: string;
    items: IProduct[];
}

export interface IItemContentFooter {
    id: number;
    url: string;
    name: string;
}

export interface IContentFooter {
    id: number;
    title: string;
    item: IItemContentFooter[]
}

export interface ITestimonial {
    id: number;
    name: string;
    carrier: string;
    rate: number;
    comment: string;
    imgUrl: string;
}

export interface IBooking {
  id: string;
  userName: string;
  email: string;
  phone: string;
  specialRequests?: string;
  paymentMethod: 'credit-card' | 'paypal' | 'bank-transfer';
  nights: number;
  checkInDate: Date;
  totalPrice: number;
  productId?: number;
}

export interface IBookingFormData {
  userName: string;
  email: string;
  phone: string;
  specialRequests?: string;
  paymentMethod: 'credit-card' | 'paypal' | 'bank-transfer';
}

export interface IBookingContext {
  nights: number;
  checkInDate: Date;
  totalPrice: number;
  pricePerNight: number;
  productId?: number;
  productName?: string;
  productImage?: string;
}

// Browse By Types
export interface ICategory {
  id: number;
  name: string;
  slug: string;
  icon?: string;
  imgUrl?: string;
  count: number;
  description?: string;
  type?: string;
}

export interface ICategoryFilter {
  type: string;
  label: string;
  options: string[];
}

// Stories Types
export interface IStory {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: {
    name: string;
    avatar?: string;
    bio?: string;
  };
  publishedAt: string;
  readTime: number;
  category: string;
  featured?: boolean;
  tags?: string[];
}

export interface IStoryAuthor {
  name: string;
  avatar?: string;
  bio?: string;
}

// Agents Types
export interface IAgent {
  id: number;
  name: string;
  slug: string;
  title: string;
  specialties: string[];
  avatar: string;
  rating: number;
  reviewCount: number;
  experience: number;
  languages: string[];
  contactEmail?: string;
  phone?: string;
  verified: boolean;
}

export interface IAgentFilter {
  specialty?: string;
  minRating?: number;
  languages?: string[];
  verified?: boolean;
}

// Category Detail Types
export interface ICategoryProduct extends IProduct {
  amenities?: string[];
  rating?: number;
  categorySlug: string;
}

export interface IAmenity {
  name: string;
  icon: string;
  count: number;
}

export interface IPriceRange {
  min: number;
  max: number;
}

export interface ILocation {
  name: string;
  count: number;
}

export interface IProductFilter {
  minPrice?: number;
  maxPrice?: number;
  locations?: string[];
  amenities?: string[];
  sortBy?: 'price-asc' | 'price-desc' | 'name-asc' | 'recommended';
  page?: number;
}

export interface IProductPagination {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}

export interface IProductAggregations {
  priceRange: IPriceRange;
  locations: ILocation[];
  amenities: IAmenity[];
}

export interface ICategoryProductsResponse {
  category: ICategory;
  products: ICategoryProduct[];
  pagination: IProductPagination;
  aggregations: IProductAggregations;
}