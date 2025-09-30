"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { dummyEvents, channelPosts } from "@/lib/dummyData";
import { Sparkles, Calendar, MessageSquare, Users, Clock } from "lucide-react";

export default function DashboardPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-emerald-50">
      <div className="max-w-4xl mx-auto p-4 pb-20 space-y-6">
        <header className="pt-6 pb-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                Hey, Alex! 👋
              </h1>
              <p className="text-gray-600 mt-1">Ready to practice Spanish today?</p>
            </div>
            <div className="text-5xl">🧑‍🎓</div>
          </div>
        </header>

        <Card className="bg-gradient-to-br from-green-500 to-emerald-600 border-0 shadow-2xl overflow-hidden">
          <div className="p-8 relative">
            <div className="absolute top-0 right-0 text-9xl opacity-10">✨</div>
            <h2 className="text-2xl font-bold text-white mb-2 relative z-10">
              Find Your Practice Partner
            </h2>
            <p className="text-green-50 mb-6 relative z-10">
              Get matched with a peer for instant conversation practice
            </p>
            <Button
              onClick={() => router.push("/match")}
              className="h-14 px-8 text-lg font-bold bg-yellow-400 hover:bg-yellow-500 text-gray-900 rounded-2xl shadow-lg hover:scale-105 transition-transform relative z-10"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Quick Match
            </Button>
          </div>
        </Card>

        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-green-600" />
              Practice Events
            </h2>
            <Button
              variant="ghost"
              onClick={() => router.push("/events")}
              className="text-green-600 hover:text-green-700 font-semibold"
            >
              View All
            </Button>
          </div>
          <div className="space-y-3">
            {dummyEvents.map((event) => (
              <Card
                key={event.id}
                className="p-5 hover:shadow-lg transition-all cursor-pointer border-2 border-transparent hover:border-green-300"
                onClick={() => router.push("/events")}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 mb-1">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {event.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {event.participants}/{event.maxParticipants}
                      </span>
                    </div>
                    <div className="mt-2">
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                        {event.topic}
                      </span>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl"
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push("/events");
                    }}
                  >
                    Join
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-yellow-600" />
              Community Channels
            </h2>
            <Button
              variant="ghost"
              onClick={() => router.push("/channels")}
              className="text-yellow-600 hover:text-yellow-700 font-semibold"
            >
              View All
            </Button>
          </div>
          <div className="space-y-3">
            {channelPosts.slice(0, 3).map((post) => (
              <Card
                key={post.id}
                className={`p-4 hover:shadow-md transition-all cursor-pointer ${
                  post.isPinned ? "border-2 border-yellow-300 bg-yellow-50" : ""
                }`}
                onClick={() => router.push("/channels")}
              >
                <div className="flex gap-3">
                  <div className="text-2xl">{post.avatar}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-gray-800 text-sm">
                        {post.author}
                      </span>
                      <span className="text-xs text-gray-500">{post.time}</span>
                    </div>
                    <p className="text-sm text-gray-700">{post.content}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-around">
          <button className="flex flex-col items-center gap-1 text-green-600">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              🏠
            </div>
            <span className="text-xs font-semibold">Home</span>
          </button>
          <button
            onClick={() => router.push("/events")}
            className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-700"
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center">
              📅
            </div>
            <span className="text-xs font-medium">Events</span>
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
