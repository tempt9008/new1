import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 bg-primary/10 p-3 rounded-full w-fit">
            <Brain className="w-8 h-8 text-primary" />
          </div>
          <CardTitle className="text-3xl font-bold">Quiz App</CardTitle>
          <CardDescription>Test your knowledge with interactive quizzes</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Link href="/quiz">
            <Button className="w-full" size="lg">
              Start Quiz
            </Button>
          </Link>
          <Link href="/admin">
            <Button variant="outline" className="w-full" size="lg">
              Admin Dashboard
            </Button>
          </Link>
        </CardContent>
      </Card>
    </main>
  );
}