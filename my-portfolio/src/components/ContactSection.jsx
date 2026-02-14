import { motion as Motion } from "framer-motion";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser"; 

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [isError, setIsError] = useState(false);

  // Get EmailJS credentials from environment variables
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitMessage("Please fill in all fields.");
      setIsError(true);
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(""), 5000);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setSubmitMessage("Please enter a valid email address.");
      setIsError(true);
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(""), 5000);
      return;
    }

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString(),
          subject: `Portfolio Message from ${formData.name}`,
        },
        EMAILJS_PUBLIC_KEY,
      );

      if (result.text === "OK") {
        setSubmitMessage(
          "Message sent successfully! I'll get back to you soon.",
        );
        setIsError(false);
        setFormData({ name: "", email: "", message: "" });

        // Clear success message after 5 seconds
        setTimeout(() => setSubmitMessage(""), 5000);
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitMessage(
        "Failed to send message. Please email me directly at chiosdimit@gmail.com",
      );
      setIsError(true);

      // Clear error message after 5 seconds
      setTimeout(() => setSubmitMessage(""), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-12 lg:px-24 bg-transparent backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
        </Motion.div>

        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            {/* Contact Form */}
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="bg-white/10 dark:bg-gray-900/30 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white/20 dark:border-gray-700/50">
                <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-100">
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-300/50 dark:border-gray-700/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-sm disabled:opacity-50"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-300/50 dark:border-gray-700/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-sm disabled:opacity-50"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-300/50 dark:border-gray-700/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none backdrop-blur-sm disabled:opacity-50"
                      placeholder="Hi Dimitris, I'd like to discuss a potential project..."
                    />
                  </div>

                  {/* Status Message */}
                  {submitMessage && (
                    <Motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 rounded-xl text-center backdrop-blur-sm ${
                        isError
                          ? "bg-red-100/80 dark:bg-red-900/40 text-red-800 dark:text-red-300"
                          : "bg-green-100/80 dark:bg-green-900/40 text-green-800 dark:text-green-300"
                      }`}
                    >
                      {isError ? "✗ " : "✓ "}
                      {submitMessage}
                    </Motion.div>
                  )}

                  {/* Submit Button */}
                  <Motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-lg flex items-center justify-center gap-3 ${
                      isSubmitting
                        ? "opacity-70 cursor-not-allowed"
                        : "hover:shadow-xl"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane /> Send Message
                      </>
                    )}
                  </Motion.button>

                  {/* Note */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center pt-4">
                    I typically respond within 24 hours. You can also email me
                    directly at{" "}
                    <a
                      href="mailto:chiosdimit@gmail.com"
                      className="font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      chiosdimit@gmail.com
                    </a>
                  </p>
                </form>
              </div>
            </Motion.div>

            {/* Availability Status */}
            <Motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex items-center justify-center gap-3 p-4 bg-linear-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl"
            >
              <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
              <span className="font-medium">
                Currently available for freelance projects
              </span>
            </Motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
