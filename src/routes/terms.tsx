import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/ContentPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms and Conditions — Soniccora" },
      {
        name: "description",
        content:
          "Please read these terms and conditions carefully before using Our Service.",
      },
      { property: "og:title", content: "Soniccora Terms and Conditions" },
      {
        property: "og:description",
        content: "The governing terms for using the Soniccora platform.",
      },
    ],
  }),
  component: () => (
    <ContentPage
      eyebrow="TERMS"
      title="Terms and Conditions"
      intro={
        <div className="space-y-4">
          <p>Last updated: April 27, 2026</p>
          <p>Please read these terms and conditions carefully before using Our Service.</p>
        </div>
      }
      sections={[
        {
          heading: "Interpretation and Definitions",
          body: (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Interpretation</h3>
                <p>The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Definitions</h3>
                <p>For the purposes of these Terms and Conditions:</p>
                <ul className="list-disc pl-5 mt-4 space-y-4">
                  <li>
                    <p><strong>Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party, where &quot;control&quot; means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</p>
                  </li>
                  <li>
                    <p><strong>Country</strong> refers to: California, United States</p>
                  </li>
                  <li>
                    <p><strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in these Terms and Conditions) refers to Soniccora Technologies Inc.</p>
                  </li>
                  <li>
                    <p><strong>Device</strong> means any device that can access the Service such as a computer, a cell phone or a digital tablet.</p>
                  </li>
                  <li>
                    <p><strong>Service</strong> refers to the Website.</p>
                  </li>
                  <li>
                    <p><strong>Terms and Conditions</strong> (also referred to as &quot;Terms&quot;) means these Terms and Conditions, including any documents expressly incorporated by reference, which govern Your access to and use of the Service and form the entire agreement between You and the Company regarding the Service. These Terms and Conditions have been created with the help of the <a href="https://www.termsfeed.com/terms-conditions-generator/" target="_blank" className="text-primary hover:underline">Terms and Conditions Generator</a>.</p>
                  </li>
                  <li>
                    <p><strong>Third-Party Social Media Service</strong> means any services or content (including data, information, products or services) provided by a third party that is displayed, included, made available, or linked to through the Service.</p>
                  </li>
                  <li>
                    <p><strong>Website</strong> refers to soniccora, accessible from <a href="https://www.soniccora.com/" className="text-primary hover:underline" rel="external nofollow noopener" target="_blank">https://www.soniccora.com/</a></p>
                  </li>
                  <li>
                    <p><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
                  </li>
                </ul>
              </div>
            </div>
          ),
        },
        {
          heading: "Acknowledgment",
          body: (
            <div className="space-y-4">
              <p>These are the Terms and Conditions governing the use of this Service and the agreement between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.</p>
              <p>Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.</p>
              <p>By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.</p>
              <p>You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.</p>
              <p>Your access to and use of the Service is also subject to Our Privacy Policy, which describes how We collect, use, and disclose personal information. Please read Our Privacy Policy carefully before using Our Service.</p>
            </div>
          ),
        },
        {
          heading: "Links to Other Websites",
          body: (
            <div className="space-y-6">
              <p>Our Service may contain links to third-party websites or services that are not owned or controlled by the Company.</p>
              <p>The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such websites or services.</p>
              <div>
                <h3 className="text-lg font-semibold mb-2">Links from a Third-Party Social Media Service</h3>
                <p>The Service may display, include, make available, or link to content or services provided by a Third-Party Social Media Service. A Third-Party Social Media Service is not owned or controlled by the Company, and the Company does not endorse or assume responsibility for any Third-Party Social Media Service.</p>
                <p className="mt-4">You acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with Your access to or use of any Third-Party Social Media Service, including any content, goods, or services made available through them.</p>
              </div>
            </div>
          ),
        },
        {
          heading: "Termination",
          body: (
            <p>We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions. Upon termination, Your right to use the Service will cease immediately.</p>
          ),
        },
        {
          heading: "Limitation of Liability",
          body: (
            <div className="space-y-4">
              <p>Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of these Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.</p>
              <p>To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of these Terms).</p>
            </div>
          ),
        },
        {
          heading: '"AS IS" and "AS AVAILABLE" Disclaimer',
          body: (
            <div className="space-y-4">
              <p>The Service is provided to You &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise.</p>
              <p>Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.</p>
            </div>
          ),
        },
        {
          heading: "Governing Law",
          body: (
            <p>The laws of the Country, excluding its conflicts of law rules, shall govern these Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.</p>
          ),
        },
        {
          heading: "Disputes Resolution",
          body: (
            <p>If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.</p>
          ),
        },
        {
          heading: "United States Legal Compliance",
          body: (
            <p>You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a &quot;terrorist supporting&quot; country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.</p>
          ),
        },
        {
          heading: "Severability and Waiver",
          body: (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Severability</h3>
                <p>If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Waiver</h3>
                <p>Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.</p>
              </div>
            </div>
          ),
        },
        {
          heading: "Changes to These Terms",
          body: (
            <div className="space-y-4">
              <p>We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect.</p>
              <p>By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the Service.</p>
            </div>
          ),
        },
        {
          heading: "Contact Us",
          body: (
            <div className="space-y-4">
              <p>If you have any questions about these Terms and Conditions, You can contact us:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>By email: connect@soniccora.com</li>
                <li>By visiting this page on our website: <a href="https://www.soniccora.com/contact" className="text-primary hover:underline" target="_blank">https://www.soniccora.com/contact</a></li>
                <li>By phone: +1 (213) 555-7812</li>
                <li>By mail: 447 S Spring St, Los Angeles, CA 90013, USA</li>
              </ul>
            </div>
          ),
        },
      ]}
      ctaHref="/product"
      ctaLabel="Back to Platform"
      showCTA={false}
    />
  ),
});
