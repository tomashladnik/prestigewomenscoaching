"use client"

import { motion } from "framer-motion"
import { Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import AboutSection from "./about"
import AppleFormat from "./apple/apple-format"
import LeadForm from "./components/LeadForm"
import Navbar from "./components/nav"
import TestimonialSection from "./testimonial"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  }

  const handleFormSubmit = (formData) => {
    console.log("Form submitted:", formData)
    localStorage.setItem("formData", JSON.stringify(formData))
    setIsFormOpen(false)
    router.push("/video")
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-black text-white min-h-[70vh] sm:min-h-screen flex items-center">
        <div className="absolute inset-0 z-0 bg-pink-400"></div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-16 sm:py-24 md:py-32 lg:py-40 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl mx-auto">
            <div className="flex justify-center items-center relative z-50 mx-auto w-[250px] sm:w-[350px] md:w-[450px] h-[80px] sm:h-[100px] p-1 rounded-lg mb-4 sm:mb-6">
              <Image
                src="/logo3.png"
                alt="Logo"
                width={300}
                height={200}
                className="object-contain p-1"
              />
            </div>

            <motion.div
              variants={fadeIn}
              className="inline-block bg-gradient-to-r from-pink-400 to-amber-400 text-black font-bold px-4 py-1 sm:px-6 sm:py-2 rounded-full mb-6 sm:mb-8 text-sm sm:text-base shadow-lg"
            >
              FIT WOMEN
            </motion.div>

            <motion.h1
              variants={fadeIn}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 sm:mb-8 text-shadow px-2"
            >
              Want to Feel Strong, Confident & In Control of Your Body Again?
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-black max-w-3xl mx-auto px-2"
            >
              Whether you want to lose weight, tone up, or simply feel amazing in your skin again – our 6-month coaching
              program is built for women ready to invest in themselves and achieve lasting transformation.
            </motion.p>

            <motion.div variants={fadeIn} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                onClick={() => setIsFormOpen(true)}
                className="inline-block bg-yellow-600 hover:from-pink-500 hover:to-amber-500 text-white font-bold px-6 py-3 sm:px-10 sm:py-4 text-base sm:text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                YES! SHOW ME HOW
              </button>
            </motion.div>

            <LeadForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} onSubmit={handleFormSubmit} />
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-12 sm:py-20">
        <TestimonialSection />
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-20 bg-white">
        <AboutSection />
      </section>

      {/* Transformation Stories */}
      <section className="py-8 sm:py-10 bg-gradient-to-b from-pink-50 to-white" id="case-studies">
        <h3 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-yellow-500">Case Studies</h3>
        <AppleFormat />
      </section>

      {/* Program Features */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.div
              variants={fadeIn}
              className="inline-block bg-gradient-to-r from-pink-100 to-amber-100 text-pink-800 font-medium px-4 py-1 sm:px-6 sm:py-2 rounded-full mb-4 text-sm sm:text-base shadow-sm"
            >
              THE PRESTIGE DIFFERENCE
            </motion.div>

            <motion.h2
              variants={fadeIn}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-500 to-amber-500 bg-clip-text text-transparent px-2"
            >
              6 REASONS WHY
              <br />
              OUR CLIENTS SUCCEED
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
          >
            {[
              {
                number: "1",
                title: "Personalized Approach",
                description:
                  "We create custom nutrition and workout plans tailored to your unique body, lifestyle, and goals.",
              },
              {
                number: "2",
                title: "Accountability System",
                description:
                  "Our proven check-in system ensures you stay on track and make consistent progress week after week.",
              },
              {
                number: "3",
                title: "Mindset Coaching",
                description:
                  "We address the psychological aspects of transformation to create lasting change from the inside out.",
              },
              {
                number: "4",
                title: "Expert Guidance",
                description:
                  "Our coaches are certified professionals with specialized training in women's fitness and nutrition.",
              },
              {
                number: "5",
                title: "Community Support",
                description:
                  "Join a supportive community of like-minded women who celebrate your wins and lift you up.",
              },
              {
                number: "6",
                title: "Sustainable Results",
                description: "We focus on building healthy habits that last long after your coaching program ends.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-white to-pink-50 p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-pink-400 to-amber-400 text-white font-bold w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full mb-4 shadow-md">
                  {feature.number}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-pink-800">{feature.title}</h3>
                <p className="text-gray-700 text-sm sm:text-base">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-pink-500 via-white to-pink-700 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeIn}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-shadow-lg text-black px-2"
            >
              READY TO TRANSFORM
              <br />
              YOUR BODY AND LIFE?
            </motion.h2>

            <motion.p
              variants={fadeIn}
              className="text-lg sm:text-xl max-w-3xl mx-auto mb-8 text-black px-2"
            >
              Join our 6-month coaching program and get the personalized support, expert guidance, and proven system you
              need to achieve the results you deserve.
            </motion.p>

            <motion.div variants={fadeIn} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                onClick={() => setIsFormOpen(true)}
                className="inline-block bg-yellow-600 hover:from-pink-500 hover:to-amber-500 text-white font-bold px-6 py-3 sm:px-10 sm:py-4 text-base sm:text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                YES! SHOW ME HOW
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <div className="text-lg sm:text-xl font-bold mb-4">
                <span className="text-pink-400">PRESTIGE</span> <span className="text-amber-400">WOMEN'S</span> COACHING
              </div>
              <p className="text-gray-400 text-sm sm:text-base">
                Transforming women's bodies and lives through expert coaching and personalized support.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-medium mb-4 text-pink-300">QUICK LINKS</h3>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                {["About Us", "Case Studies", "Join Mission", "Blog"].map((item, index) => (
                  <li key={index}>
                    <Link href="#" className="hover:text-pink-300 transition-colors flex items-center group">
                      <span className="w-0 h-0.5 bg-amber-400 group-hover:w-2 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-medium mb-4 text-pink-300">RESOURCES</h3>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                {["Nutrition Guide", "Workout Plans", "Success Stories"].map((item, index) => (
                  <li key={index}>
                    <Link href="#" className="hover:text-pink-300 transition-colors flex items-center group">
                      <span className="w-0 h-0.5 bg-amber-400 group-hover:w-2 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-medium mb-4 text-pink-300">SOCIAL</h3>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                {["Facebook", "Instagram", "YouTube"].map((item, index) => (
                  <li key={index}>
                    <Link href="#" className="hover:text-pink-300 transition-colors flex items-center group">
                      <span className="w-0 h-0.5 bg-amber-400 group-hover:w-2 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center text-sm sm:text-base">
            <div className="text-gray-400 mb-4 md:mb-0">Terms and Conditions &nbsp; All rights reserved.</div>
            <div className="flex items-center text-gray-400 hover:text-pink-300 transition-colors">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <span>(844) 496-5673</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}