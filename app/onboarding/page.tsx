"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { User } from "lucide-react";

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [profile, setProfile] = useState({
    language: "Spanish",
    level: "B1",
    goal: "travel"
  });

  const languages = ["Spanish", "French", "German", "Italian", "Portuguese"];
  const levels = ["A1", "A2", "B1", "B2", "C1"];
  const goals = [
    { value: "travel", label: "Travel & Tourism", emoji: "✈️" },
    { value: "work", label: "Work & Business", emoji: "💼" },
    { value: "interview", label: "Job Interviews", emoji: "🎯" }
  ];

  const handleComplete = () => {
    localStorage.setItem("userProfile", JSON.stringify(profile));
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg p-8 shadow-2xl border-0 bg-white">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mb-4 text-4xl shadow-lg">
            <User className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome to Peer Platform! 🎉
          </h1>
          <p className="text-gray-600">
            Let's set up your learning journey
          </p>
        </div>

        {step === 1 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Which language are you learning?
              </label>
              <div className="grid grid-cols-2 gap-3">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setProfile({ ...profile, language: lang })}
                    className={`p-4 rounded-2xl border-2 transition-all font-medium ${
                      profile.language === lang
                        ? "border-green-500 bg-green-50 text-green-700 shadow-md scale-105"
                        : "border-gray-200 hover:border-green-300 hover:bg-gray-50"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            <Button
              onClick={() => setStep(2)}
              className="w-full h-14 text-lg font-bold bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-2xl shadow-lg"
            >
              Continue
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                What's your current level?
              </label>
              <div className="grid grid-cols-5 gap-2">
                {levels.map((level) => (
                  <button
                    key={level}
                    onClick={() => setProfile({ ...profile, level })}
                    className={`p-4 rounded-2xl border-2 transition-all font-bold text-lg ${
                      profile.level === level
                        ? "border-yellow-500 bg-yellow-50 text-yellow-700 shadow-md scale-110"
                        : "border-gray-200 hover:border-yellow-300 hover:bg-gray-50"
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-2">
                A1 = Beginner • C1 = Advanced
              </p>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={() => setStep(1)}
                variant="outline"
                className="flex-1 h-14 text-lg font-semibold rounded-2xl"
              >
                Back
              </Button>
              <Button
                onClick={() => setStep(3)}
                className="flex-1 h-14 text-lg font-bold bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-2xl shadow-lg"
              >
                Continue
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                What's your learning goal?
              </label>
              <div className="space-y-3">
                {goals.map((goal) => (
                  <button
                    key={goal.value}
                    onClick={() => setProfile({ ...profile, goal: goal.value })}
                    className={`w-full p-5 rounded-2xl border-2 transition-all text-left flex items-center gap-4 ${
                      profile.goal === goal.value
                        ? "border-green-500 bg-green-50 shadow-md scale-105"
                        : "border-gray-200 hover:border-green-300 hover:bg-gray-50"
                    }`}
                  >
                    <span className="text-3xl">{goal.emoji}</span>
                    <span className="font-semibold text-gray-800">
                      {goal.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={() => setStep(2)}
                variant="outline"
                className="flex-1 h-14 text-lg font-semibold rounded-2xl"
              >
                Back
              </Button>
              <Button
                onClick={handleComplete}
                className="flex-1 h-14 text-lg font-bold bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 rounded-2xl shadow-lg"
              >
                Let's Go! 🚀
              </Button>
            </div>
          </div>
        )}

        <div className="flex justify-center gap-2 mt-8">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-2 rounded-full transition-all ${
                s === step
                  ? "w-8 bg-green-500"
                  : s < step
                  ? "w-2 bg-green-300"
                  : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </Card>
    </div>
  );
}
