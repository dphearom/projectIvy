"use client";

import { useActionState, useEffect } from "react";
import { updateInquiryStatus, type InquiryStatusState } from "@/app/actions/inquiries";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import FormField from "@/components/forms/FormField";
import SubmitButton from "@/components/forms/SubmitButton";
import { inquiryLabel } from "@/lib/inquiries";

export interface InquiryDetailRow {
  id: number;
  role: string;
  name: string;
  email: string;
  phone: string;
  childName: string | null;
  grade: string;
  school: string;
  inquiries: string[];
  status: string;
  notes: string | null;
  handledByTelegram: string | null;
  createdAt: Date;
}

const STATUS_STYLES: Record<string, string> = {
  pending: "bg-[#f5e6c8] text-[#8a6d1d]",
  contacted: "bg-[#dce8f7] text-[#1d4f8a]",
  handled: "bg-[#dcefdc] text-[#1d6b3a]",
  archived: "bg-[color-mix(in_srgb,var(--ink)_10%,transparent)] text-ink-soft",
};

const formatDate = (date: Date) =>
  new Intl.DateTimeFormat("en-US", { dateStyle: "medium", timeStyle: "short" }).format(date);

const initialState: InquiryStatusState = {};

interface Props {
  inquiry: InquiryDetailRow | null;
  onClose: () => void;
}

const InquiryDetailDialog = ({ inquiry, onClose }: Props) => {
  const [state, formAction] = useActionState(updateInquiryStatus, initialState);

  useEffect(() => {
    if (state.success) onClose();
  }, [state.success, onClose]);

  if (!inquiry) return null;

  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {inquiry.name}
            <Badge variant="outline" className={STATUS_STYLES[inquiry.status] ?? STATUS_STYLES.pending}>
              {inquiry.status}
            </Badge>
          </DialogTitle>
          <DialogDescription>Consultation inquiry details and status</DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
          <div>
            <div className="text-ink-soft text-xs uppercase tracking-wide">Contact</div>
            <div>{inquiry.email}</div>
            <div>{inquiry.phone}</div>
            <Badge variant="secondary" className="mt-1">
              {inquiry.role}
            </Badge>
          </div>
          <div>
            <div className="text-ink-soft text-xs uppercase tracking-wide">Student</div>
            <div>{inquiry.role === "parent" ? (inquiry.childName ?? "—") : "—"}</div>
          </div>
          <div>
            <div className="text-ink-soft text-xs uppercase tracking-wide">School / Grade</div>
            <div>{inquiry.school}</div>
            <div className="text-ink-soft">Grade {inquiry.grade}</div>
          </div>
          <div>
            <div className="text-ink-soft text-xs uppercase tracking-wide">Submitted</div>
            <div>{formatDate(inquiry.createdAt)}</div>
          </div>
          <div className="col-span-2">
            <div className="text-ink-soft text-xs uppercase tracking-wide">Inquiries</div>
            <div>{inquiry.inquiries.length > 0 ? inquiry.inquiries.map(inquiryLabel).join(", ") : "—"}</div>
          </div>
          {inquiry.handledByTelegram && (
            <div className="col-span-2 text-xs text-ink-soft">
              Last updated via Telegram by {inquiry.handledByTelegram}
            </div>
          )}
        </div>

        <form action={formAction} className="mt-2 border-t border-line pt-4">
          <input type="hidden" name="id" value={inquiry.id} />
          <FormField label="Status" name="status" as="select" defaultValue={inquiry.status}>
            <option value="pending">Pending</option>
            <option value="contacted">Contacted</option>
            <option value="handled">Handled</option>
            <option value="archived">Archived</option>
          </FormField>
          <FormField
            label="Notes"
            name="notes"
            as="textarea"
            rows={2}
            defaultValue={inquiry.notes ?? ""}
            placeholder="Add a remark… (required to archive)"
          />
          {state.error && <p className="text-[#c0392b] text-[0.8rem] mb-2">{state.error}</p>}
          <div className="mt-6 flex justify-end">
            <SubmitButton label="Save" pendingLabel="Saving…" variant="gold" className="text-[0.8rem] py-[0.4rem] px-3" />
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default InquiryDetailDialog;
