import { CalendarDays, MapPin, Trophy, Users } from "lucide-react";
import { Link } from "react-router-dom";

import type { Event } from "@/types/event";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { statusConfig } from "@/utils/eventStatus";

interface EventCardProps {
    event: Event;
}

export function EventCard({ event }: EventCardProps) {
    const status = statusConfig[event.status];

    return (
        <Card className="group overflow-hidden border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(215,255,0,0.12)]">
            <div className="relative">
                <img
                    src={event.bannerImage}
                    alt={event.title}
                    className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                <div className="absolute right-4 top-4">
                    <Badge className={status.className}>{status.label}</Badge>
                </div>
            </div>

            <div className="space-y-5 p-5">
                <div>
                    <h3 className="line-clamp-1 text-xl font-semibold">
                        {event.title}
                    </h3>

                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                        {event.tagline}
                    </p>
                </div>

                <div className="flex flex-wrap gap-2">
                    {event.tracks.map((track) => (
                        <Badge
                            key={track}
                            variant="outline"
                            className="border-primary/20 bg-primary/5 text-primary"
                        >
                            {track}
                        </Badge>
                    ))}
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <CalendarDays className="h-4 w-4 text-primary" />
                        <span>
                            {new Date(event.startDate).toLocaleDateString()}
                        </span>
                    </div>

                    <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span className="truncate">{event.location}</span>
                    </div>

                    <div className="flex items-center gap-2 text-muted-foreground">
                        <Trophy className="h-4 w-4 text-primary" />
                        <span>
                            ${event.prizePool.toLocaleString()}
                        </span>
                    </div>

                    <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="h-4 w-4 text-primary" />
                        <span>
                            {event.participantsCount.toLocaleString()}
                        </span>
                    </div>
                </div>

                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                    <div>
                        <p className="text-xs text-muted-foreground">
                            Organized by
                        </p>

                        <p className="text-sm font-medium">
                            {event.organizer}
                        </p>
                    </div>

                    <Link to={`/events/${event.slug}`}>
                        <Button>
                            View Details
                        </Button>
                    </Link>
                </div>
            </div>
        </Card>
    );
}