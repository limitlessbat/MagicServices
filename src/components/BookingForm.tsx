import { useState, FormEvent } from 'react';
import { Wand2, X } from 'lucide-react';

declare global {
  interface Window {
    emailjs: {
      send: (
        serviceId: string,
        templateId: string,
        params: Record<string, string>
      ) => Promise<unknown>;
    };
  }
}

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingForm({ isOpen, onClose }: BookingFormProps) {
  const [formData, setFormData] = useState({
    service_type: 'appliance_repair',
    customer_name: '',
    customer_email: '',
    customer_phone: '',
    service_address: '',
    preferred_date: '',
    preferred_time: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await window.emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          service_type: formData.service_type,
          full_name: formData.customer_name,
          phone_number: formData.customer_phone,
          email_address: formData.customer_email,
          service_address: formData.service_address,
          preferred_date: formData.preferred_date,
          preferred_time: formData.preferred_time,
          additional_details: formData.message,
        }
      );

      setSubmitStatus('success');
      setFormData({
        service_type: 'appliance_repair',
        customer_name: '',
        customer_email: '',
        customer_phone: '',
        service_address: '',
        preferred_date: '',
        preferred_time: '',
        message: '',
      });

      setTimeout(() => {
        onClose();
        setSubmitStatus('idle');
      }, 2000);
    } catch (error) {
      console.error('Error submitting booking:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full my-8">
        <div className="bg-gradient-to-r from-[#1a365d] to-[#2d4a7c] text-white p-6 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Wand2 className="w-6 h-6 text-[#d4af37]" />
            <h2 className="text-2xl font-bold">Book Your Service</h2>
          </div>
          <button
            onClick={onClose}
            className="hover:bg-white/20 p-2 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-semibold text-[#1a365d] mb-2">
              Service Type *
            </label>
            <select
              required
              value={formData.service_type}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  service_type: e.target.value,
                })
              }
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#d4af37] focus:outline-none transition-colors"
            >
              <option value="appliance_repair">Appliance Repair and Installation</option>
              <option value="moving">Moving Assistance</option>
              <option value="cleaning">Cleaning Services</option>
              <option value="handyman">HandyMan Services</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-[#1a365d] mb-2">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.customer_name}
                onChange={(e) =>
                  setFormData({ ...formData, customer_name: e.target.value })
                }
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#d4af37] focus:outline-none transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#1a365d] mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                value={formData.customer_phone}
                onChange={(e) =>
                  setFormData({ ...formData, customer_phone: e.target.value })
                }
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#d4af37] focus:outline-none transition-colors"
                placeholder="(555) 123-4567"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#1a365d] mb-2">
              Email Address *
            </label>
            <input
              type="email"
              required
              value={formData.customer_email}
              onChange={(e) =>
                setFormData({ ...formData, customer_email: e.target.value })
              }
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#d4af37] focus:outline-none transition-colors"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#1a365d] mb-2">
              Service Address *
            </label>
            <input
              type="text"
              required
              value={formData.service_address}
              onChange={(e) =>
                setFormData({ ...formData, service_address: e.target.value })
              }
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#d4af37] focus:outline-none transition-colors"
              placeholder="123 Main St, City, State ZIP"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-[#1a365d] mb-2">
                Preferred Date *
              </label>
              <input
                type="date"
                required
                value={formData.preferred_date}
                onChange={(e) =>
                  setFormData({ ...formData, preferred_date: e.target.value })
                }
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#d4af37] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#1a365d] mb-2">
                Preferred Time *
              </label>
              <select
                required
                value={formData.preferred_time}
                onChange={(e) =>
                  setFormData({ ...formData, preferred_time: e.target.value })
                }
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#d4af37] focus:outline-none transition-colors"
              >
                <option value="">Select a time</option>
                <option value="8:00 AM - 10:00 AM">8:00 AM - 10:00 AM</option>
                <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM</option>
                <option value="12:00 PM - 2:00 PM">12:00 PM - 2:00 PM</option>
                <option value="2:00 PM - 4:00 PM">2:00 PM - 4:00 PM</option>
                <option value="4:00 PM - 6:00 PM">4:00 PM - 6:00 PM</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#1a365d] mb-2">
              Additional Details
            </label>
            <textarea
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              rows={4}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#d4af37] focus:outline-none transition-colors resize-none"
              placeholder="Tell us more about what you need..."
            />
          </div>

          {submitStatus === 'success' && (
            <div className="bg-green-50 border-2 border-green-500 text-green-700 px-4 py-3 rounded-lg">
              Booking request sent successfully. We will contact you shortly.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-red-50 border-2 border-red-500 text-red-700 px-4 py-3 rounded-lg">
              Something went wrong. Please try again.
            </div>
          )}

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-6 py-3 bg-[#d4af37] hover:bg-[#c49d2e] text-[#1a365d] rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                'Submitting...'
              ) : (
                <>
                  <Wand2 className="w-5 h-5" />
                  Submit Booking
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
