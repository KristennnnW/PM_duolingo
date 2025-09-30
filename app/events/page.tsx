"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { dummyEvents } from "@/lib/dummyData";
import { ArrowLeft, Calendar, Users, Clock, CircleCheck as CheckCircle } from "lucide-react";

export default function EventsPage() {
  const router = useRouter();
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [joinedEvents, setJoinedEvents] = useState<string[]>([]);

  const handleJoinEvent = (eventId: string) => {
    if (!joinedEvents.includes(eventId)) {
      setJoinedEvents([...joinedEvents, eventId]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50">
      <div className="max-w-2xl mx-auto p-4 pb-20 space-y-6">
        <header className="pt-4 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => router.push("/dashboard")}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
        </header>

        <div className="text-center">
          <div className="text-5xl mb-3">📅</div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Practice Events
          </h1>
          <p className="text-gray-600">
            Join group sessions with other learners
          </p>
        </div>

        <div className="space-y-4">
          {dummyEvents.map((event) => (
            <Card
              key={event.id}
              className="bg-white border-0 shadow-xl overflow-hidden hover:shadow-2xl transition-all"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {event.title}
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm font-medium">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Users className="h-4 w-4" />
                        <span className="text-sm font-medium">
                          {event.participants}/{event.maxParticipants} participants
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-4xl">🎯</div>
                </div>

                <div className="mb-4">
                  <div className="inline-block px-4 py-2 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                    {event.topic}
                  </div>
                </div>

                <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-4">
                  <div
                    className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full transition-all"
                    style={{
                      width: `${(event.participants / event.maxParticipants) * 100}%`
                    }}
                  />
                </div>

                {!joinedEvents.includes(event.id) ? (
                  <Button
                    onClick={() => handleJoinEvent(event.id)}
                    className="w-full h-12 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-xl font-bold shadow-lg"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Join Event
                  </Button>
                ) : (
                  <Button
                    disabled
                    className="w-full h-12 bg-green-100 text-green-700 rounded-xl font-bold"
                  >
                    <CheckCircle className="mr-2 h-5 w-5" />
                    Joined!
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-br from-yellow-100 to-orange-100 border-2 border-yellow-300">
          <div className="p-6 text-center">
            <div className="text-4xl mb-3">💡</div>
            <h3 className="font-bold text-gray-800 mb-2">Pro Tip</h3>
            <p className="text-sm text-gray-700">
              Join events regularly to practice with different speakers and build confidence!
            </p>
          </div>
        </Card>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-around">
          <button
            onClick={() => router.push("/dashboard")}
            className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-700"
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center">
              🏠
            </div>
            <span className="text-xs font-medium">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-green-600">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              📅
            </div>
            <span className="text-xs font-semibold">Events</span>
          </button>
          <button
            onClick={() => router.push("/channels")}
            className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-700"
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center">
              💬
            </div>
            <span className="text-xs font-medium">Channels</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
