import { Building2, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="size-8" />
              <div>
                <div className="font-semibold text-lg">Sparsh Realtors Pvt Ltd</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Building dreams, creating homes. Your trusted partner in premium residential developments.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
            <div className="space-y-3 text-gray-300 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="size-5 flex-shrink-0" />
                <span>Near Van Vibhag Gate, Nehru Nagar, Patna</span>
              </div>
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

        <div className="border-t border-gray-700 pt-8">
          <div className="text-center text-sm text-gray-400">
            <p>&copy; 2026 Sparsh Realtors Pvt Ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}