"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { dummyPeers, scenarios } from "@/lib/dummyData";
import { Lightbulb, ArrowLeft, CircleCheck as CheckCircle } from "lucide-react";

export default function MatchPage() {
  const router = useRouter();
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);
  const [completedPrompts, setCompletedPrompts] = useState<number[]>([]);
  const [showNudge, setShowNudge] = useState(false);

  const peer = dummyPeers[0];
  const scenario = scenarios[0];

  const handleCompletePrompt = () => {
    if (!completedPrompts.includes(currentPromptIndex)) {
      setCompletedPrompts([...completedPrompts, currentPromptIndex]);
    }
    if (currentPromptIndex < scenario.prompts.length - 1) {
      setCurrentPromptIndex(currentPromptIndex + 1);
      setShowNudge(false);
    } else {
      router.push("/feedback");
    }
  };

  const handleBack = () => {
    if (currentPromptIndex > 0) {
      setCurrentPromptIndex(currentPromptIndex - 1);
      setShowNudge(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50">
      <div className="max-w-2xl mx-auto p-4 space-y-4">
        <header className="pt-4 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => router.push("/dashboard")}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          <div className="flex gap-1">
            {scenario.prompts.map((_, idx) => (
              <div
                key={idx}
                className={`h-2 w-8 rounded-full transition-all ${
                  completedPrompts.includes(idx)
                    ? "bg-green-500"
                    : idx === currentPromptIndex
                    ? "bg-yellow-400"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </header>

        <Card className="bg-white border-0 shadow-xl p-6">
          <div className="text-center mb-6">
            <div className="text-6xl mb-3">{peer.avatar}</div>
            <h2 className="text-xl font-bold text-gray-800">{peer.name}</h2>
            <p className="text-sm text-gray-600">
              {peer.language} • {peer.level}
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-5 mb-6">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🎭</span>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">
                  {scenario.title}
                </h3>
                <p className="text-sm text-gray-600">{scenario.description}</p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="bg-white border-0 shadow-xl p-6">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-xl font-bold text-white">
              {currentPromptIndex + 1}
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-800 text-lg mb-2">
                Your Turn
              </h3>
              <p className="text-gray-700">
                {scenario.prompts[currentPromptIndex]}
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4 mb-6">
            <p className="text-sm text-blue-800 text-center font-medium">
              💬 Practice speaking this prompt out loud with your partner
            </p>
          </div>

          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentPromptIndex === 0}
              className="flex-1 h-12 rounded-xl font-semibold"
            >
              Previous
            </Button>
            <Button
              onClick={handleCompletePrompt}
              className="flex-1 h-12 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-xl font-bold shadow-lg"
            >
              {currentPromptIndex === scenario.prompts.length - 1 ? (
                <>
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Finish Session
                </>
              ) : (
                "Next Prompt"
              )}
            </Button>
          </div>
        </Card>

        {!showNudge && (
          <Button
            variant="outline"
            onClick={() => setShowNudge(true)}
            className="w-full h-12 border-2 border-yellow-400 text-yellow-700 hover:bg-yellow-50 rounded-xl font-semibold"
          >
            <Lightbulb className="mr-2 h-5 w-5" />
            Need a hint?
          </Button>
        )}

        {showNudge && (
          <Card className="bg-gradient-to-br from-yellow-100 to-orange-100 border-2 border-yellow-400 shadow-xl animate-in slide-in-from-bottom duration-300">
            <div className="p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Lightbulb className="h-6 w-6 text-yellow-900" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 mb-2">AI Nudge</h3>
                  <p className="text-gray-700">{scenario.aiNudge}</p>
                </div>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
