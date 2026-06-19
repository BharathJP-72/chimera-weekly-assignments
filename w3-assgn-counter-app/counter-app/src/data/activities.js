import { Dumbbell, Brain, BookOpen, Timer } from 'lucide-react';

const activities = [
  {
    id: 1,
    title: "Exercise",
    description: "Workout everyday, be healthy",
    icon: Dumbbell,
    target: 10,
    current: 0
  },
  {
    id: 2,
    title: "Meditation",
    description: "Inner peace",
    icon: Brain,
    target: 10,
    current: 0
  },
  {
    id: 3,
    title: "Reading",
    description: "Learn something new",
    icon: BookOpen,
    target: 10,
    current: 0
  },
  {
    id: 4,
    title: "Pomodoro",
    description: "Time yourself",
    icon: Timer,
    target: 10,
    current: 0
  }
];

export default activities