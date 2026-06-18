import { ContactLink, NavLink } from "@/lib/types";

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Tools", href: "#tools" },
  { label: "Contact", href: "#contact" },
];

export const contactLinks: ContactLink[] = [
  {
    id: "1",
    label: "Email",
    value: "mikaebora@email.com",
    href: "mailto:mikaebora@email.com",
    icon: "email",
  },
  {
    id: "2",
    label: "Facebook",
    value: "Mika Ebora",
    href: "https://facebook.com",
    icon: "facebook",
  },
  {
    id: "3",
    label: "LinkedIn",
    value: "Mika Ebora",
    href: "https://linkedin.com",
    icon: "linkedin",
  },
];
