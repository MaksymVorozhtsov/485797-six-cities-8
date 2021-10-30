export type roomFeatures = {
  type: string;
  rooms: string;
  guests: string;
};

export type roomHost = {
  pro: boolean;
  name: string;
};

export type PropertyType = {
  id: number;
  premium: boolean;
  title: string;
  price: number;
  rating: string;
  features: roomFeatures;
  agd: string[];
  host: roomHost;
  description: string;
  reviews: Record<string, string>[];
  gallery: string[];
};
