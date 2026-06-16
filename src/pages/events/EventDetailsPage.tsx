import { useParams } from "react-router-dom";

import { events } from "@/mocks/data/events";

import { getEventDetails } from "@/utils/getEventDetails";

import { EventHero } from "@/components/events/EventHero";
import { EventInfo } from "@/components/events/EventInfo";
import { EventTracks } from "@/components/events/EventTracks";
import { EventTimeline } from "@/components/events/EventTimeline";
import { EventFaq } from "@/components/events/EventFaq";

export default function EventDetailsPage() {
  const { slug } = useParams();

  const event = events.find(
    (item) => item.slug === slug,
  );

  if (!event) {
    return <div>Event not found</div>;
  }

  const details = getEventDetails(
    event.slug,
  );

  return (
    <>
      <EventHero event={event} />

      <EventInfo
        requirements={details.requirements}
        eligibility={details.eligibility}
        rules={details.rules}
      />

      <EventTracks tracks={event.tracks} />

      <EventTimeline
        timeline={details.timeline}
      />

      <EventFaq faqs={details.faqs} />
    </>
  );
}