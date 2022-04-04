export type ResultItem = {
  id: string;
  site_id: string;
  title: string;
  seller: Seller;
  price: number;
  prices: Prices;
  sale_price: null;
  currency_id: string;
  available_quantity: number;
  sold_quantity: number;
  buying_mode: string;
  listing_type_id: string;
  stop_time: Date;
  condition: string;
  permalink: string;
  thumbnail: string;
  thumbnail_id: string;
  accepts_mercadopago: boolean;
  installments: Installments;
  address: Address;
  shipping: Shipping;
  seller_address: SellerAddress;
  attributes: Attribute[];
  original_price: null;
  category_id: string;
  official_store_id: null;
  domain_id: string;
  catalog_product_id: string;
  tags: string[];
  catalog_listing: boolean;
  use_thumbnail_id: boolean;
  offer_score: null;
  offer_share: null;
  match_score: null;
  winner_item_id: null;
  melicoin: null;
  discounts: null;
  order_backend: number;
};

export type Address = {
  state_id: string;
  state_name: string;
  city_id: string;
  city_name: string;
};

export type Attribute = {
  source: number;
  id: string;
  value_name: string;
  values: Value[];
  attribute_group_id: string;
  name: string;
  value_id: null | string;
  value_struct: Struct | null;
  attribute_group_name: string;
};

export type Struct = {
  number: number;
  unit: string;
};

export type Value = {
  source: number;
  id: null | string;
  name: string;
  struct: Struct | null;
};

export type Installments = {
  quantity: number;
  amount: number;
  rate: number;
  currency_id: string;
};

export type Prices = {
  id: string;
  prices: Price[];
  presentation: Presentation;
  payment_method_prices: any[];
  reference_prices: ReferencePrice[];
  purchase_discounts: any[];
};

export type Presentation = {
  display_currency: string;
};

export type Price = {
  id: string;
  type: string;
  amount: number;
  regular_amount: null;
  currency_id: string;
  last_updated: Date;
  conditions: Conditions;
  exchange_rate_context: string;
  metadata: Metadata;
};

export type Conditions = {
  context_restrictions: string[];
  start_time: Date | null;
  end_time: Date | null;
  eligible: boolean;
};

export type Metadata = {};

export type ReferencePrice = {
  id: string;
  type: string;
  conditions: Conditions;
  amount: number;
  currency_id: string;
  exchange_rate_context: string;
  tags: any[];
  last_updated: Date;
};

export type Seller = {
  id: number;
  permalink: string;
  registration_date: Date;
  car_dealer: boolean;
  real_estate_agency: boolean;
  tags: string[];
  eshop: Eshop;
  seller_reputation: SellerReputation;
};

export type Eshop = {
  seller: number;
  eshop_rubro: null;
  eshop_id: number;
  nick_name: string;
  site_id: string;
  eshop_logo_url: string;
  eshop_status_id: number;
  eshop_experience: number;
  eshop_locations: any[];
};

export type SellerReputation = {
  power_seller_status: string;
  level_id: string;
  metrics: Metrics;
  transactions: Transactions;
};

export type Metrics = {
  cancellations: Cancellations;
  claims: Cancellations;
  delayed_handling_time: Cancellations;
  sales: Sales;
};

export type Cancellations = {
  period: string;
  rate: number;
  value: number;
};

export type Sales = {
  period: string;
  completed: number;
};

export type Transactions = {
  canceled: number;
  period: string;
  total: number;
  ratings: Ratings;
  completed: number;
};

export type Ratings = {
  negative: number;
  neutral: number;
  positive: number;
};

export type SellerAddress = {
  id: string;
  comment: string;
  address_line: string;
  zip_code: string;
  country: City;
  state: City;
  city: City;
  latitude: string;
  longitude: string;
};

export type City = {
  id: string;
  name: string;
};

export type Shipping = {
  free_shipping: boolean;
  mode: string;
  tags: string[];
  logistic_type: string;
  store_pick_up: boolean;
};

export type GetResponseResult = {
  site_id: string;
  country_default_time_zone: string;
  query: string;
  paging: Paging;
  results: ResultItem[];
  sort: Sort;
  available_sorts: Sort[];
  filters: unknown[];
  available_filters: AvailableFilter[];
};

export type AvailableFilter = {
  id: string;
  name: string;
  type: string;
  values: Value[];
};

export type Sort = {
  id: string;
  name: string;
};

export type Paging = {
  total: number;
  primary_results: number;
  offset: number;
  limit: number;
};
