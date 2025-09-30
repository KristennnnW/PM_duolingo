export interface User {
  id: string;
  name: string;
  avatar: string;
  language: string;
  level: string;
  goal: string;
}

export interface Peer {
  id: string;
  name: string;
  avatar: string;
  language: string;
  level: string;
}

export interface Scenario {
  id: string;
  title: string;
  description: string;
  prompts: string[];
  aiNudge: string;
}

export interface Event {
  id: string;
  title: string;
  time: string;
  topic: string;
  participants: number;
  maxParticipants: number;
}

export interface ChannelPost {
  id: string;
  author: string;
  avatar: string;
  content: string;
  time: string;
  isPinned?: boolean;
}

export interface FeedbackScore {
  fluency: number;
  pronunciation: number;
  clarity: number;
  tip: string;
}

export const dummyUser: User = {
  id: "user-1",
  name: "Alex Chen",
  avatar: "🧑‍🎓",
  language: "Spanish",
  level: "B1",
  goal: "travel"
};

export const dummyPeers: Peer[] = [
  {
    id: "peer-1",
    name: "Maria Garcia",
    avatar: "👩",
    language: "Spanish",
    level: "B1"
  },
  {
    id: "peer-2",
    name: "Carlos Rodriguez",
    avatar: "🧔",
    language: "Spanish",
    level: "B2"
  }
];

export const scenarios: Scenario[] = [
  {
    id: "scenario-1",
    title: "Ordering Coffee",
    description: "Practice ordering at a café in Spanish",
    prompts: [
      "Greet the barista",
      "Ask what coffee options they have",
      "Order your drink with specific preferences",
      "Ask about the price",
      "Pay and say thank you"
    ],
    aiNudge: "Try using 'quisiera' (I would like) for polite requests"
  },
  {
    id: "scenario-2",
    title: "Job Interview Introduction",
    description: "Introduce yourself professionally",
    prompts: [
      "Introduce yourself",
      "Talk about your education",
      "Describe your work experience",
      "Explain why you're interested in the position",
      "Ask a question about the company"
    ],
    aiNudge: "Remember to use past tense when describing your experience"
  },
  {
    id: "scenario-3",
    title: "Asking for Directions",
    description: "Navigate a city in Spanish",
    prompts: [
      "Politely get someone's attention",
      "Ask how to get to a specific location",
      "Confirm the directions",
      "Thank them for their help"
    ],
    aiNudge: "Use '¿Dónde está...?' to ask where something is"
  }
];

export const dummyEvents: Event[] = [
  {
    id: "event-1",
    title: "Spanish Conversation Hour",
    time: "Today, 6:00 PM",
    topic: "Travel Stories",
    participants: 8,
    maxParticipants: 12
  },
  {
    id: "event-2",
    title: "Business Spanish Practice",
    time: "Tomorrow, 2:00 PM",
    topic: "Professional Networking",
    participants: 5,
    maxParticipants: 10
  },
  {
    id: "event-3",
    title: "Beginner's Circle",
    time: "Wed, 7:00 PM",
    topic: "Daily Routines",
    participants: 10,
    maxParticipants: 15
  }
];

export const channelPosts: ChannelPost[] = [
  {
    id: "post-1",
    author: "Admin",
    avatar: "🎯",
    content: "📌 New Scenario Template: Restaurant Reservations - Perfect for A2-B1 learners!",
    time: "2h ago",
    isPinned: true
  },
  {
    id: "post-2",
    author: "Sophie Martin",
    avatar: "👩‍💼",
    content: "Looking for a B2 partner to practice job interview scenarios. Available weekday evenings!",
    time: "4h ago"
  },
  {
    id: "post-3",
    author: "Lucas Kim",
    avatar: "👨‍🎓",
    content: "Just completed my first role-play session! The AI nudges were super helpful 🎉",
    time: "1d ago"
  }
];

export const dummyFeedback: FeedbackScore = {
  fluency: 4,
  pronunciation: 3,
  clarity: 4,
  tip: "Great job! Try to speak a bit slower when introducing yourself to give more emphasis to key words."
};
