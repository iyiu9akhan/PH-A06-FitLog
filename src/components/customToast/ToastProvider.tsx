"use client";
import { toast, ToastOptions } from "react-toastify";
import CustomToast from "@/components/customToast/Toast";

const toastOptions: ToastOptions = {
  className: "!bg-transparent !shadow-none !p-0",
  icon: false,
  progressClassName: "!bg-[#C2F800]",
};

export const showSuccessToast = (title: string, message: string) => {
  toast(<CustomToast type="success" title={title} message={message} />, toastOptions);
};

export const showDeleteToast = (title: string, message: string) => {
  toast(<CustomToast type="delete" title={title} message={message} />, toastOptions);
};

export const showWarningToast = (title: string, message: string) => {
  toast(<CustomToast type="warning" title={title} message={message} />, toastOptions);
};