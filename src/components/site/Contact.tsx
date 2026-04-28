import * as React from "react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const token = recaptchaRef.current?.getValue();
    if (!token) {
      alert("Please complete the reCAPTCHA verification.");
      setIsSubmitting(false);
      return;
    }
    
    const formData = new FormData(e.target as HTMLFormElement);
    formData.append("g-recaptcha-response", token);

    try {
      const response = await fetch("https://formspree.io/f/mnjlkobk", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Oops! There was a problem submitting your form");
      }
    } catch (error) {
      alert("Oops! There was a problem submitting your form");
    } finally {
      setIsSubmitting(false);
      recaptchaRef.current?.reset();
    }
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden min-h-[calc(100vh-4rem)]">
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-primary uppercase mb-4 block"
          >
            Contact Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-foreground"
          >
            Contact <span className="text-primary">Soundelix Support</span>
          </motion.h2>
          <p className="mt-4 text-muted-foreground font-medium max-w-2xl mx-auto">
            Need help or want to share feedback on your voice tools? Our team responds within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">Email Us</h3>
                <p className="text-muted-foreground font-medium">help@soundelix.com</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">Call Us</h3>
                <p className="text-muted-foreground font-medium">+1 (415) 555-6392</p>
                <p className="text-muted-foreground font-medium">Mon-Fri, 9am - 5pm EST</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">Our Studio</h3>
                <p className="text-muted-foreground font-medium">535 Mission St</p>
                <p className="text-muted-foreground font-medium">San Francisco, CA 94105, USA</p>
              </div>
            </div>

            <div className="mt-8 h-64 w-full rounded-3xl overflow-hidden border border-white/10 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
              <iframe
                title="Soniccora Studio Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.111815155986!2d-122.4010534!3d37.7874051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085806306f9d3b5%3A0x6d953930b6e51111!2s535%20Mission%20St%2C%20San%20Francisco%2C%20CA%2094105!5e0!3m2!1sen!2sus!4v1714310000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 p-8 md:p-10 rounded-3xl shadow-2xl border border-white/10 backdrop-blur-sm"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                <p className="text-muted-foreground font-medium mb-8">
                  Thank you for reaching out. We'll be in touch soon.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-primary font-bold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="text-sm font-bold text-foreground ml-1">Full Name</label>
                      <input
                        id="contact-name"
                        name="name"
                        required
                        type="text"
                        className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl focus:border-primary text-foreground outline-none transition-colors placeholder:text-muted-foreground/50"
                        placeholder="John Doe"
                      />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="text-sm font-bold text-foreground ml-1">Email Address</label>
                      <input
                        id="contact-email"
                        name="email"
                        required
                        type="email"
                        className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl focus:border-primary text-foreground outline-none transition-colors placeholder:text-muted-foreground/50"
                        placeholder="john@example.com"
                      />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-subject" className="text-sm font-bold text-foreground ml-1">Subject</label>
                  <select id="contact-subject" name="subject" className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl focus:border-primary text-foreground outline-none transition-colors appearance-none">
                    <option className="bg-background text-foreground">General Inquiry</option>
                    <option className="bg-background text-foreground">Technical Support</option>
                    <option className="bg-background text-foreground">Pro Account Help</option>
                    <option className="bg-background text-foreground">Feedback</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-message" className="text-sm font-bold text-foreground ml-1">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl focus:border-primary text-foreground outline-none transition-colors resize-none placeholder:text-muted-foreground/50"
                    placeholder="How can we help you?"
                  />
                </div>

                <div className="flex justify-center py-2">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6LeHns4sAAAAANvUoRlhfvJFcZRdtE2qLm-hrRzG"
                    theme="dark"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary/80 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <Send className="w-5 h-5" />}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
