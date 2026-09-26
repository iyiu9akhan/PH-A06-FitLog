"use client";
import { CheckCircle2, XCircle, AlertTriangle } from "lucide-react";

type ToastType = "success" | "delete" | "warning";

interface CustomToastProps {
  type: ToastType;
  title: string;
  message: string;
}

const config = {
  success: {
    icon: CheckCircle2,
    iconColor: "text-brand",
    iconBg: "bg-brand/10",
    ring: "ring-brand/20",
  },
  delete: {
    icon: XCircle,
    iconColor: "text-red-500",
    iconBg: "bg-red-500/10",
    ring: "ring-red-500/20",
  },
  warning: {
    icon: AlertTriangle,
    iconColor: "text-yellow-500",
    iconBg: "bg-yellow-500/10",
    ring: "ring-yellow-500/20",
  },
};

export default function Toast({ type, title, message }: CustomToastProps) {
  const { icon: Icon, iconColor, iconBg, ring } = config[type];

  return (
    <div className="relative flex items-start gap-3 py-3.5 pl-4 pr-4 rounded-xl bg-[#101216] shadow-[0_8px_24px_rgba(0,0,0,0.35)] ring-1 ring-white/6 overflow-hidden">

      <span className="absolute left-0 top-0 h-full w-0.75 bg-red-500" />

      <div className={`flex items-center justify-center shrink-0 w-8 h-8 rounded-full ${iconBg} ring-1 ${ring}`}>
        <Icon className={iconColor} size={16} />
      </div>

      <div className="flex-1 min-w-0 pt-0.5">
        <p className="font-secondary font-semibold text-[13px] leading-4 text-title mb-1">
          {title}
        </p>
        <p className="font-secondary font-normal text-[12px] leading-4.5 text-subTitle">
          {message}
        </p>
      </div>
    </div>
  );
}