"use client";

import { useState, type FormEvent } from "react";
import { contact } from "../content/site";
import type { Dictionary } from "../content/dictionary";

export default function ContactForm({ dict }: { dict: Dictionary }) {
  const f = dict.contact.form;
  const [type, setType] = useState(f.types[0]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = `[paggini] ${type} — ${name || email}`;
    const body = [
      `${f.name}: ${name}`,
      `${f.email}: ${email}`,
      `${f.projectType}: ${type}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const fieldClass =
    "mt-2 w-full rounded-xl border border-line bg-white/[0.03] px-4 py-3 text-sm text-chalk placeholder:text-mist-dim transition-colors focus:border-violet-400";
  const labelClass = "text-sm font-medium text-chalk";

  return (
    <form onSubmit={onSubmit} className="card p-6 sm:p-8">
      <div className="font-display text-lg font-semibold">{f.title}</div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className={labelClass}>{f.name}</span>
          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder={f.namePlaceholder}
            className={fieldClass}
          />
        </label>
        <label className="block">
          <span className={labelClass}>{f.email}</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder={f.emailPlaceholder}
            className={fieldClass}
          />
        </label>
      </div>

      <div className="mt-5">
        <span className={labelClass}>{f.projectType}</span>
        <div className="mt-2 flex flex-wrap gap-2">
          {f.types.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setType(t)}
              className={`rounded-full border px-4 py-2 text-sm transition-all ${
                type === t
                  ? "border-transparent bg-chalk text-ink"
                  : "border-line text-mist hover:border-line-strong hover:text-chalk"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <label className="mt-5 block">
        <span className={labelClass}>{f.message}</span>
        <textarea
          name="message"
          rows={5}
          required
          placeholder={f.messagePlaceholder}
          className={`${fieldClass} resize-none`}
        />
      </label>

      <button type="submit" className="btn btn-primary mt-6 w-full">
        {f.submit}
      </button>
      <p className="mt-3 text-center text-xs text-mist">{f.note}</p>
    </form>
  );
}
