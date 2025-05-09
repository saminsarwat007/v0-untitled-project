"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SampleDesignsPage() {
  const designs = [
    {
      id: 1,
      title: "Tubular Wall Structure",
      description: "Stacked clay tubes create a modular cooling wall with maximum surface area for evaporation.",
      image: "/images/design-tubes.jpeg",
    },
    {
      id: 2,
      title: "Geometric Pattern Blocks",
      description:
        "Various geometric patterns optimize airflow while maintaining structural integrity and aesthetic appeal.",
      image: "/images/design-patterns.png",
    },
    {
      id: 3,
      title: "Water Distribution System",
      description:
        "Integrated water dripping system ensures even moisture distribution for optimal cooling efficiency.",
      image: "/images/design-dripping.png",
    },
    {
      id: 4,
      title: "Aerodynamic Clay Elements",
      description: "Curved elements direct airflow for enhanced cooling effect and improved circulation.",
      image: "/images/design-airflow.png",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-slate-600 hover:text-amber-600 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>Back to presentation</span>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 text-slate-800">ChillGrid Sample Designs</h1>
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore our innovative terracotta cooling designs that combine functionality, efficiency, and aesthetic
            appeal.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {designs.map((design, index) => (
            <motion.div
              key={design.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-64 bg-slate-100 flex items-center justify-center p-4">
                <Image
                  src={design.image || "/placeholder.svg"}
                  alt={design.title}
                  width={300}
                  height={300}
                  className="max-h-full w-auto object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-slate-800">{design.title}</h3>
                <p className="text-slate-600">{design.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-slate-800">Ready for Your Custom Design?</h2>
            <p className="text-slate-600 mb-6">
              Our team will work with you to create a ChillGrid solution tailored to your specific needs, space
              requirements, and aesthetic preferences.
            </p>
            <form className="space-y-4 mb-6">
              <div>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600"
                />
              </div>
              <div>
                <textarea
                  placeholder="Tell us about your project requirements"
                  rows={4}
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600"
                ></textarea>
              </div>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white w-full py-6">Submit Design Request</Button>
            </form>
            <p className="text-sm text-slate-500">
              We'll get back to you within 48 hours with initial design concepts.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
