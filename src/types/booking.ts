// Types for booking data from the server/API
export type BookingRating = {
  rating: number;
  outOf: number;
  count: number;
};

export type PartySize = {
  adults: number;
  children: number;
};

export type PriceDetails = {
  original: number;
  discount: number;
  total: number;
};

export type TaxDetails = {
  vat: number;
  tourismTax: number;
};

export type CancellationPolicy = {
  freeCancellationBefore: string;
  cancellationFee: number;
};

export type BookingData = {
  name: string;
  location: string;
  address: string;
  rating: BookingRating;
  image: string;
  startDate: string;
  endDate: string;
  partySize: PartySize;
  price: PriceDetails;
  tax: TaxDetails;
  cancellationPolicy: CancellationPolicy;
};

export type ExtraOptions = {
  needTaxi: boolean;
  needCar: boolean;
};

// Types for the booking form
export type BookingFormData = {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  countryCode: string;
  phone: string;
  bookingFor: 'main-guest' | 'other';
  workTravel: 'yes' | 'no';
  needTaxi: boolean;
  needCar: boolean;
  specialRequests: string;
  paymentTiming: string;
};
