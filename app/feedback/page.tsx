"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { dummyFeedback } from "@/lib/dummyData";
import { Trophy, Star, Lightbulb, Chrome as Home } from "lucide-react";

export default function FeedbackPage() {
  const router = useRouter();
  const feedback = dummyFeedback;

  const categories = [
    { name: "Fluency", score: feedback.fluency, icon: "💬", color: "from-blue-400 to-blue-600" },
    { name: "Pronunciation", score: feedback.pronunciation, icon: "🗣️", color: "from-green-400 to-green-600" },
    { name: "Clarity", score: feedback.clarity, icon: "✨", color: "from-yellow-400 to-yellow-600" }
  ];

  const totalScore = feedback.fluency + feedback.pronunciation + feedback.clarity;
  const averageScore = (totalScore / 3).toFixed(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-green-50">
      <div className="max-w-2xl mx-auto p-4 pb-20 space-y-6">
        <header className="pt-6 text-center">
          <div className="text-8xl mb-4 animate-bounce">🎉</div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Great Job!
          </h1>
          <p className="text-gray-600">
            You completed the session with Maria
          </p>
        </header>

        <Card className="bg-gradient-to-br from-yellow-400 to-orange-500 border-0 shadow-2xl">
          <div className="p-8 text-center text-white">
            <Trophy className="h-12 w-12 mx-auto mb-3" />
            <div className="text-6xl font-bold mb-2">{averageScore}</div>
            <div className="text-yellow-100 font-medium">Overall Score</div>
          </div>
        </Card>

        <Card className="bg-white border-0 shadow-xl p-6">
          <h2 className="font-bold text-gray-800 text-lg mb-4">Performance Breakdown</h2>
          <div className="space-y-4">
            {categories.map((category) => (
              <div key={category.name}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{category.icon}</span>
                    <span className="font-semibold text-gray-800">
                      {category.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-5 w-5 ${
                          star <= category.score
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${(category.score / 5) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-green-100 to-emerald-100 border-2 border-green-300 shadow-lg">
          <div className="p-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                  AI Coach Tip
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {feedback.tip}
                </p>
              </div>
            </div>
          </div>
        </Card>

        <div className="flex gap-3">
          <Button
            onClick={() => router.push("/dashboard")}
            variant="outline"
            className="flex-1 h-14 rounded-2xl font-semibold gap-2"
          >
            <Home className="h-5 w-5" />
            Home
          </Button>
          <Button
            onClick={() => router.push("/match")}
            className="flex-1 h-14 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-2xl font-bold shadow-lg"
          >
            Practice Again
          </Button>
        </div>

        <Card className="bg-white border-2 border-dashed border-gray-300">
          <div className="p-6 text-center">
            <div className="text-4xl mb-3">🔥</div>
            <h3 className="font-bold text-gray-800 mb-1">3 Day Streak!</h3>
            <p className="text-sm text-gray-600">
              Keep it up! Practice tomorrow to extend your streak.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
