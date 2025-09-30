"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { channelPosts, scenarios } from "@/lib/dummyData";
import { ArrowLeft, Pin, MessageCircle, Heart } from "lucide-react";

export default function ChannelsPage() {
  const router = useRouter();
  const [likedPosts, setLikedPosts] = useState<string[]>([]);

  const toggleLike = (postId: string) => {
    if (likedPosts.includes(postId)) {
      setLikedPosts(likedPosts.filter(id => id !== postId));
    } else {
      setLikedPosts([...likedPosts, postId]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-yellow-50">
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
          <div className="text-5xl mb-3">💬</div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Community Channels
          </h1>
          <p className="text-gray-600">
            Connect with learners and share resources
          </p>
        </div>

        <Card className="bg-gradient-to-br from-green-500 to-emerald-600 border-0 shadow-xl">
          <div className="p-6">
            <h2 className="text-xl font-bold text-white mb-3">
              Scenario Templates
            </h2>
            <div className="space-y-2">
              {scenarios.map((scenario) => (
                <div
                  key={scenario.id}
                  className="bg-white/20 backdrop-blur-sm rounded-xl p-4 hover:bg-white/30 transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🎭</span>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white">
                        {scenario.title}
                      </h3>
                      <p className="text-sm text-green-50">
                        {scenario.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-green-600" />
            Recent Posts
          </h2>
          <div className="space-y-3">
            {channelPosts.map((post) => (
              <Card
                key={post.id}
                className={`bg-white border-0 shadow-lg hover:shadow-xl transition-all ${
                  post.isPinned ? "border-2 border-yellow-400" : ""
                }`}
              >
                <div className="p-5">
                  {post.isPinned && (
                    <div className="flex items-center gap-1 text-yellow-600 text-sm font-semibold mb-2">
                      <Pin className="h-4 w-4" />
                      Pinned
                    </div>
                  )}
                  <div className="flex gap-3 mb-3">
                    <div className="text-3xl">{post.avatar}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-gray-800">
                          {post.author}
                        </span>
                        <span className="text-xs text-gray-500">
                          {post.time}
                        </span>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        {post.content}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 ml-12">
                    <button
                      onClick={() => toggleLike(post.id)}
                      className="flex items-center gap-1 text-sm font-medium transition-colors"
                    >
                      <Heart
                        className={`h-4 w-4 ${
                          likedPosts.includes(post.id)
                            ? "fill-red-500 text-red-500"
                            : "text-gray-400"
                        }`}
                      />
                      <span
                        className={
                          likedPosts.includes(post.id)
                            ? "text-red-500"
                            : "text-gray-500"
                        }
                      >
                        {likedPosts.includes(post.id) ? "Liked" : "Like"}
                      </span>
                    </button>
                    <button className="flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-gray-700">
                      <MessageCircle className="h-4 w-4" />
                      Reply
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <Button
          className="w-full h-14 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 rounded-2xl font-bold shadow-lg text-lg"
        >
          Create Post
        </Button>
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
          <button
            onClick={() => router.push("/events")}
            className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-700"
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center">
              📅
            </div>
            <span className="text-xs font-medium">Events</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-green-600">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              💬
            </div>
            <span className="text-xs font-semibold">Channels</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
