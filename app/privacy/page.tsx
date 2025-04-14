import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy | Synapse Solutions",
  description: "Privacy Policy for Synapse Solutions website",
}

export default function PrivacyPage() {
  return (
    <div className="bg-gray-950 min-h-screen">
      <div className="container mx-auto py-12 px-4">
        <Link
          href="/"
          className="inline-flex items-center text-africa-orange hover:text-africa-yellow transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <div className="max-w-4xl mx-auto bg-gray-900/60 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-800">
          <h1 className="text-3xl font-light text-white mb-6">Privacy Policy</h1>
          <p className="text-gray-400 mb-6">Last Updated: April 10, 2024</p>

          <div className="prose prose-invert prose-gray max-w-none">
            <p>
              At Synapse Solutions, we respect your privacy and are committed to protecting your personal data. This
              Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or
              use our services.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>
                <strong>Personal Information:</strong> Name, email address, phone number, and other contact details you
                provide when you contact us or sign up for our services.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you use our website, including IP address, browser
                type, pages visited, and time spent on the site.
              </li>
              <li>
                <strong>Marketing Preferences:</strong> Your preferences for receiving marketing communications from us.
              </li>
            </ul>

            <h2 className="text-xl font-medium mt-8 mb-4">How We Use Your Information</h2>
            <p>We use your information for the following purposes:</p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>To provide and maintain our services</li>
              <li>To communicate with you about our services</li>
              <li>To improve our website and services</li>
              <li>To send you marketing and promotional materials (with your consent)</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2 className="text-xl font-medium mt-8 mb-4">Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information from unauthorized access,
              alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic
              storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and to hold certain
              information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
              sent. For more information, please see our Cookie Policy.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Third-Party Services</h2>
            <p>
              We may use third-party services that collect, monitor, and analyze data to improve our service. These
              third parties have access to your personal information only to perform these tasks on our behalf and are
              obligated not to disclose or use it for any other purpose.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Your Data Protection Rights</h2>
            <p>Depending on your location, you may have the following rights:</p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>The right to access your personal data</li>
              <li>The right to rectify inaccurate personal data</li>
              <li>The right to request deletion of your personal data</li>
              <li>The right to restrict processing of your personal data</li>
              <li>The right to data portability</li>
              <li>The right to object to processing of your personal data</li>
            </ul>

            <h2 className="text-xl font-medium mt-8 mb-4">Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last Updated" date.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:{" "}
              <a href="mailto:hello@synsol.dev" className="text-africa-orange hover:text-africa-yellow">
                hello@synsol.dev
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
