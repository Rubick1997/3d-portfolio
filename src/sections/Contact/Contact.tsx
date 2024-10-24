import { Terminal } from "@/assets/images";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";

function Contact() {
  const isDeskTop = useMediaQuery({ query: "(min-width: 1024px)" });
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

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
      setLoading(false);
      alert("Message sent successfully");
      setForm({ name: "", email: "", message: "" });
    } catch (e) {
      setLoading(false);
      console.log(e);
      alert("Something went wrong");
    }
  };

  return (
    <section id="contact" className="c-space my-20">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        {isDeskTop && (
          <img
            src={Terminal}
            alt="terminal background"
            className="absolute inset-0 min-h-screen"
          />
        )}
        <div className="contact-container">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you want to build something new and exciting, or improve
            your existing product, I'd love to hear from you.
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Peter Parker"
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
                className="field-input"
                placeholder="peterparker@gmail.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Hello. I'd like to give you a job ..."
              />
            </label>
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
