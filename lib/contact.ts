import { ContactLink, NavLink } from "@/lib/types";

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Tools", href: "#tools" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const contactLinks: ContactLink[] = [
  {
    id: "1",
    label: "Email",
    value: "mikaellapebora@email.com",
    href: "mailto:mikaellapebora@email.com",
    icon: "email",
  },
  {
    id: "2",
    label: "Facebook",
    value: "Mikaella Ebora",
    href: "https://facebook.com",
    icon: "facebook",
  },
  {
    id: "3",
    label: "LinkedIn",
    value: "Mikaella Ebora",
    href: "https://www.linkedin.com/in/ma-mikaella-ebora-83449b32a/",
    icon: "linkedin",
  },
];
