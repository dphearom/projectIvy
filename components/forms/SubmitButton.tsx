"use client";

import { useFormStatus } from "react-dom";
import { buttonClassName, type ButtonVariant } from "@/components/Button";

interface Props {
  label?: string;
  pendingLabel?: string;
  variant?: ButtonVariant;
  className?: string;
}

const SubmitButton = ({
  label = "Submit",
  pendingLabel = "Submitting…",
  variant = "gold",
  className,
}: Props) => {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className={buttonClassName(variant, className)} disabled={pending}>
      {pending ? pendingLabel : label}
    </button>
  );
};

export default SubmitButton;
