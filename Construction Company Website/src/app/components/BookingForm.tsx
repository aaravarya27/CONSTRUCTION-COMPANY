import { useState } from 'react';
import { Phone, Mail, User, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

export function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // For now, just show success message
    // In production, this would send to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="booking" className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 tracking-wide">
            REGISTER YOUR INTEREST
          </h2>
          <p className="text-gray-300 text-lg">
            Be the first to know about availability and special offers
          </p>
        </div>

        <div className="bg-white text-gray-900 rounded-lg shadow-xl p-8 md:p-12">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="flex items-center gap-2 mb-2">
                  <User className="size-4" />
                  Full Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="flex items-center gap-2 mb-2">
                  <Phone className="size-4" />
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full"
                />
              </div>

              <div>
                <Label htmlFor="email" className="flex items-center gap-2 mb-2">
                  <Mail className="size-4" />
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gray-900 hover:bg-gray-800 text-white py-6 text-lg"
              >
                Submit Registration
              </Button>

              <p className="text-sm text-gray-600 text-center">
                By submitting this form, you agree to be contacted by Sparsh Realtors regarding Prem Kalika Villa
              </p>
            </form>
          ) : (
            <div className="text-center py-12">
              <CheckCircle className="size-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl mb-2">Thank You!</h3>
              <p className="text-gray-600">
                Your registration has been received. We'll contact you soon.
              </p>
            </div>
          )}
        </div>

        {/* Contact Information */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl mb-6">Contact Us Directly</h3>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center gap-2">
                <Phone className="size-5 flex-shrink-0" />
                <span>Contact for details:</span>
              </div>
              <div>
                <span>+91 7301514267</span>
              </div>
              <div>
                <span>+91 9835092339</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="size-5 flex-shrink-0" />
                <span>anil.prasad18@gmail.com</span>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
