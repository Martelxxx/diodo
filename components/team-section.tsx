"use client"

import { motion } from "framer-motion"
import TeamMemberCard from "./team-member-card"
import GradientText from "./gradient-text"
import { useLanguage } from "@/contexts/language-context"

const teamMembers = [
  {
    name: "Adam Brown",
    title: "Vision Architect",
    description: "Adam has over 15 years of experience in digital transformation and technology leadership.",
    image: "/images/team/adam.png",
  },
  {
    name: "Mbagnick Sarr",
    title: "Experience Architect",
    description:
      "Mbagnick leads our technical team with expertise in AI, cloud architecture, and software development.",
    image: "/images/team/mbagnick.png",
  },
  {
    name: "Kyle Brown",
    title: "Creative Intelligence Architect",
    description: "Kyle brings creative vision to all our projects with his background in UX/UI design and branding.",
    image: "/images/team/kyle.png",
  },
  {
    name: "Aziz Kane",
    title: "Engagement Architect",
    description: "Aziz develops innovative marketing strategies that drive growth and engagement for our clients.",
    image: "/images/team/aziz.png",
  },
]

export default function TeamSection() {
  const { t } = useLanguage()

  return (
    <section className="relative py-16 z-20" id="team">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            <GradientText from="from-africa-orange" to="to-africa-green">
              {t("team.title", "Meet Our Team")}
            </GradientText>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light">
            {t(
              "team.description",
              "Our team of experts combines creativity, technical expertise, and strategic thinking to deliver exceptional digital solutions.",
            )}
          </p>
        </motion.div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-africa-orange/5"
              style={{
                width: `${Math.random() * 300 + 50}px`,
                height: `${Math.random() * 300 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={member.name}
              name={member.name}
              title={t(`team.${member.name.split(" ")[0].toLowerCase()}.title`, member.title)}
              description={t(`team.${member.name.split(" ")[0].toLowerCase()}.description`, member.description)}
              image={member.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
