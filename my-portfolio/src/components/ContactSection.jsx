import { motion as Motion } from "framer-motion";
import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

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

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setSubmitMessage("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitMessage(""), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="h-6 w-6" />,
      title: "Email",
      value: "chiosdimit@gmail.com",
      link: "mailto:chiosdimit@gmail.com",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: <FaGithub className="h-6 w-6" />,
      title: "GitHub",
      value: "@ChiosDim",
      link: "https://github.com/ChiosDim",
      color: "from-gray-700 to-gray-900",
    },
    {
      icon: <FaLinkedin className="h-6 w-6" />,
      title: "LinkedIn",
      value: "dimitris-chios",
      link: "https://linkedin.com/in/dimitris-chios",
      color: "from-blue-600 to-blue-800",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-12 lg:px-24 bg-linear-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900"
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

        <div className="flex flex-col lg:flex-row gap-15 justify-between lg:justify-start">
          {/* Left Column: Contact Info */}
          <Motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-1 flex flex-col"
          >
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>

            <div className="flex flex-col mb-16 justify-between flex-1">
              {contactInfo.map((info, index) => (
                <Motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  className={`p-6 rounded-2xl bg-linear-to-br ${
                    info.color
                  }/10 border border-${info.color.split("-")[1]}-500/20`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`h-14 w-14 rounded-xl bg-linear-to-br ${info.color} flex items-center justify-center text-white`}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{info.title}</h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-700 dark:text-gray-300">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                </Motion.div>
              ))}
            </div>
          </Motion.div>

          {/* Right Column: Contact Form */}
          <Motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1"
          >
            <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-800">
              <h3 className="text-2xl font-bold mb-8">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
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
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
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
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
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
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Hi Dimitris, I'd like to discuss a potential project..."
                  />
                </div>

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

                {/* Success Message */}
                {submitMessage && (
                  <Motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-xl text-center"
                  >
                    ✓ {submitMessage}
                  </Motion.div>
                )}

                {/* Note */}
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center pt-4">
                  I typically respond within 24 hours. You can also email me
                  directly at chiosdimit@gmail.com
                </p>
              </form>
            </div>
          </Motion.div>
        </div>

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
    </section>
  );
};

export default ContactSection;
