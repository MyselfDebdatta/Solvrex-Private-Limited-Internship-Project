import {
  BookOpen,
  HeartPulse,
  Sprout,
  Users,
  Leaf,
  LifeBuoy,
  HandHeart,
  Handshake,
  Megaphone,
  FileText,
  BarChart3,
  ShieldCheck,
  Scale,
  Landmark,
  type LucideIcon,
} from "lucide-react";

/** Maps data-layer icon names to components so data modules stay serialisable. */
export const iconRegistry: Record<string, LucideIcon> = {
  BookOpen,
  HeartPulse,
  Sprout,
  Users,
  Leaf,
  LifeBuoy,
  HandHeart,
  Handshake,
  Megaphone,
  FileText,
  BarChart3,
  ShieldCheck,
  Scale,
  Landmark,
};

export const resolveIcon = (name: string): LucideIcon => iconRegistry[name] ?? FileText;
