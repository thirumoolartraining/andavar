import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="pt-16 lg:pt-20 min-h-screen bg-gradient-to-br from-[#F9F9F9] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Page Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#222222] mb-2">
            Terms & Conditions
          </h1>
          <p className="text-lg text-gray-600 mb-4">Last updated: June 2025</p>
          <div className="w-16 sm:w-24 h-1 bg-[#FFD700] mx-auto"></div>
        </div>

        {/* Content */}
        <div className="prose max-w-4xl mx-auto text-gray-700">
          <Section>
            <p className="mb-6">
              Welcome to Andavar Textiles. By accessing and using our website (andavartextiles.shop), you agree to comply with and be bound by the following Terms and Conditions. These terms govern all interactions, purchases, and services offered through our digital platform. Please review them carefully before using the site or placing an order.
            </p>
            <p>
              Continued use of the site implies full acceptance of these terms. If you disagree with any part, we advise you to discontinue use of the site.
            </p>
          </Section>

          <Section title="1. General Use of the Website">
            <p className="mb-4">
              By using this website, you confirm that you are either:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>At least 18 years of age, or</li>
              <li>Accessing the site under the supervision of a parent or legal guardian.</li>
            </ul>
            <p className="mb-4">
              You agree to use the website only for lawful purposes and in a way that does not violate the rights or restrict the use of the site by others.
            </p>
            <p>
              Andavar Textiles reserves the right to restrict, suspend, or terminate access to the website (or specific features) without prior notice or liability.
            </p>
          </Section>

          <Section title="2. Product Listings, Pricing & Availability">
            <p className="mb-4">
              All products listed are subject to availability and may be modified or discontinued without prior notice.
            </p>
            <p className="mb-4">
              We strive for accuracy in product descriptions, fabric details, and images. However, occasional errors may occur. We reserve the right to correct such errors, cancel affected orders, and issue refunds where necessary.
            </p>
            <p className="mb-4">
              Prices are displayed in Indian Rupees (INR ₹) unless stated otherwise. Pricing may change at any time due to market dynamics, material costs, or company policy.
            </p>
            <p>
              For bulk or wholesale orders, minimum quantities apply and specific pricing will be communicated directly to the buyer.
            </p>
          </Section>

          <Section title="3. Payments">
            <p className="mb-4">
              All orders must be paid in full at the time of purchase unless an alternate agreement has been arranged (e.g., for verified wholesale buyers).
            </p>
            <p className="mb-4">
              We accept major credit/debit cards, UPI, net banking, and other secure digital payment methods via verified payment gateways.
            </p>
            <p className="mb-4">
              Andavar Textiles does not store any payment information. All transactions are processed through secure third-party providers.
            </p>
            <p>
              In case of payment errors, duplicate charges, or unauthorized transactions, please contact our support team immediately.
            </p>
          </Section>

          <Section title="4. Shipping & Delivery">
            <p className="mb-4">
              We offer domestic and international shipping through trusted courier partners.
            </p>
            <p className="mb-4">
              Estimated delivery times vary by location and are provided at checkout.
            </p>
            <p className="mb-4">
              Tracking information will be shared via email, SMS, or WhatsApp upon dispatch.
            </p>
            <p>
              Any delays caused by third-party logistics providers are beyond our direct control, though we will assist in resolving them promptly.
            </p>
          </Section>

          <Section title="5. User Conduct & Responsibilities">
            <p className="mb-4">
              By using the website, you agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Post or transmit unlawful, abusive, misleading, or harmful content</li>
              <li>Attempt unauthorized access to backend systems or customer data</li>
              <li>Use any part of the site or its contents for commercial use without written permission</li>
              <li>Engage in activities that compromise the performance, security, or integrity of the site</li>
            </ul>
            <p>
              Violations of the above terms may result in suspension or permanent ban from the platform.
            </p>
          </Section>

          <Section title="6. Intellectual Property">
            <p className="mb-4">
              All content on this website—including logos, designs, images, and text—is the intellectual property of Andavar Textiles.
            </p>
            <p>
              You may not reuse, reproduce, or distribute any part of the site without express written consent.
            </p>
          </Section>

          <Section title="7. Modifications to Terms">
            <p className="mb-4">
              Andavar Textiles reserves the right to update, revise, or modify these Terms & Conditions at any time.
            </p>
            <p className="mb-4">
              Changes will be reflected on this page with a revised date. Continued use of the site after such updates constitutes your acceptance of the new terms.
            </p>
            <p>
              We recommend reviewing this page periodically.
            </p>
          </Section>

          <Section title="8. Limitation of Liability">
            <p className="mb-4">
              Under no circumstances shall Andavar Textiles, its directors, employees, or affiliates be liable for:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Any direct or indirect damages arising from use or inability to use the website</li>
              <li>Product delays or inaccuracies in content</li>
              <li>Service disruptions or delivery failures due to third-party actions</li>
            </ul>
            <p>
              Your use of this website is at your own risk.
            </p>
          </Section>

          <Section title="9. Governing Law">
            <p className="mb-4">
              These terms are governed by the laws of India, with jurisdiction under the courts of Tirunelveli, Tamil Nadu.
            </p>
            <p>
              Any disputes will be resolved accordingly.
            </p>
          </Section>

          <Section title="10. Contact Us">
            <p className="mb-4">
              For questions, concerns, or assistance, you can reach us via:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="font-semibold">Andavar Textiles</p>
              <p>No: 136, 6th Main Road</p>
              <p>Gallidaikurichi, Chettipillaimar Street</p>
              <p>Tirunelveli - 627416</p>
              <p>Tamil Nadu, India</p>
              <p className="mt-2">📞 Phone: <a href="tel:+919342752821" className="text-[#800000] hover:underline">+91 93427 52821</a></p>
              <p>📧 Email: <a href="mailto:info@andavartextiles.shop" className="text-[#800000] hover:underline">info@andavartextiles.shop</a></p>
              <p>💬 WhatsApp & Contact Form: Available on our <Link to="/contact" className="text-[#800000] hover:underline">Contact Us</Link> page</p>
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

export default TermsAndConditions;
