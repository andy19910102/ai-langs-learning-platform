"use client";

import { useState } from "react";
import WebHeader from "@/components/WebHeader";
import WebFooter from "@/components/WebFooter";

export default function Home() {
  const [userInput, setUserInput] = useState("");
  const [language, setLanguage] = useState("English");
  const [resultList, setResultList] = useState([]);
  const [isWaiting, setIsWaiting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // TODO: 表單送出後的流程
    e.preventDefault();
    console.log(userInput, language);
    setUserInput("");

  };


  return (
    <>
      <WebHeader
        title="AI Languages Learning Platform"
        description="Learn every language with AI"
      />
      <main className="min-h-screen py-8 px-4">
        {/* TODO: 輸入表單 */}
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Enter your language"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            minLength={2}
            required
          />
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            <option value="English">English</option>
            <option value="Japanese">Japanese</option>
            <option value="Korean">Korean</option>
            <option value="French">French</option>
            <option value="German">German</option>
            <option value="Spanish">Spanish</option>
            <option value="Italian">Italian</option>
          </select>
          <button
            type="submit"
            className="px-4 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Generate
          </button>
        </form>
        {/* TODO: 產出結果 */}
        <section className="mt-8">
          {resultList.map((result, idx) => (
            <div key={idx}>
              {JSON.stringify(result)}
            </div>
          ))}
        </section>
      </main>
      <WebFooter />
    </>
  );
}
