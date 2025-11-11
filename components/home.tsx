'use client';

import { PenTool } from 'lucide-react';
import { User } from 'next-auth';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

type Props = {
  user: User | null;
};
export default function HomeComponent({ user }: Props) {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-12">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <PenTool />
            <span className="text-lg font-semibold tracking-tight">
              DrawCode AI
            </span>
          </div>

          {/* Login */}
          {!user && (
            <div>
              <Link
                href="/api/auth/signin"
                className="text-sm font-semibold text-white hover:text-indigo-400 transition"
              >
                Log in <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          )}
          {user && (
            <div>
              <Link
                href={`/${user.role?.toLowerCase()}/dashboard`}
                className="text-sm font-semibold text-white hover:text-indigo-400 transition"
              >
                Dashboard <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative isolate px-6 pt-28 lg:px-8">
        {/* Background gradient */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            className="relative left-1/2 aspect-[1155/678] w-[72.25rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-500 to-pink-400 opacity-30 sm:w-[115rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%,100% 61.6%,97.5% 26.9%,85.5% 0.1%,80.7% 2%,72.5% 32.5%,60.2% 62.4%,52.4% 68.1%,47.5% 58.3%,45.2% 34.5%,27.5% 76.7%,0.1% 64.9%,17.9% 100%,27.6% 76.8%,76.1% 97.7%,74.1% 44.1%)',
            }}
          />
        </div>

        {/* Content */}
        <div className="mx-auto max-w-3xl text-center py-32 sm:py-48 lg:py-56">
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
            Draw. Describe. Generate Code.
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Turn your ideas into working interfaces instantly. Sketch your
            layout, annotate your vision, and let DrawCode AI transform it into
            production-ready code — powered by next-gen AI.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/user/dashboard"
              className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Try it now
            </Link>
            <a
              href="#"
              className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              Watch demo →
            </a>
          </div>
        </div>

        {/* Bottom gradient */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            className="relative left-1/2 aspect-[1155/678] w-[72.25rem] -translate-x-1/2 bg-gradient-to-tr from-indigo-500 to-pink-400 opacity-30 sm:w-[115rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%,100% 61.6%,97.5% 26.9%,85.5% 0.1%,80.7% 2%,72.5% 32.5%,60.2% 62.4%,52.4% 68.1%,47.5% 58.3%,45.2% 34.5%,27.5% 76.7%,0.1% 64.9%,17.9% 100%,27.6% 76.8%,76.1% 97.7%,74.1% 44.1%)',
            }}
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Built for creators, designers, and developers
          </h2>
          <p className="mt-4 text-gray-400">
            DrawCode AI combines the freedom of sketching with the power of
            automation — transforming imagination into real UI code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-gray-800/50 rounded-2xl p-8 hover:bg-gray-800 transition">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10">
              🖊️
            </div>
            <h3 className="text-lg font-semibold mb-2">Intuitive Drawing</h3>
            <p className="text-sm text-gray-400">
              Sketch layouts freely using a simple canvas. Draw boxes, buttons,
              inputs, and structure your interface visually.
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-2xl p-8 hover:bg-gray-800 transition">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10">
              🤖
            </div>
            <h3 className="text-lg font-semibold mb-2">AI Conversion</h3>
            <p className="text-sm text-gray-400">
              Our AI understands your sketch and converts it into clean,
              production-ready React + Tailwind code instantly.
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-2xl p-8 hover:bg-gray-800 transition">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10">
              ⚡
            </div>
            <h3 className="text-lg font-semibold mb-2">Instant Preview</h3>
            <p className="text-sm text-gray-400">
              Preview the generated code in real-time and tweak instantly for a
              seamless design-to-development workflow.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-gray-900/40 py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">How it works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            <div>
              <div className="text-4xl mb-3">1️⃣</div>
              <h3 className="font-semibold mb-2">Draw your idea</h3>
              <p className="text-sm text-gray-400">
                Use the canvas to sketch your UI layout freely — just like on a
                whiteboard.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">2️⃣</div>
              <h3 className="font-semibold mb-2">Describe or label</h3>
              <p className="text-sm text-gray-400">
                Add labels or text hints to help the AI understand your design
                intent.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">3️⃣</div>
              <h3 className="font-semibold mb-2">Generate code</h3>
              <p className="text-sm text-gray-400">
                Hit “Generate” — our AI converts your sketch into real, editable
                code instantly.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="text-center py-10 text-sm text-gray-400 border-t border-white/10">
        © {new Date().getFullYear()} DrawCode AI — All rights reserved.
      </footer>
    </div>
  );
}
