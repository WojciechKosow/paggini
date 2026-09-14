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
    "mt-2 w-full border border-ink/25 bg-card px-4 py-3 text-sm text-ink placeholder:text-muted transition-colors focus:border-flame";
  const labelClass = "mono text-[10px] uppercase tracking-wider text-muted";

  return (
    <form onSubmit={onSubmit} className="panel p-6 sm:p-8">
      <div className="display text-xl">{f.title}</div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className={labelClass}>{f.name}</span>
          <input name="name" type="text" required autoComplete="name" placeholder={f.namePlaceholder} className={fieldClass} />
        </label>
        <label className="block">
          <span className={labelClass}>{f.email}</span>
          <input name="email" type="email" required autoComplete="email" placeholder={f.emailPlaceholder} className={fieldClass} />
        </label>
      </div>

      <div className="mt-5">
        <span className={labelClass}>{f.projectType}</span>
        <div className="mono mt-2 flex flex-wrap gap-0 border border-ink text-xs">
          {f.types.map((t, i) => (
            <button
              key={t}
              type="button"
              onClick={() => setType(t)}
              data-cursor
              className={`px-3 py-2.5 uppercase tracking-wider transition-colors ${
                i > 0 ? "border-l border-ink" : ""
              } ${type === t ? "bg-ink text-paper" : "text-ink hover:bg-card"}`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <label className="mt-5 block">
        <span className={labelClass}>{f.message}</span>
        <textarea name="message" rows={5} required placeholder={f.messagePlaceholder} className={`${fieldClass} resize-none`} />
      </label>

      <button type="submit" className="btn btn-ink mt-6 w-full">
        {f.submit}
      </button>
      <p className="mt-3 text-center text-xs text-muted">{f.note}</p>
    </form>
  );
}
