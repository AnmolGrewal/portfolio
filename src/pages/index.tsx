import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-text">
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">AG</h1>
          <div className="space-x-4">
            {["About", "Resume", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-primary transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <header className="bg-primary text-white shadow-lg pt-16">
        <div className="container mx-auto px-6 py-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Anmol Grewal</h1>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16 space-y-32">
        <motion.section
          id="about"
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/path-to-your-image.jpg"
            alt="Anmol Grewal"
            width={250}
            height={250}
            className="rounded-full mb-8 shadow-xl transform hover:scale-105 transition-transform duration-300"
          />
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold mb-8 text-primary relative">
              About Me
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-secondary"></span>
            </h2>
            <p className="text-lg">
              Hello! I'm Anmol Grewal, a passionate software developer with
              experience in various technologies and a strong background in
              computer science.
            </p>
          </div>
        </motion.section>

        <motion.section
          id="resume"
          className="scroll-mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center text-primary relative">
            Resume
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-secondary"></span>
          </h2>
          <div className="bg-white shadow-xl rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-secondary">
              Education
            </h3>
            <p className="mb-2">
              BSc Computer Science (with Co-op) | Simon Fraser University
            </p>
            <p className="mb-2">Graduation: Applied Sciences 2020</p>
            <p className="mb-6">
              Relevant Coursework: Artificial Intelligence, Advanced Data
              Structures, Database Systems I & II, Requirements Engineering
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-secondary">
              Experience
            </h3>
            <div className="mb-6">
              <h4 className="text-xl font-semibold">
                Intermediate Software Developer | Harris Computer
              </h4>
              <p className="italic mb-2">March 2021 – Current</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Replacing existing legacy systems from scratch, from detailed
                  specifications using Figma and transforming them into fully
                  functional React components styled with Tailwind
                </li>
                <li>
                  Implemented a robust backend using Golang and integrated
                  GraphQL for efficient data management, writing mutations and
                  queries for smooth frontend-backend communication
                </li>
                <li>
                  Authored comprehensive best practices documentation for both
                  new and existing developers, ensuring consistent coding
                  standards and streamlined onboarding processes.
                </li>
                <li>
                  Enhanced application performance by implementing lazy loading,
                  code splitting, and optimizing state management using Redux
                  and Context API, leading to a 30% reduction in load times and
                  a smoother user experience.
                </li>
                <li>
                  Actively participated in design meetings involving
                  stakeholders to discuss and resolve feasibility issues based
                  on project specifications, ensuring practical and achievable
                  solutions
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-semibold">
                Software Developer | Salesforce
              </h4>
              <p className="italic mb-2">Jan 2019 – August 2019 | Intern</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Collaborated with clients and developers in different time
                  zones in an Agile environment using Jira, implementing
                  enterprise-level solutions in new or pre-existing codebases
                </li>
                <li>
                  Lead developer in creating a RESTful API integration between
                  two services using OAuth saving $50,000 year over year in
                  administrator costs
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold mb-4 text-secondary">
              Skills
            </h3>
            <p className="mb-2">
              <strong>Proficient:</strong> Python, React, Java, JS, Typescript,
              HTML, CSS, JUnit, Jira, Agile, CI/CD, AI Tools, Git
            </p>
            <p>
              <strong>Prior Experience:</strong> MySQL, C++, C, Android, Golang,
              Scala, Haskell, LAMP, Docker, Golang
            </p>
          </div>
        </motion.section>

        <motion.section
          id="projects"
          className="scroll-mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center text-primary relative">
            Projects
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-secondary"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-white shadow-xl rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-secondary">
                Amazon Game Studios – Lost Ark Community Website
              </h3>
              <Image
                src="/path-to-project-image-1.jpg"
                alt="Lost Ark Community Website"
                width={400}
                height={300}
                className="mb-4 rounded-lg shadow-md"
              />
              <p className="mb-2">
                Created a community website for Amazon Games published game Lost
                Ark, over 1 million page views and 10,000 users monthly
              </p>
              <p>
                Utilizing React, Next.js and front-end libraries such as MUI,
                Fontawesome Icons to create tools for users to enhance their
                journey from scratch supporting Mobile and Desktop Users
              </p>
            </div>
            <div className="bg-white shadow-xl rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-secondary">
                NEXUS Interview Alert System
              </h3>
              <Image
                src="/path-to-project-image-2.jpg"
                alt="NEXUS Interview Alert System"
                width={400}
                height={300}
                className="mb-4 rounded-lg shadow-md"
              />
              <p className="mb-2">
                Displays currently available or newly released dates for NEXUS
                Interviews
              </p>
              <p>
                Reducing wait times by up to ~90% by allowing users to secure
                cancelled or postponed interviews quickly
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="scroll-mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center text-primary relative">
            Contact Me
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-secondary"></span>
          </h2>
          <div className="bg-white shadow-xl rounded-lg p-8 max-w-2xl mx-auto">
            <p className="mb-4 text-center">
              Email:{" "}
              <a
                href="mailto:anmolsgrewal@gmail.com"
                className="text-secondary hover:underline"
              >
                anmolsgrewal@gmail.com
              </a>
            </p>
            <p className="mb-6 text-center">Phone: (778) 558-8554</p>
            <div className="flex justify-center space-x-6 mt-8">
              <a
                href="https://github.com/AnmolGrewal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-800 hover:text-primary transition-colors duration-300"
              >
                <FontAwesomeIcon icon={faGithub} size="3x" className="mr-2" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/anmolgrewal/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-primary transition-colors duration-300"
              >
                <FontAwesomeIcon icon={faLinkedin} size="3x" className="mr-2" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="bg-primary text-white py-8 mt-32">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Anmol Grewal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
