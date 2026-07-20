"use client";

import { useActionState } from "react";
import { updateInquiryStatus, type InquiryStatusState } from "@/app/actions/inquiries";
import FormField from "@/components/forms/FormField";
import SubmitButton from "@/components/forms/SubmitButton";

const STATUS_STYLES: Record<string, string> = {
  pending: "bg-[#f5e6c8] text-[#8a6d1d]",
  contacted: "bg-[#dce8f7] text-[#1d4f8a]",
  handled: "bg-[#dcefdc] text-[#1d6b3a]",
};

const initialState: InquiryStatusState = {};

interface Props {
  id: number;
  status: string;
  notes: string | null;
}

const InquiryStatusControl = ({ id, status, notes }: Props) => {
  const [state, formAction] = useActionState(updateInquiryStatus, initialState);

  return (
    <form action={formAction} className="min-w-[200px]">
      <input type="hidden" name="id" value={id} />
      <span
        className={`inline-block mb-2 text-[0.72rem] font-semibold uppercase tracking-[0.04em] px-2 py-[0.15rem] rounded-full ${STATUS_STYLES[status] ?? STATUS_STYLES.pending}`}
      >
        {status}
      </span>
      <FormField label="Status" name="status" as="select" defaultValue={status}>
        <option value="pending">Pending</option>
        <option value="contacted">Contacted</option>
        <option value="handled">Handled</option>
      </FormField>
      <FormField
        label="Notes"
        name="notes"
        as="textarea"
        rows={2}
        defaultValue={notes ?? ""}
        placeholder="Add a remark…"
      />
      {state.error && <p className="text-[#c0392b] text-[0.8rem] mb-2">{state.error}</p>}
      <SubmitButton label="Save" pendingLabel="Saving…" variant="gold" className="text-[0.8rem] py-[0.4rem] px-3" />
    </form>
  );
};

export default InquiryStatusControl;
