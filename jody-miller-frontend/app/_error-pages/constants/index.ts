import type { IErrorPageContent } from "../types";

export const ERROR_404_CONTENT: IErrorPageContent = {
  code: "404",
  label: "Page not found",
  title: "This page seems to have wandered off.",
  description:
    "The address you\u2019re looking for may have moved, been renamed, or never existed in the first place. In any case, you\u2019re welcome to explore the rest of the site from here.",
};

export const ERROR_500_CONTENT: IErrorPageContent = {
  code: "500",
  label: "Something went wrong",
  title: "An unexpected error interrupted your visit.",
  description:
    "This one is on our end, not yours. The issue has been logged for review. You can try again in a moment \u2014 if the problem persists, please get in touch and we will look into it.",
};

export const ERROR_LOG_TAG = "error-boundary";
