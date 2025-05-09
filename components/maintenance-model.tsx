"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Brush, Droplets, Blocks, Umbrella, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MaintenanceModel() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const [activeItem, setActiveItem] = useState(null)

  const maintenanceItems = [
    {
      icon: <Brush className="w-10 h-10" />,
      title: "Bi-Annual Cleaning",
      description: "Simple brush & flush maintenance keeps the system operating at peak efficiency",
    },
    {
      icon: <Droplets className="w-10 h-10" />,
      title: "Water Flow Check",
      description: "Regular inspection ensures optimal water distribution for cooling",
    },
    {
      icon: <Blocks className="w-10 h-10" />,
      title: "Easy Unit Replacement",
      description: "Damaged clay units can be quickly replaced with our plug-and-play design",
    },
    {
      icon: <Umbrella className="w-10 h-10" />,
      title: "Optional Roof Protection",
      description: "Additional ledge protection available for extreme weather conditions",
    },
    {
      icon: <RotateCcw className="w-10 h-10" />,
      title: "Maintenance Plan",
      description: "Subscribe to our bi-annual maintenance service for worry-free operation",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="maintenance" ref={ref} className="py-20 bg-light-beige">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cool-gray">Maintenance Model</h2>
          <div className="w-20 h-1 bg-forest-green mx-auto mb-6"></div>
          <p className="text-lg text-cool-gray/80 max-w-2xl mx-auto">
            Simple, infrequent maintenance keeps ChillGrid operating at peak efficiency.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {maintenanceItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
              onClick={() => setActiveItem(activeItem === index ? null : index)}
            >
              <div className="bg-forest-green/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-forest-green">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-cool-gray flex items-center">
                {item.title}
                <motion.span
                  animate={{ rotate: activeItem === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-auto text-cool-gray/40"
                >
                  ↓
                </motion.span>
              </h3>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: activeItem === index ? "auto" : 0,
                  opacity: activeItem === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-cool-gray/80 mb-4">{item.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-cool-gray">Maintenance Subscription Plan</h3>
            <p className="text-cool-gray/80 mb-6">
              Subscribe to our bi-annual maintenance service for worry-free operation and extended product life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-forest-green hover:bg-forest-green/90 text-white">Learn More</Button>
              <Button variant="outline" className="border-forest-green text-forest-green hover:bg-forest-green/10">
                Contact Sales
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
