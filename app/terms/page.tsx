import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service | Synapse Solutions",
  description: "Terms of Service for Synapse Solutions website design and development services",
}

export default function TermsPage() {
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
          <h1 className="text-3xl font-light text-white mb-6">Terms of Service</h1>
          <p className="text-gray-400 mb-6">Effective Date: April 10, 2024</p>

          <div className="prose prose-invert prose-gray max-w-none">
            <p>
              These Terms of Service ("Terms") govern the use of website design and development services ("Services")
              provided by Synapse Solutions ("the Company"). By purchasing or using any of our Services, you agree to be
              bound by these Terms. If you do not agree with any part of these Terms, you should not proceed with a
              purchase.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Services Provided</h2>
            <p>
              Synapse Solutions offers website design, development, and deployment services through tiered service
              packages. Specific features and deliverables vary depending on the selected package.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Payment Terms</h2>
            <h3 className="text-lg font-medium mt-6 mb-3">2.1 Monthly Payment Plans</h3>
            <p>
              Customers may elect to pay for Services via a monthly payment plan. Monthly payments are due on the date
              of initial purchase and recur on the same calendar day each month thereafter until the customer elects to
              complete a buyout or discontinues service in accordance with Section 4.
            </p>
            <p>
              There is no fixed term for monthly payments. Customers may continue paying monthly for as long as they
              wish without acquiring full ownership of the website.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-3">2.2 Ownership and Buyout Option</h3>
            <p>
              Ownership of the website, including all associated code and assets, remains with Synapse Solutions until
              the customer completes a formal buyout. A buyout may be initiated by the customer at any time.
            </p>
            <p>The buyout amount is calculated as follows:</p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>The total remaining balance due on the selected service package at the time of buyout;</li>
              <li>
                Plus interest accrued on the outstanding balance at a compound monthly rate of seven percent (7%),
                calculated from the date of first payment.
              </li>
            </ul>
            <p>The interest continues to accrue monthly until either:</p>
            <ul className="list-disc pl-6 mt-2 mb-4">
              <li>The customer pays the full buyout amount; or</li>
              <li>The customer reaches seven (7) months from the date of first payment.</li>
            </ul>

            <h2 className="text-xl font-medium mt-8 mb-4">Delivery and Timelines</h2>
            <p>
              Project timelines will be mutually agreed upon during onboarding. Delays due to incomplete information,
              change requests, or force majeure events may affect delivery time. Synapse Solutions will make reasonable
              efforts to meet stated deadlines.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Cancellation and Refunds</h2>
            <p>
              Customers may cancel their monthly plan at any time by providing written notice to Synapse Solutions.
              Cancellation will not entitle the customer to a refund of amounts already paid. If the website has not
              been bought out at the time of cancellation, all rights to the website and associated materials remain
              with Synapse Solutions.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Intellectual Property</h2>
            <p>
              Until the buyout is completed and payment in full is received, all intellectual property rights related to
              the website design, development, code, and deliverables remain the exclusive property of Synapse
              Solutions.
            </p>
            <p>
              Upon completion of the buyout, Synapse Solutions transfers full ownership of the website to the customer,
              excluding any third-party licenses, stock content, or proprietary tools used in development.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Limitation of Liability</h2>
            <p>
              Synapse Solutions shall not be liable for indirect, incidental, or consequential damages, including but
              not limited to loss of profits, data, or business opportunities, arising out of or related to the use of
              Services.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Modifications to Terms</h2>
            <p>
              Synapse Solutions reserves the right to update or modify these Terms at any time. Customers will be
              notified of significant changes via email or through their account dashboard. Continued use of the
              Services constitutes acceptance of the revised Terms.
            </p>

            <h2 className="text-xl font-medium mt-8 mb-4">Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of Senegal.</p>

            <h2 className="text-xl font-medium mt-8 mb-4">Contact</h2>
            <p>
              For questions or concerns regarding these Terms, please contact us at:{" "}
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
