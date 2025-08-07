"use client";
import img2 from "../public/images/Screenshot 2025-07-25 140518.png";
import hostelImage from "../public/images/Hostel.png";
import cunsultency from "../public/images/cunsultency.png";
import lms from "../public/images/lms.png"
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/project-card";

const portfolioItems = [
  {
    id: 1,
    title: "Hostel Management System",
    description:
      "Developed the frontend for a hostel management system with role-based login and JWT token security. Integrated hostel allocation, student registration, bulk student upload, and room unallocation features. Implemented room allocation logic based on real-time room availability in multiple hostels. Collaborated with back-end teams to ensure seamless API integration for student and room management. Conducted unit tests, performed regular debugging, and participated in iterative development for continuous improvement.",
    imageUrl: hostelImage,
    demoLink: "#",
    repoLink: "#",
  },
  {
    id: 2,
    title: "Consultancy Project",
    description:
      "Developed a project management system for institutions and organizations. Enabled multiple user roles (Super Admin, HOD, Dean, Director, Accountant, ARND, DRND, PI) with role-based access. HOD creates projects, which are approved/rejected at different levels. Integrated Material-UI Data Grid for project listing with sorting and filtering. Used RESTful APIs for authentication, project processing, and approvals.",
    imageUrl: cunsultency,
    demoLink: "#",
    repoLink: "#",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "An interactive weather dashboard displaying current conditions and 5-day forecasts using a public API, with dynamic backgrounds based on weather.",
    imageUrl: img2,
    demoLink: "https://v0-weather-app-3duqy4utjuc.vercel.app/",
    repoLink: "#",
  },
  {
    id: 4,
    title: "LMS - Educational Platform",
    description:
      "Educational platform supporting Google & JWT Authentication. Built for managing and delivering training content with a responsive UI.",
    imageUrl: lms,
    demoLink: "#",
    repoLink: "#",
  },
  {
    id: 4,
    title: "CreativeHub",
    description:
      "Objective: Create a custom-coded landing page using HTML, CSS, and JavaScript for a creative agency.",
    imageUrl: lms,
    demoLink: "https://creative-hub-one-xi.vercel.app/",
    repoLink: "https://github.com/rajerv-123/CreativeHub",
  },
  {
    id: 5,
    title: "M<ulti-theme-switcher ",
    description:
      "Objective: This is a dynamic, responsive, and accessible <Header /> component built with React, React Router, and Tailwind CSS. It supports both desktop and mobile layouts, scroll awareness, and light/dark theming.",
    imageUrl: lms,
    demoLink: "https://multi-theme-switcher-s2iv.vercel.app/",
    repoLink: "https://github.com/rajerv-123/multi-theme-switcher",
  },

  // {
  //   id: 5,
  //   title: "Task Management App",
  //   description:
  //     "A full-stack task management application with user authentication, real-time updates, and drag-and-drop functionality for intuitive task organization.",
  //   imageUrl: "lms",
  //   demoLink: "#",
  //   repoLink: "#",
  // },
  // {
  //   id: 6,
  //   title: "Personal Blog Platform",
  //   description:
  //     "A responsive blog platform with markdown support, custom CMS integration, and SEO optimization for easy content creation and discovery.",
  //   imageUrl: "/placeholder.svg?height=200&width=300",
  //   demoLink: "#",
  //   repoLink: "#",
  // },
];

export function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="container py-20 md:py-28 px-4 md:px-6 bg-background dark:bg-gray-950"
    >
      <h2 className="text-5xl font-bold text-center mb-16 text-gray-900 dark:text-gray-50">
        My Latest Work
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {portfolioItems.map((item) => (
          <ProjectCard key={item.id} {...item} />
        ))}
      </div>
    </motion.section>
  );
}
