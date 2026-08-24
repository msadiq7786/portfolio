export type User = {
  firstName: string;
  lastName: string;
  displayName: string;
  username: string;
  gender: "male" | "female";
  /** e.g. "he/him", "she/her", "they/them" */
  pronouns: string;
  bio: string;
  flipSentences: string[];
  address: string;
  /** E.164 format, base64 encoded (https://t.io.vn/base64-string-converter) */
  phoneNumberB64: string;
  /** base64 encoded (https://t.io.vn/base64-string-converter) */
  emailB64: string;
  /** Personal/homepage URL */

  website: string;
  /** Primary/current role shown on profile */

  jobTitle: string;
  /** Work history entries */
  about: string;
  avatar: string;

  ogImage: string;
  /** Audio URL for name pronunciation */
  namePronunciationUrl: string;
  /** SEO keywords list for metadata */
  keywords: string[];
  /** Time zone in IANA format (e.g., "Asia/Ho_Chi_Minh") */
  timeZone: string;
  /** Profile/site start date in YYYY-MM-DD */
  dateCreated: string;
};
