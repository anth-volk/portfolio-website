export interface Article {
  date: string;
  title: string;
  excerpt: string;
}

export const mockArticles: Article[] = [
  {
    date: 'March 2026',
    title: 'Simulating Tax Policy with React and Python',
    excerpt:
      'How we built a responsive front-end for microsimulation models that lets anyone explore the impact of policy reforms in real time.',
  },
  {
    date: 'January 2026',
    title: 'From Think Tank to Tech: Lessons in Career Pivoting',
    excerpt:
      'Reflections on transitioning from international relations research to full-stack development, and why domain knowledge still matters.',
  },
  {
    date: 'November 2025',
    title: 'Using LLMs for Accessible Policy Analysis',
    excerpt:
      'Designing an AI-powered feature that translates complex tax simulations into plain-language summaries for non-technical users.',
  },
];
