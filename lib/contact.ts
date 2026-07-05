import { ContactLink, NavLink } from "@/lib/types";

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Tools", href: "#tools" },
  { label: "Work", href: "#work" },
  // { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const contactLinks: ContactLink[] = [
  {
    id: "1",
    label: "Email",
    value: "mikaellapebora@gmail.com",
    href: "mailto:mikaellapebora@gmail.com",
    icon: "email",
  },
  {
    id: "2",
    label: "WhatsApp",
    value: "+63 908 676 8338",
    href: "https://wa.me/639086768338",
    icon: "whatsapp",
  },
];
