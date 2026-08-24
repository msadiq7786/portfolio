export type Project = {
  id: string;
  title: string;
  period: {
    /** Start date (e.g., "05.2025"). */
    start: string;
    /** End date; leave undefined for "Present". */
    end?: string;
  };
  link: string;
  skills: string[];
  description?: string;
  icon?: React.ReactElement;
};
