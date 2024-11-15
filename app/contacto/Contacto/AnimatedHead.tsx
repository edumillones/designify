"use client"

import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

interface AnimatedHeadProps {
  isWatching: boolean
  isSubmitting: boolean
  isSuccess: boolean
}

const AnimatedHead: React.FC<AnimatedHeadProps> = ({ isWatching, isSubmitting, isSuccess }) => {
  const controls = useAnimation()
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (isSuccess) {
      controls.start({
        x: [0, 100, 200, 300],
        y: [0, -50, 0, -50, 0],
        transition: { duration: 2, ease: "easeInOut" }
      })
    }
  }, [isSuccess, controls])

  const headVariants = {
    watching: { rotate: [0, 5, 0, -5, 0], transition: { repeat: Infinity, duration: 2 } },
    submitting: { rotate: 0, scale: 0.9 },
    success: { rotate: 0, scale: 1 }
  }

  const eyesVariants = {
    open: { scaleY: 1 },
    closed: { scaleY: 0.1 }
  }

  const armVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { delay: 1 } }
  }

  return (
    <motion.div
      className="fixed bottom-4 right-4 w-24 h-24 md:w-32 md:h-32"
      animate={controls}
      style={{ x: position.x, y: position.y }}
    >
      <motion.svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        animate={isSubmitting ? "submitting" : isSuccess ? "success" : "watching"}
        variants={headVariants}
      >
        {/* Head */}
        <circle cx="100" cy="100" r="80" fill="#FFD700" />
        
        {/* Eyes */}
        <motion.ellipse
          cx="70" cy="80" rx="10" ry="15"
          fill="#000"
          animate={isSubmitting ? "closed" : "open"}
          variants={eyesVariants}
        />
        <motion.ellipse
          cx="130" cy="80" rx="10" ry="15"
          fill="#000"
          animate={isSubmitting ? "closed" : "open"}
          variants={eyesVariants}
        />
        
        {/* Mouth */}
        <path d="M 70 130 Q 100 150 130 130" stroke="#000" strokeWidth="5" fill="none" />
        
        {/* Arm for thumbs up */}
        <motion.g
          initial="hidden"
          animate={isSuccess ? "visible" : "hidden"}
          variants={armVariants}
        >
          <rect x="160" y="100" width="20" height="60" rx="10" fill="#FFD700" />
          <rect x="160" y="80" width="40" height="20" rx="10" fill="#FFD700" />
        </motion.g>
      </motion.svg>
    </motion.div>
  )
}

export default AnimatedHead