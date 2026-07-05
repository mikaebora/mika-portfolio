export interface NavLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  gradient: string;
  tools: string[];
  href: string;
  video?: string;
  thumbnail?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  logo: string;
}

export interface ContactLink {
  id: string;
  label: string;
  value: string;
  href: string;
  icon: "email" | "whatsapp";
}
