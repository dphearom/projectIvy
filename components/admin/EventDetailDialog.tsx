"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import EventForm from "@/components/admin/EventForm";
import { publishEvent, unpublishEvent } from "@/app/actions/admin-events";
import { cn } from "@/lib/utils";

export interface EventDetailRow {
  id: number;
  title: string;
  description: string;
  overview: string;
  image: string;
  venue: string;
  location: string;
  date: string;
  time: string;
  mode: string;
  audience: string;
  organizer: string;
  agenda: string[];
  tags: string[];
  formLink: string | null;
  published: boolean;
}

interface Props {
  event: EventDetailRow | null;
  onClose: () => void;
}

const btnCls =
  "text-[0.8rem] py-[0.3rem] px-[0.65rem] rounded-md border-none cursor-pointer transition-opacity duration-150 hover:opacity-85";

const EventDetailDialog = ({ event, onClose }: Props) => {
  if (!event) return null;

  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-2xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {event.title}
            <Badge variant={event.published ? "default" : "secondary"}>
              {event.published ? "Live" : "Unpublished"}
            </Badge>
          </DialogTitle>
          <DialogDescription>Edit event details and publish status</DialogDescription>
        </DialogHeader>

        <form action={event.published ? unpublishEvent : publishEvent} className="mb-4">
          <input type="hidden" name="id" value={event.id} />
          <button
            type="submit"
            className={cn(btnCls, event.published ? "bg-[#95a5a6] text-white" : "bg-[#27ae60] text-white")}
          >
            {event.published ? "Unpublish" : "Publish"}
          </button>
        </form>

        <EventForm event={event} onSuccess={onClose} bare />
      </DialogContent>
    </Dialog>
  );
};

export default EventDetailDialog;
