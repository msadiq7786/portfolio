import { User } from "@/types/user";

export const USER: User = {
  firstName: "Chánh Đại",
  lastName: "Nguyễn",
  displayName: "Chánh Đại",
  username: "ncdai",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Small details matter.",
  flipSentences: [
    "Creating with code. Small details matter.",
    "Design Engineer.",
    "Open source contributor.",
    "I own a vintage iPhone.",
  ],
  address: "Ho Chi Minh City, Viet Nam",
  phoneNumberB64: "Kzg0Nzc3ODg4MTQ4", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  emailB64: "ZGFpQGNoYW5oZGFpLmNvbQ==", // base64 encoded
  website: "https://chanhdai.com",
  jobTitle: "Design Engineer",

  about: `- I’m Chánh Đại (call me Dai) — a Design Engineer with 5+ years of experience, known for pixel-perfect execution and an obsessive attention to detail.
- Passionate about exploring new technologies and turning ideas into reality through polished, thoughtfully crafted projects.
- Creator of [chanhdai.com](https://github.com/ncdai/chanhdai.com) (2k stars), [React Wheel Picker](https://react-wheel-picker.chanhdai.com) (50k+ weekly downloads, ▲Vercel OSS Program), and [ZaDark](https://zadark.com) (80k+ downloads, 30k+ users) — peak metrics.
`,
  avatar: "https://assets.chanhdai.com/images/chanhdai-avatar-ghibli.webp",

  ogImage:
    "https://assets.chanhdai.com/images/screenshot-og-image-dark.png?t=1778602757",
  namePronunciationUrl: "https://assets.chanhdai.com/audio/chanhdai.mp3",
  timeZone: "Asia/Ho_Chi_Minh",
  keywords: [
    "ncdai",
    "nguyenchanhdai",
    "nguyen chanh dai",
    "chanhdai",
    "chanh dai",
    "iamncdai",
    "quaric",
    "zadark",
    "nguyễn chánh đại",
    "chánh đại",
  ],
  dateCreated: "2023-10-20", // YYYY-MM-DD
};
