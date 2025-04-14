import Link from "next/link"

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gray-950 text-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href="/" className="text-africa-orange hover:text-africa-orange/80 mb-8 inline-block">
          &larr; Back to Home
        </Link>

        <h1 className="text-4xl font-light mb-8 bg-clip-text text-transparent bg-gradient-to-r from-africa-orange to-africa-green">
          Cookie Policy
        </h1>

        <div className="space-y-6 text-gray-300">
          <p className="text-sm text-gray-400">Last Updated: April 10, 2024</p>

          <section>
            <h2 className="text-2xl font-light mb-4 text-white">1. Introduction</h2>
            <p>
              This Cookie Policy explains how Synapse ("we", "us", or "our") uses cookies and similar technologies to
              recognize you when you visit our website at synsol.dev ("Website"). It explains what these technologies
              are and why we use them, as well as your rights to control our use of them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4 text-white">2. What Are Cookies?</h2>
            <p>
              Cookies are small data files that are placed on your computer or mobile device when you visit a website.
              Cookies are widely used by website owners in order to make their websites work, or to work more
              efficiently, as well as to provide reporting information.
            </p>
            <p className="mt-2">
              Cookies set by the website owner (in this case, Synapse) are called "first-party cookies". Cookies set by
              parties other than the website owner are called "third-party cookies". Third-party cookies enable
              third-party features or functionality to be provided on or through the website (e.g., advertising,
              interactive content, and analytics). The parties that set these third-party cookies can recognize your
              computer both when it visits the website in question and also when it visits certain other websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4 text-white">3. Why Do We Use Cookies?</h2>
            <p>
              We use first-party and third-party cookies for several reasons. Some cookies are required for technical
              reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary"
              cookies. Other cookies also enable us to track and target the interests of our users to enhance the
              experience on our Website. Third parties serve cookies through our Website for advertising, analytics, and
              other purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4 text-white">4. Types of Cookies We Use</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-light mb-2 text-white">Essential Cookies</h3>
                <p>
                  These cookies are strictly necessary to provide you with services available through our Website and to
                  use some of its features, such as access to secure areas. Because these cookies are strictly necessary
                  to deliver the Website, you cannot refuse them without impacting how our Website functions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-light mb-2 text-white">Performance and Functionality Cookies</h3>
                <p>
                  These cookies are used to enhance the performance and functionality of our Website but are
                  non-essential to their use. However, without these cookies, certain functionality may become
                  unavailable.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-light mb-2 text-white">Analytics and Customization Cookies</h3>
                <p>
                  These cookies collect information that is used either in aggregate form to help us understand how our
                  Website is being used or how effective our marketing campaigns are, or to help us customize our
                  Website for you.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-light mb-2 text-white">Advertising Cookies</h3>
                <p>
                  These cookies are used to make advertising messages more relevant to you. They perform functions like
                  preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for
                  advertisers, and in some cases selecting advertisements that are based on your interests.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-light mb-2 text-white">Social Media Cookies</h3>
                <p>
                  These cookies are used to enable you to share pages and content that you find interesting on our
                  Website through third-party social networking and other websites. These cookies may also be used for
                  advertising purposes.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4 text-white">5. How Can You Control Cookies?</h2>
            <p>
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences
              by clicking on the appropriate opt-out links provided in the cookie banner on our Website.
            </p>
            <p className="mt-2">
              You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject
              cookies, you may still use our Website though your access to some functionality and areas of our Website
              may be restricted. As the means by which you can refuse cookies through your web browser controls vary
              from browser to browser, you should visit your browser's help menu for more information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4 text-white">6. How Often Will We Update This Cookie Policy?</h2>
            <p>
              We may update this Cookie Policy from time to time in order to reflect, for example, changes to the
              cookies we use or for other operational, legal, or regulatory reasons. Please therefore revisit this
              Cookie Policy regularly to stay informed about our use of cookies and related technologies.
            </p>
            <p className="mt-2">The date at the top of this Cookie Policy indicates when it was last updated.</p>
          </section>

          <section>
            <h2 className="text-2xl font-light mb-4 text-white">7. Contact Us</h2>
            <p>
              If you have any questions about our use of cookies or other technologies, please email us at
              hello@synsol.dev.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
