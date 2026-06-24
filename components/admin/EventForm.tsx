"use client";

import { useActionState } from "react";
import FormField from "@/components/forms/FormField";
import SubmitButton from "@/components/forms/SubmitButton";
import {
  createEvent,
  updateEvent,
  type EventFormState,
} from "@/app/actions/admin-events";

interface EventData {
  id?: number;
  title?: string;
  description?: string;
  overview?: string;
  image?: string;
  venue?: string;
  location?: string;
  date?: string;
  time?: string;
  mode?: string;
  audience?: string;
  organizer?: string;
  agenda?: string[];
  tags?: string[];
  formLink?: string | null;
}

interface Props {
  event?: EventData;
}

const initialState: EventFormState = {};

const EventForm = ({ event }: Props) => {
  const isEdit = Boolean(event?.id);
  const action = isEdit ? updateEvent : createEvent;
  const [state, formAction] = useActionState(action, initialState);

  return (
    <form action={formAction} className="admin-form">
      {isEdit && <input type="hidden" name="id" value={event!.id} />}

      <div className="admin-form__grid">
        <FormField
          label="Title"
          name="title"
          required
          defaultValue={event?.title}
          placeholder="Event title"
        />
        <FormField
          label="Image URL"
          name="image"
          defaultValue={event?.image}
          placeholder="https://..."
        />
        <FormField
          label="Date"
          name="date"
          type="date"
          required
          defaultValue={event?.date}
        />
        <FormField
          label="Time (24h)"
          name="time"
          type="time"
          required
          defaultValue={event?.time}
        />
        <FormField
          label="Venue"
          name="venue"
          defaultValue={event?.venue}
          placeholder="Venue name"
        />
        <FormField
          label="Location"
          name="location"
          defaultValue={event?.location}
          placeholder="City, Country"
        />
        <FormField
          label="Mode"
          name="mode"
          defaultValue={event?.mode}
          placeholder="In-Person / Online / Hybrid"
        />
        <FormField
          label="Audience"
          name="audience"
          defaultValue={event?.audience}
          placeholder="Who is this for?"
        />
        <FormField
          label="Organizer"
          name="organizer"
          defaultValue={event?.organizer}
          placeholder="Organization name"
        />
        <FormField
          label="Registration Form Link"
          name="formLink"
          defaultValue={event?.formLink ?? ""}
          placeholder="https://forms.google.com/..."
        />
      </div>

      <FormField
        label="Overview"
        name="overview"
        as="textarea"
        rows={3}
        defaultValue={event?.overview}
        placeholder="Brief overview"
      />
      <FormField
        label="Description"
        name="description"
        as="textarea"
        rows={5}
        required
        defaultValue={event?.description}
        placeholder="Full description"
      />
      <FormField
        label="Agenda (one item per line)"
        name="agenda"
        as="textarea"
        rows={5}
        defaultValue={event?.agenda?.join("\n")}
        placeholder={"Item 1\nItem 2\nItem 3"}
      />
      <FormField
        label="Tags (comma-separated)"
        name="tags"
        defaultValue={event?.tags?.join(", ")}
        placeholder="Education, Mentorship, Bootcamp"
      />

      {state.error && <p className="form-error">{state.error}</p>}

      <div className="admin-form__footer">
        <SubmitButton
          label={isEdit ? "Save changes" : "Create event"}
          pendingLabel="Saving…"
        />
      </div>
    </form>
  );
};

export default EventForm;
