export interface IPrivacySection {
  id: string;
  title: string;
  paragraphs: string[];
}

export const PRIVACY_LAST_UPDATED = "April 2026";

export const PRIVACY_CATEGORY_LABEL = "Legal";

export const PRIVACY_PAGE_TITLE = "Privacy Policy";

export const PRIVACY_INTRO =
  "This website is a personal site maintained on behalf of Jody Greenstone Miller. We respect your privacy and aim to be transparent about the limited information this site collects, how it is used, and the choices available to you.";

export const PRIVACY_SECTIONS: IPrivacySection[] = [
  {
    id: "information-we-collect",
    title: "Information we collect",
    paragraphs: [
      "The only personal information we collect is information you choose to share with us. When you submit the contact form, we collect the name, email address, and message you provide. When you subscribe to our newsletter, we collect your email address.",
      "In the ordinary course of operating a website, our hosting provider may also log standard technical information such as your IP address, browser type, device type, and the pages you visit. This information is used for security, analytics, and site reliability, and is not used to personally identify you.",
    ],
  },
  {
    id: "how-we-use-information",
    title: "How we use information",
    paragraphs: [
      "We use the information you provide for the specific purpose you provided it: to respond to your inquiry, to send newsletter dispatches you have opted in to receive, or to fulfill a request you have made (for example, sending you a press bio).",
      "We do not sell or rent your personal information. We do not use it for targeted advertising.",
    ],
  },
  {
    id: "third-party-content",
    title: "Third-party content",
    paragraphs: [
      "This site may embed content from third-party services such as YouTube and Spotify. When you interact with embedded content, the provider may set its own cookies and collect information in accordance with its own privacy policy. We recommend reviewing the privacy policies of any third-party services whose content you engage with.",
    ],
  },
  {
    id: "service-providers",
    title: "Service providers",
    paragraphs: [
      "We rely on a small number of trusted service providers to operate this site — including hosting, content management, email delivery, and analytics. These providers may process limited information on our behalf and are only permitted to use it to provide their services.",
    ],
  },
  {
    id: "your-choices",
    title: "Your choices",
    paragraphs: [
      "You can unsubscribe from the newsletter at any time using the link included in every dispatch. You can request access to, correction of, or deletion of any personal information we hold about you by contacting us using the details below. We will respond to reasonable requests within a reasonable timeframe.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies",
    paragraphs: [
      "This site uses only the cookies that are strictly necessary for the site to function properly. We do not use cookies for advertising. Most browsers allow you to control cookies through their settings.",
    ],
  },
  {
    id: "children",
    title: "Children's privacy",
    paragraphs: [
      "This site is not directed to children under the age of 13, and we do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will take steps to remove it.",
    ],
  },
  {
    id: "changes",
    title: "Changes to this policy",
    paragraphs: [
      "We may update this policy from time to time to reflect changes in our practices or for legal reasons. The \u201CLast updated\u201D date at the top of this page will always indicate when the policy was most recently revised.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    paragraphs: [
      "If you have questions about this policy or about how your information is handled, please use the contact form linked below to get in touch.",
    ],
  },
];
