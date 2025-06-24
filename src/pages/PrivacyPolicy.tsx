import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-16 lg:pt-20 min-h-screen bg-gradient-to-br from-[#F9F9F9] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Page Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#222222] mb-2">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 mb-4">Your Privacy is Our Priority</p>
          <div className="w-16 sm:w-24 h-1 bg-[#FFD700] mx-auto"></div>
        </div>

        {/* Privacy Policy Content */}
        <div className="prose max-w-4xl mx-auto text-gray-700">
          <Section>
            <p className="mb-6">
              At Andavar Textiles, your privacy is our top priority. We are deeply committed to protecting the personal information you share with us and ensuring that your data is handled with the highest standards of security, transparency, and compliance—aligned with the Indian IT Act and internationally recognized data protection principles such as the GDPR.
            </p>
            <p>
              This Privacy Policy explains what information we collect, how we use it, how we safeguard it, and your rights when interacting with our website, products, and services.
            </p>
          </Section>

            <Section title="Information We Collect">
              <p className="mb-4">
                When you browse our site, make a purchase, contact us for wholesale inquiries, or subscribe to updates, we may collect the following types of information:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Full Name</li>
                <li>Email Address</li>
                <li>Phone Number</li>
                <li>Shipping & Billing Address</li>
                <li>Payment Details (via secure third-party gateway)</li>
                <li>Order History & User Preferences</li>
                <li>Business Information (for wholesale/B2B clients)</li>
                <li>Device & Browser Information</li>
                <li>Cookies and Tracking Data (for analytics and performance)</li>
              </ul>
              <p>We collect only the data necessary to offer you a seamless shopping and service experience—nothing more.</p>
            </Section>

            <Section title="Why We Collect Your Information">
              <p className="mb-4">
                Your information is collected and used solely for legitimate purposes, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Fulfilling orders and processing payments</li>
                <li>Communicating shipping updates and delivery status</li>
                <li>Providing customer and B2B support</li>
                <li>Managing your account or order preferences</li>
                <li>Sending optional promotional content (only if you opt in)</li>
                <li>Analyzing website performance and user behavior (aggregated and anonymized)</li>
                <li>Improving our textile offerings and platform experience</li>
              </ul>
            </Section>

            <Section title="How Your Information is Protected">
              <p className="mb-4">
                We implement robust security practices to ensure that your data remains safe and confidential at all times.
              </p>
              <p className="font-semibold mb-2">Our safeguards include:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><span className="font-semibold">SSL Encryption:</span> All data exchanged on our website is encrypted using Secure Sockets Layer (SSL) technology.</li>
                <li><span className="font-semibold">Payment Protection:</span> Payments are processed via secure, PCI-compliant third-party gateways. We never store your payment information.</li>
                <li><span className="font-semibold">Server Security:</span> Our servers are protected with firewalls, access controls, and regular security audits.</li>
                <li><span className="font-semibold">Restricted Access:</span> Only authorized personnel have access to sensitive data. Internal protocols prevent misuse or unauthorized disclosure.</li>
              </ul>
            </Section>

            <Section title="Your Rights & Choices">
              <p className="mb-4">
                You are in full control of your data. At any time, you can:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Request access to the data we hold about you</li>
                <li>Ask for updates or corrections</li>
                <li>Request deletion of your information (subject to legal requirements)</li>
                <li>Withdraw your consent for marketing communications</li>
                <li>Raise concerns about data misuse or privacy</li>
              </ul>
              <p className="mb-4">
                To exercise any of these rights, contact us directly via the <Link to="/contact" className="text-[#800000] hover:underline">Contact Us</Link> page or at <a href="mailto:info@andavartextiles.shop" className="text-[#800000] hover:underline">info@andavartextiles.shop</a>. We will respond to your request within 30 days.
              </p>
            </Section>

            <Section title="Contact Us">
              <p className="mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please reach out to our Data Protection Officer at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="font-semibold">Andavar Textiles Pvt. Ltd.</p>
                <p>Attn: Data Protection Officer</p>
                <p>123 Textile Complex, Erode Road,</p>
                <p>Coimbatore - 641 021, Tamil Nadu, India</p>
                <p className="mt-2">Email: <a href="mailto:info@andavartextiles.shop" className="text-[#800000] hover:underline">info@andavartextiles.shop</a></p>
                <p>Phone: <a href="tel:+919342752821" className="text-[#800000] hover:underline">+91 93427 52821</a></p>
              </div>
              <p>
                We take all privacy concerns seriously and will investigate any complaints received. If you are not satisfied with our response, you have the right to contact your local data protection authority.
              </p>
            </Section>

            <Section title="Policy Updates">
              <p className="mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any updates will be posted on this page with an updated &quot;Last Revised&quot; date.
              </p>
              <p className="font-semibold">
                Last Revised: June 25, 2025
              </p>
            </Section>

            <div className="pt-8 text-center text-sm text-gray-500 border-t border-gray-200 mt-12">
              <p>Thank you for trusting Andavar Textiles with your personal information. We are committed to protecting your privacy and providing a secure online experience.</p>
              <p className="mt-2">© {new Date().getFullYear()} Andavar Textiles. All rights reserved.</p>
            </div>
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

export default PrivacyPolicy;
