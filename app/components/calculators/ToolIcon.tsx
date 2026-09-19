"use client";

import React from "react";
import {
  Activity,
  ArrowLeftRight,
  ArrowUpRight,
  Award,
  Banknote,
  Briefcase,
  BriefcaseBusiness,
  Building,
  Calculator,
  Coins,
  CreditCard,
  FastForward,
  Flame,
  FlameKindling,
  GraduationCap,
  HeartHandshake,
  Home,
  Landmark,
  Layers,
  Percent,
  PieChart,
  PiggyBank,
  Repeat,
  Scale,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Sunset,
  Target,
  TrendingUp,
  UserCheck,
  LucideProps,
} from "lucide-react";

const ICON_MAP: Record<string, React.ComponentType<LucideProps>> = {
  TrendingUp,
  ArrowUpRight,
  Coins,
  Repeat,
  Banknote,
  Scale,
  Percent,
  Activity,
  PieChart,
  Sparkles,
  Target,
  Sunset,
  GraduationCap,
  HeartHandshake,
  Home,
  Flame,
  FlameKindling,
  ShieldAlert,
  Briefcase,
  PiggyBank,
  CreditCard,
  Layers,
  ShieldCheck,
  UserCheck,
  Stethoscope,
  Calculator,
  Building,
  FastForward,
  ArrowLeftRight,
  Landmark,
  Award,
  BriefcaseBusiness,
};

interface ToolIconProps extends LucideProps {
  name: string;
}

export function ToolIcon({ name, ...props }: ToolIconProps) {
  const IconComponent = ICON_MAP[name] || Calculator;
  return <IconComponent {...props} />;
}
