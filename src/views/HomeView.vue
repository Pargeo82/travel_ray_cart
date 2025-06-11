<template>
  <div class="min-h-screen flex flex-col">
    <Navbar
      :is-editing="isEditing"
      :show-edit-button="true"
      :visibility-state="visibilityState"
      @update:is-editing="updateEditMode"
      @restore-element="restoreElement"
    />
    <main class="flex-1 bg-background">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="lg:col-span-2 space-y-8">
            <StepIndicator />
            <BookingForm 
              :form-data="formData"
              :extra-options="extraOptions"
              :is-editing="isEditing"
              :visibility="visibilityState.form"
              @update:form-data="formData = $event"
              @submit="handleSubmit"
              @remove-component="removeFormComponent"
            />
          </div>
          <div class="lg:col-span-1">
            <BookingSidebar 
              :booking="bookingData" 
              :extra-options="extraOptions"
              :is-editing="isEditing"
              :visibility="visibilityState.sidebar"
              @remove-component="removeSidebarComponent"
            />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import type { BookingData, ExtraOptions, BookingFormData } from '@/types/booking.ts';
import type { VisibilityState, SidebarVisibility, FormVisibility } from '@/types/visibility.ts';
import Navbar from '@/components/navbar/Navbar.vue';
import StepIndicator from '@/components/StepIndicator.vue';
import BookingForm from '@/components/BookingForm.vue';
import BookingSidebar from '@/components/BookingSidebar.vue';

const router = useRouter();

// Edit mode state
const isEditing = ref(false);

// Method to handle edit mode update from Navbar
const updateEditMode = (value: boolean) => {
  isEditing.value = value;
  console.log('Edit mode updated:', isEditing.value);
};

// Visibility state for all components
const visibilityState = reactive<VisibilityState>({
  sidebar: {
    // Activity Details
    'activity-details': true,
    'activity-image': true,
    'activity-name': true,
    'activity-rating': true,
    'activity-review-count': true,
    'activity-address': true,
    
    // Booking Details
    'booking-details': true,
    'booking-start-date': true,
    'booking-end-date': true,
    'booking-total-length': true,
    'booking-trip-for': true,
    
    // Price components
    'price-original': true,
    'price-discount': true,
    'price-discount-note': true,
    'price-vat': true,
    'price-tourism-tax': true,
    'price-payable-note': true,
    
    // Other sections
    'promo-code': true,
    'cancellation-costs': true,
  },
  form: {
    // Customer Details
    'customer-details': true,
    'form-first-name': true,
    'form-last-name': true,
    'form-email': true,
    'form-country': true,
    'form-phone': true,
    'form-booking-for': true,
    'form-work-travel': true,
    
    // Add to Booking
    'add-to-booking': true,
    'form-taxi-option': true,
    'form-car-option': true,
    'form-special-requests': true,
    
    // Payment
    'payment': true,
    'form-pay-later': true,
    'form-pay-now': true,
  }
});

// Component removal and restoration handlers
const removeFormComponent = (componentId: string) => {
  console.log('Removing form component:', componentId);
  if (componentId in visibilityState.form) {
    visibilityState.form[componentId as keyof FormVisibility] = false;
  }
};

const removeSidebarComponent = (componentId: string) => {
  console.log('Removing sidebar component:', componentId);
  if (componentId in visibilityState.sidebar) {
    visibilityState.sidebar[componentId as keyof SidebarVisibility] = false;
  }
};

const restoreElement = (section: string, elementId: string) => {
  console.log('Restoring element:', section, elementId);
  if (section === 'sidebar' && elementId in visibilityState.sidebar) {
    visibilityState.sidebar[elementId as keyof SidebarVisibility] = true;
  } else if (section === 'form' && elementId in visibilityState.form) {
    visibilityState.form[elementId as keyof FormVisibility] = true;
  }
};

// Mock data - in a real app, this would come from an API
const bookingData: BookingData = reactive({
  name: 'Rafting',
  location: 'Una',
  address: 'Ulica Najboljeg Raftinga 4, Una, Hrvatska',
  rating: { rating: 4.8, outOf: 5, count: 127 },
  image: '/rafting.png',
  startDate: '2024-06-15',
  endDate: '2024-06-22',
  partySize: { adults: 2, children: 0 },
  price: { original: 500, discount: 134.5, total: 365.5 },
  tax: { vat: 91.1, tourismTax: 10 },
  cancellationPolicy: {
    freeCancellationBefore: '2024-05-30',
    cancellationFee: 100,
  },
});

const extraOptions: ExtraOptions = reactive({
  needTaxi: false,
  needCar: false,
});

// Form data and handlers
const formData: BookingFormData = reactive({
  firstName: '',
  lastName: '',
  email: '',
  country: 'Croatia',
  countryCode: '+385',
  phone: '',
  bookingFor: 'myself',
  workTravel: 'no',
  needTaxi: false,
  needCar: false,
  specialRequests: '',
  paymentTiming: 'march-15',
});

const handleSubmit = () => {
  console.log('Form submitted', formData);
  // In a real app, this would submit to an API
  router.push('/confirmation');
};
</script>
