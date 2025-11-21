import { useState } from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { EnquiryModal } from "@/components/EnquiryModal";

type EnquiryButtonVariant = "primary" | "secondary";
type EnquiryButtonSize = "sm" | "md" | "lg";

export type EnquiryButtonProps = {
  serviceId: string;
  serviceLabel: string;
  sourcePage?: string;
  buttonLabel?: string;
  variant?: EnquiryButtonVariant;
  size?: EnquiryButtonSize;
};

export function EnquiryButton({
  serviceId,
  serviceLabel,
  sourcePage,
  buttonLabel,
  variant = "secondary",
  size = "md",
}: EnquiryButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const label = buttonLabel ?? "Enquire Now";

  const buttonVariant: ButtonProps["variant"] =
    variant === "primary" ? "default" : "outline";

  const buttonSize: ButtonProps["size"] =
    size === "sm" ? "sm" : size === "lg" ? "lg" : "default";

  return (
    <>
      <Button
        type="button"
        variant={buttonVariant}
        size={buttonSize}
        onClick={() => setIsOpen(true)}
        aria-label={`Enquire about ${serviceLabel}`}
        className={
          variant === "primary"
            ? "bg-gradient-to-r from-[var(--executive-amethyst)] to-[var(--executive-sapphire)] text-white shadow-lg hover:brightness-110"
            : undefined
        }
      >
        {label}
      </Button>

      <EnquiryModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        serviceId={serviceId}
        serviceLabel={serviceLabel}
        sourcePage={sourcePage}
      />
    </>
  );
}

