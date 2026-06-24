"use client";

import { useFormStatus } from "react-dom";

interface Props {
  label?: string;
  pendingLabel?: string;
  className?: string;
}

const SubmitButton = ({
  label = "Submit",
  pendingLabel = "Submitting…",
  className = "btn btn-gold",
}: Props) => {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className={className} disabled={pending}>
      {pending ? pendingLabel : label}
    </button>
  );
};

export default SubmitButton;
