import {
  defaultEventDetails,
  eventDetailsMap,
} from "@/mocks/data/eventDetails";

export function getEventDetails(
  slug: string,
) {
  return (
    eventDetailsMap[slug] ??
    defaultEventDetails
  );
}