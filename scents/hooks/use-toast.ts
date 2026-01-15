"use client";

import * as React from "react";
import { toast as sonnerToast } from "sonner";

type ToastVariant = "success" | "destructive" | "info";

interface ToastOptions {
  title?: string;
  description?: string;
  variant?: ToastVariant;
}

type ToastParams = string | ToastOptions;

export function useToast() {
  const toast = (options: ToastParams) => {
    if (typeof options === "string") {
      sonnerToast(options);
    } else {
      const { title, description, variant } = options;

      const type =
        variant === "destructive"
          ? "error"
          : variant === "success"
          ? "success"
          : "info";

      sonnerToast[type](title || "Notification", {
        description: description || "",
        duration: 4000,
      });
    }
  };

  const dismiss = sonnerToast.dismiss;

  return { toast, dismiss };
}

// 🔥 Export a ready-to-use toast shortcut
export const toast = (options: ToastParams) => {
  if (typeof options === "string") {
    return sonnerToast(options);
  }

  const { title, description, variant } = options;

  const type =
    variant === "destructive"
      ? "error"
      : variant === "success"
      ? "success"
      : "info";

  return sonnerToast[type](title || "Notification", {
    description: description || "",
    duration: 4000,
  });
};

export { Toaster } from "@/components/ui/sonner";