import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT } from '../data/constants';

// Reusable Section Component
const Section: React.FC<{ title?: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="mb-8">
    {title && <h2 className="text-2xl font-bold text-[#800000] mb-4">{title}</h2>}
    {children}
  </section>
);

const CancellationRefundPolicy: React.FC = () => {
  return (
    <div className="pt-16 lg:pt-20 min-h-screen bg-gradient-to-br from-[#F9F9F9] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Page Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#222222] mb-2">
            Cancellation & Refund Policy
          </h1>
          <p className="text-lg text-gray-600 mb-4">Clear Guidelines. Fair Resolutions. Timely Support.</p>
          <div className="w-16 sm:w-24 h-1 bg-[#FFD700] mx-auto"></div>
        </div>

        {/* Content */}
        <div className="prose max-w-4xl mx-auto text-gray-700">
          <Section>
            <p className="mb-6">
              At Andavar Textiles, we take great pride in delivering authentic, high-quality handcrafted textiles to our customers across the world. While we strive to make every order perfect, we understand that occasional issues may arise. This policy outlines our approach to cancellations, damages, and refunds in a transparent and customer-first manner.
            </p>
          </Section>

          <Section title="Order Cancellations">
            <p className="mb-4">
              <span className="font-semibold">Cancellation Window: Within 2 Hours of Purchase</span>
            </p>
            <p className="mb-4">
              You may request cancellation within 2 hours of placing your order, provided it has not yet been processed, packed, or dispatched.
            </p>
            <p className="mb-4">
              After your order has been packed or handed over to our shipping partner, cancellation is no longer possible due to the nature of our dispatch workflow.
            </p>
            <p className="mb-4">
              To cancel your order:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Contact us via our <Link to="/contact" className="text-blue-600 hover:underline">Contact Page</Link>, WhatsApp, or support email with your Order ID and reason for cancellation.</li>
            </ul>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
              <p className="text-sm text-yellow-700">
                <span className="font-semibold">Note:</span> For urgent changes or accidental orders, please reach out immediately—we'll do our best to assist before shipping begins.
              </p>
            </div>
          </Section>

          <Section title="Damaged or Defective Products">
            <p className="mb-4">
              We ensure multiple layers of quality control. However, if you receive a product that is:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Damaged in transit</li>
              <li>Has visible manufacturing defects, or</li>
              <li>Arrives with packaging tampering or quantity issues</li>
            </ul>
            <p className="mb-4">
              Please notify our support team within 7 days of delivery.
            </p>
            <p className="mb-4">
              To facilitate quick resolution, kindly share:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Your Order ID</li>
              <li>Photos of the packaging/product damage</li>
              <li>A brief description of the issue</li>
            </ul>
            <p>
              Upon verification, we will arrange for a replacement, credit note, or refund, depending on the case.
            </p>
          </Section>

          <Section title="Returns & Service Satisfaction">
            <p className="mb-4">
              Due to the handmade and made-to-order nature of many of our textiles, we do not offer returns on correctly delivered items unless there is a quality defect or service-related issue.
            </p>
            <p className="mb-4">
              If you feel the product you received does not meet our quality or description standards, please contact us within 7 days of receipt. Depending on the situation, we may offer one of the following remedies:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Replacement of the item</li>
              <li>Store credit for future purchase</li>
              <li>Partial or full refund</li>
            </ul>
            <p>
              Each request is reviewed fairly, with a focus on maintaining customer trust and our quality commitment.
            </p>
          </Section>

          <Section title="B2B / Wholesale Orders">
            <p className="mb-4">
              For bulk or export clients, cancellation and refund policies may differ based on terms agreed upon during purchase or quotation.
            </p>
            <p>
              Please refer to your purchase agreement or speak directly with our export support team for clarification on bulk return eligibility and documentation required.
            </p>
          </Section>

          <Section title="Refund Processing">
            <p className="mb-4">
              Once a refund is approved, the process will follow:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><span className="font-medium">Initiation:</span> Within 3–5 business days of confirmation</li>
              <li><span className="font-medium">Refund Method:</span> Same payment method used at checkout (credit card, UPI, bank transfer, etc.)</li>
              <li><span className="font-medium">Clearing Time:</span> Varies by payment gateway or bank (typically 5–10 business days post-initiation)</li>
            </ul>
            <p>
              You will receive confirmation via email or WhatsApp once your refund is processed.
            </p>
          </Section>

          <Section title="Exceptions">
            <p className="mb-4">
              Refunds or replacements may not be offered in the following scenarios:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Delays due to natural calamities, customs holds, or logistical disruptions beyond our control</li>
              <li>Products returned without prior approval or outside the valid reporting window</li>
              <li>Items damaged due to customer mishandling, improper care, or unauthorized alterations</li>
            </ul>
          </Section>

          <Section title="Need Help?">
            <p className="mb-4">
              Our customer care team is here to support you with any issues related to orders, refunds, or service concerns.
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Phone: <a href="tel:+919342752821" className="text-blue-600 hover:underline">+91 93427 52821</a></li>
              <li>Email: <a href={`mailto:${CONTACT.EMAILS.PRIMARY}`} className="text-blue-600 hover:underline">{CONTACT.EMAILS.PRIMARY}</a></li>
              <li>Email: <a href={`mailto:${CONTACT.EMAILS.SECONDARY}`} className="text-blue-600 hover:underline">{CONTACT.EMAILS.SECONDARY}</a></li>
              <li>WhatsApp: Available via website</li>
              <li>Or use the <Link to="/contact" className="text-blue-600 hover:underline">Contact Form</Link> on our website</li>
            </ul>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-6">
              <p className="text-sm text-green-700">
                <span className="font-semibold">Andavar Textiles</span> is committed to transparency, customer satisfaction, and quality assurance in every interaction. We deeply value your trust in our craftsmanship and will resolve every genuine concern with fairness and care.
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default CancellationRefundPolicy;
