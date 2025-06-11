export type ElementVisibility = Record<string, boolean>;

export interface SidebarVisibility {
  // Activity Details
  'activity-details': boolean;
  'activity-image': boolean;
  'activity-name': boolean;
  'activity-rating': boolean;
  'activity-review-count': boolean;
  'activity-address': boolean;
  
  // Booking Details
  'booking-details': boolean;
  'booking-start-date': boolean;
  'booking-end-date': boolean;
  'booking-total-length': boolean;
  'booking-trip-for': boolean;
  
  // Price components
  'price-original': boolean;
  'price-discount': boolean;
  'price-discount-note': boolean;
  'price-vat': boolean;
  'price-tourism-tax': boolean;
  'price-payable-note': boolean;
  
  // Other sections
  'promo-code': boolean;
  'cancellation-costs': boolean;
}

export interface FormVisibility {
  // Customer Details
  'customer-details': boolean;
  'form-first-name': boolean;
  'form-last-name': boolean;
  'form-email': boolean;
  'form-country': boolean;
  'form-phone': boolean;
  'form-booking-for': boolean;
  'form-work-travel': boolean;
  
  // Add to Booking
  'add-to-booking': boolean;
  'form-taxi-option': boolean;
  'form-car-option': boolean;
  'form-special-requests': boolean;
  
  // Payment
  'payment': boolean;
  'form-pay-later': boolean;
  'form-pay-now': boolean;
}

export interface VisibilityState {
  sidebar: SidebarVisibility;
  form: FormVisibility;
}
