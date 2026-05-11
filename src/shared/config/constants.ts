export const PERSONAL_INFO = {
  name: "Kyrillos Samer Mousa",
  title: "Front-End & Geo-Spatial Solutions Developer",
  subtitle: "Enterprise ERP & SaaS Systems",
  email: "kyrillossamer770@gmail.com",
  phone: "(+20) 1275389201",
  location: "Cairo, Egypt",
  linkedin: "https://www.linkedin.com/in/kyrillos-samer-82b862263/",
  github: "https://github.com/KyrillosSamer",
  portfolio: "#",
  summary:
    "Front-End & Geo-Spatial Developer with 2+ years of experience building map-driven applications and large-scale spatial data solutions, currently working on ERP SaaS platforms.",
  cvUrl: "/assets/Kyrillos_Samer_CV.pdf",
} as const;

export const SKILLS = {
  frontend: ["React.js", "Next.js", "TypeScript", "JavaScript", "Redux", "TanStack Query", "Zustand", "Tailwind CSS", "Bootstrap"],
  gis: ["ArcGIS API JS", "Leaflet", "OpenLayers", "ArcGIS Online", "ArcGIS StoryMaps", "QGIS", "Big Data Spatial"],
  architecture: ["Clean Architecture", "Design Patterns", "Clean Code", "SaaS", "Microservices", "System Design", "ERP Systems"],
  databases: ["PostgreSQL", "PostGIS", "MS SQL Server", "SQLite"],
  tools: ["Git", "REST APIs", "ClickUp", "Scrum / Agile", "Python", "C++", "C#", "OOP"],
} as const;

export const EXPERIENCE = [
  {
    role: "Front-End & GIS Developer",
    company: "BI-Tech",
    period: "Oct 2025 – Present",
    type: "full-time",
    bullets: [
      "Build scalable enterprise ERP/SaaS front-end using Next.js, React, TypeScript within a microservices architecture.",
      "Implement Clean Architecture, Design Patterns, and Clean Code principles across all modules.",
      "Develop advanced GIS features using ArcGIS API for JavaScript.",
      "Build dynamic ERP dashboards and document generation (PDF/Excel) using Radix UI.",
      "State management with Zustand and TanStack Query for performant, reactive enterprise interfaces.",
    ],
  },
  {
    role: "GIS Front-End Developer",
    company: "Egyptian Military Survey Authority",
    period: "2024 – Oct 2025",
    type: "full-time",
    bullets: [
      "Developed large-scale GIS web applications using React.js and OpenLayers for national-level infrastructure projects.",
      "Built advanced spatial analysis modules including spatial filtering, thematic mapping, buffer zones, and dynamic layer management.",
      "Designed and developed a comprehensive GeoPortal using React.js and Tailwind CSS for centralized access to national geospatial datasets within the Survey Authority.",
      "Implemented interactive GIS functionalities including map visualization, spatial data exploration, layer management, and analytical tools such as area calculation and feature inspection.",
      "Executed complex PostgreSQL/PostGIS queries for large-scale spatial data processing and analysis.",
      "Worked with enterprise GIS platforms such as M.App Enterprise to build dashboards and decision-support systems for ministries and governorates.",
      "Handled Big Data geospatial datasets with optimized rendering and high-performance UI techniques.",
      "Integrated front-end applications with geospatial REST APIs and backend GIS services."
    ],
  },
  {
    role: "Spatial Data Collector",
    company: "Ministry of Transport – Egypt",
    period: "Mar 2024",
    type: "contract",
    bullets: [
      "Collected, validated, and processed spatial data supporting large-scale national transport infrastructure.",
      "Ensured data accuracy and consistency for integration into enterprise GIS platforms.",
    ],
  },
  {
    role: "Freelance GIS & Front-End Developer",
    company: "Self Projects",
    period: "Ongoing",
    type: "freelance",
    bullets: [
      "Built GIS analytical tools: hydrology analysis, network analysis, topology mapping, and contour digitizing.",
      "Delivered web apps with dynamic data visualization, interactive dashboards, and reporting (Excel, PDF).",
    ],
  },
] as const;

export const EDUCATION = {
  degree: "B.Sc. Surveying, GIS & Remote Sensing",
  period: "2019 – 2023",
  institution: "Cairo University – Faculty of Arts",
  grade: "Very Good",
  project: "Geo-Marketing Analytics",
  projectGrade: "Excellent",
} as const;

export const CERTIFICATIONS = [
  { title: "CS50 – Introduction to Computer Science", issuer: "Harvard University" },
  { title: "CS50x – Computer Science", issuer: "HarvardX" },
  { title: "Front-End Development (React, Redux, Zustand. Next.js, Tailwind ,Boot Strap)", issuer: "Route Academy" },
  { title: "Gis Development (Leaflet , Open Layers , Arcgis Api for Js)", issuer: "Self-Study" },
  { title: "Python Programming", issuer: "ITI – Mahara Tech" },
  { title: "PostgreSQL & PostGIS", issuer: "Self-study" },
  { title: "MS SQL Server", issuer: "ITI – Mahara Tech" },
  { title: "C++ / OOP / Algorithms / Data Structures / Design Patterns", issuer: "Self-study" },
  { title: "C# Full Course: OOP, Inheritance, ADO.NET, Advanced Concepts", issuer: "Self-study" },
] as const;