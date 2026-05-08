import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { Mail, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { email } from "@/constants";

type FormStatus = "idle" | "success" | "error";

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setStatus("idle");
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID!,
        import.meta.env.VITE_TEMPLATE_ID!,
        {
          from_name: form.name,
          to_name: "Rustam",
          from_email: form.email,
          to_email: import.meta.env.VITE_EMAIL!,
          message: form.message,
        },
        import.meta.env.VITE_PUBLIC_KEY!,
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (e) {
      console.error(e);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="c-space my-20 scroll-mt-24">
      <div className="relative flex min-h-[calc(100vh-6rem)] flex-col items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-[radial-gradient(circle_at_50%_0%,rgba(92,124,250,0.12),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0)),rgb(var(--black-100))] py-12">
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-white/15" />
        <div className="contact-container rounded-lg border border-white/10 bg-black-200/90 py-8 backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white-500">
            Contact
          </p>
          <h2 className="head-text mt-3">Let's talk</h2>
          <p className="mt-3 text-lg leading-8 text-white-600">
            Useful conversations usually start with the product problem. Send a
            note about what you are building, what is slow or unclear, and where
            AI or data needs to feel more usable.
          </p>
          <a
            href={`mailto:${email}`}
            className="mt-5 inline-flex items-center gap-2 text-white-700 hover:text-white"
          >
            <Mail className="h-4 w-4" />
            {email}
          </a>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col space-y-6"
          >
            <label className="space-y-3">
              <span className="field-label">Full name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                autoComplete="name"
                className="field-input"
                placeholder="Your name"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                autoComplete="email"
                className="field-input"
                placeholder="you@example.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Tell me what you are building or improving."
              />
            </label>
            {status !== "idle" && (
              <p
                className={`rounded-md border px-4 py-3 text-sm ${
                  status === "success"
                    ? "border-green-500/30 bg-green-500/10 text-green-300"
                    : "border-red-500/30 bg-red-500/10 text-red-300"
                }`}
                role="status"
              >
                {status === "success"
                  ? "Message sent. I will get back to you soon."
                  : "Something went wrong. You can email me directly instead."}
              </p>
            )}
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send message"}
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
