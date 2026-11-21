"use client";

import { useState } from "react";
import { WAITLIST_ENDPOINT } from "@/lib";

type State = { kind: "idle" } | { kind: "sending" } | { kind: "done" } | { kind: "error"; message: string };

export function WaitlistForm({ source, cta, done, appName }: { source: string; cta: string; done: string; appName: string }) {
  const [state, setState] = useState<State>({ kind: "idle" });

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setState({ kind: "sending" });
    try {
      const res = await fetch(WAITLIST_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          brokerage: form.get("brokerage"),
          website: form.get("website"),
          source,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "The sign-up didn't go through. Try again.");
      setState({ kind: "done" });
    } catch (err) {
      setState({ kind: "error", message: err instanceof Error ? err.message : "The sign-up didn't go through. Try again." });
    }
  }

  if (state.kind === "done") {
    return (
      <p className="form-done" role="status">
        {done}
      </p>
    );
  }

  const id = (f: string) => `${source}-${f}`;
  return (
    <form className="waitlist" onSubmit={submit} aria-label={`${appName}: ${cta}`}>
      <div className="field">
        <label htmlFor={id("name")}>Name</label>
        <input id={id("name")} name="name" autoComplete="name" />
      </div>
      <div className="field">
        <label htmlFor={id("email")}>Email</label>
        <input id={id("email")} name="email" type="email" autoComplete="email" required />
      </div>
      <div className="field field-wide">
        <label htmlFor={id("brokerage")}>Brokerage <span className="optional">(optional)</span></label>
        <input id={id("brokerage")} name="brokerage" autoComplete="organization" />
      </div>
      {/* Hidden from people; bots fill it in. */}
      <div className="hp" aria-hidden>
        <label htmlFor={id("website")}>Website</label>
        <input id={id("website")} name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <button type="submit" className="btn btn-primary" disabled={state.kind === "sending"}>
        {state.kind === "sending" ? "Sending…" : cta}
      </button>
      {state.kind === "error" && (
        <p className="form-error" role="alert">
          {state.message}
        </p>
      )}
    </form>
  );
}
