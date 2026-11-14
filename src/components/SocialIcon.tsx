import { Github, Instagram, Linkedin } from "lucide-react";

const icons = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
};

export function SocialIcon({ id }: { id: keyof typeof icons }) {
  const Icon = icons[id];
  return <Icon aria-hidden="true" />;
}
