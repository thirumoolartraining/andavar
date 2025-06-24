import React from 'react';
import { Link } from 'react-router-dom';

const ShippingPolicy: React.FC = () => {
  return (
    <div className="pt-16 lg:pt-20 min-h-screen bg-gradient-to-br from-[#F9F9F9] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Page Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#222222] mb-2">
            Shipping Policy
          </h1>
          <p className="text-lg text-gray-600 mb-4">Safe, Secure & On-Time Delivery – From Tirunelveli to the World</p>
          <div className="w-16 sm:w-24 h-1 bg-[#FFD700] mx-auto"></div>
        </div>

        {/* Content */}
        <div className="prose max-w-4xl mx-auto text-gray-700">
          <Section>
            <p className="mb-6">
              At Andavar Textiles, we are committed to ensuring that your order—whether local or international—reaches you safely, securely, and within the promised time frame. Our shipping policy provides transparent details on processing, delivery, logistics, and what you can expect every step of the way.
            </p>
          </Section>

          <Section title="Order Processing Time">
            <p className="mb-4">
              Once your order is successfully placed and payment is confirmed, we initiate processing within 2 to 5 business days. This includes quality checks, careful packing, and handover to our logistics partners.
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Orders placed on weekends or public holidays are processed on the next business day.</li>
              <li>Custom or bulk wholesale orders may require extended preparation time, and we'll notify you accordingly.</li>
            </ul>
          </Section>

          <Section title="Shipping Destinations & Delivery Timelines">
            <p className="mb-4">
              We ship both within India and to international destinations through trusted logistics providers.
            </p>
            
            <h3 className="text-lg font-semibold mt-6 mb-3 text-[#800000]">Domestic Shipping (India):</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><span className="font-medium">Metro Cities:</span> 3–6 business days after dispatch</li>
              <li><span className="font-medium">Non-Metro / Rural Areas:</span> 5–10 business days after dispatch</li>
            </ul>

            <h3 className="text-lg font-semibold mt-6 mb-3 text-[#800000]">International Shipping:</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><span className="font-medium">Asia-Pacific, Middle East:</span> 7–14 business days</li>
              <li><span className="font-medium">North America, Europe:</span> 10–20 business days</li>
              <li><span className="font-medium">Other Regions:</span> May vary based on customs clearance and destination logistics</li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
              <p className="text-sm text-yellow-700">
                <span className="font-semibold">Note:</span> Delivery times are estimates and may vary due to local regulations, courier delays, or customs procedures (especially for exports).
              </p>
            </div>
          </Section>

          <Section title="Shipping Charges">
            <p className="mb-4">
              Shipping charges are calculated based on:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Destination (domestic or international)</li>
              <li>Order weight and dimensions</li>
              <li>Order value and selected shipping method</li>
            </ul>
            <p className="mb-4">
              All shipping charges will be clearly displayed during checkout.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
              <h4 className="font-semibold text-blue-800 mb-2">Free Shipping Offers:</h4>
              <p className="text-blue-700 text-sm">
                We periodically offer free domestic shipping on orders above a specific value. Watch for banners, promotional alerts, or seasonal campaigns to know more.
              </p>
            </div>
          </Section>

          <Section title="Tracking Your Order">
            <p className="mb-4">
              Once your order is dispatched, you'll receive:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>A tracking number via email, SMS, or WhatsApp</li>
              <li>A real-time tracking link to monitor your shipment</li>
              <li>Access to tracking via the My Orders section (if you created an account)</li>
            </ul>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-600">
                <span className="font-medium">Please note:</span> Allow 24–48 hours for tracking data to reflect once the order is marked as shipped.
              </p>
            </div>
          </Section>

          <Section title="Delays & Exceptions">
            <p className="mb-4">
              We strive to maintain prompt delivery, but some delays may occur due to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Natural disasters or weather disruptions</li>
              <li>Customs or international transit holds</li>
              <li>Public holidays or regional shutdowns</li>
              <li>Unexpected logistical or carrier issues</li>
              <li>Peak season backlogs (festive periods, sales events)</li>
            </ul>
            <p>
              In such cases, we will proactively communicate via email, phone, or WhatsApp with updates and revised delivery estimates.
            </p>
          </Section>

          <Section title="Wholesale Shipping">
            <p className="mb-4">
              For bulk and B2B orders, shipping timelines, packaging, and freight terms may vary. Please reach out to our Wholesale Support Team directly for:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Customized logistics coordination</li>
              <li>Export documentation assistance</li>
              <li>FOB/CIF discussions</li>
              <li>Bulk order pricing and terms</li>
            </ul>
            <p>
              Our team will work with you to ensure your wholesale shipping needs are met efficiently and cost-effectively.
            </p>
          </Section>

          <Section title="Need Help With Your Shipment?">
            <p className="mb-4">
              Our customer support team is here to assist with any shipping-related questions or concerns. Reach out to us via:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Email: <a href="mailto:info@andavartextiles.shop" className="text-blue-600 hover:underline">info@andavartextiles.shop</a></li>
              <li>Phone/WhatsApp: <a href="tel:+919342752821" className="text-blue-600 hover:underline">+91 93427 52821</a></li>
              <li>Live Chat: Available during business hours (Mon-Sat, 10 AM - 6 PM IST)</li>
            </ul>
            <p className="mb-4">
              Or visit our <Link to="/contact" className="text-blue-600 hover:underline font-medium">Contact Us</Link> page for more ways to get in touch.
            </p>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-4">
              <p className="text-sm text-green-700">
                <span className="font-semibold">Thank you</span> for choosing Andavar Textiles. We appreciate your business and are committed to ensuring a smooth shopping and delivery experience.
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
};

// Reusable Section Component
const Section: React.FC<{ title?: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="mb-8">
    {title && <h2 className="text-2xl font-bold text-[#800000] mb-4">{title}</h2>}
    {children}
  </section>
);

export default ShippingPolicy;
