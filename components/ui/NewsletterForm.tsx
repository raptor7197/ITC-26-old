"use client";

import { useState } from "react";
import { NewsletterDB } from "@/lib/firestore";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      await NewsletterDB.subscribe(email);
      setStatus("success");
      setMessage("Thank you for subscribing!");
      setEmail("");

      // Reset form status after a few seconds
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 5000);
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      setStatus("error");
      setMessage("Failed to subscribe. Please try again later.");
    }
  };

  return (
    <div className="flex w-full min-w-0 flex-1 flex-col sm:items-end">
      <form
        onSubmit={handleSubscribe}
        className="flex w-full min-w-0 flex-1 flex-col gap-3 sm:flex-row sm:items-stretch sm:justify-end"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") {
              setStatus("idle");
              setMessage("");
            }
          }}
          placeholder="Email Address"
          disabled={status === "loading" || status === "success"}
          required
          className="min-h-[44px] w-full min-w-0 flex-1 bg-[#011f4b] px-4 text-white
                    placeholder:text-white/50 outline-none ring-0 border-0
                    text-[clamp(13px,2.5vw,1.125rem)] sm:min-h-[40px] disabled:opacity-70 transition-opacity"
        />
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="min-h-[44px] w-full shrink-0 bg-white px-6 font-poppins font-medium text-black shadow-sm
                    flex items-center justify-center whitespace-nowrap
                    text-[clamp(0.875rem,2.2vw,1.125rem)]
                    sm:w-auto sm:min-w-[7.5rem] md:min-w-[8.5rem] sm:min-h-[40px]
                    hover:bg-white/95 active:scale-[0.99] transition-transform disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </button>
      </form>

      {/* Feedback Message */}
      <div className="h-5 mt-1">
        {message && (
          <p
            className={`text-sm font-medium ${
              status === "success" ? "text-green-600" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
