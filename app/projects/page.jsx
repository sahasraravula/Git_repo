"use client";

import { useState } from "react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Personal Website",
      subtitle: "WiCS Web Dev",
      description:
        "Built a responsive personal portfolio as part of the WiCS Web Development Project. Focused on clean UI, reusable structure, and smooth navigation. Designed the layouts in Figma and implemented the site using React.",
      tools: "HTML, CSS, JavaScript, React",
    },
    {
      title: "Multi Level Python Game",
      subtitle: "Honorable Mention",
      description:
        "Designed and implemented a multi-level interactive game in Python. Used object-oriented programming to manage player state, scoring logic, level progression, and error handling for reliable gameplay.",
      tools: "Python",
    },
  ];

  return (
    <main
      className="aboutPage"
      style={{
        minHeight: "100vh",
        paddingTop: "120px",
        paddingLeft: "120px",
        paddingRight: "120px",
      }}
    >
      <h1
        style={{
          fontSize: "72px",
          color: "#5A5033",
          textAlign: "right",
          marginBottom: "60px",
        }}
      >
        Projects
      </h1>

      <div
        style={{
          display: "flex",
          gap: "80px",
          justifyContent: "center",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => setSelectedProject(project)}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.backgroundColor = "#96927A";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.backgroundColor = "#A7A287";
            }}
            style={{
              width: "340px",
              height: "380px",
              backgroundColor: "#A7A287",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              fontWeight: "bold",
              color: "#2B1D16",
              cursor: "pointer",
              transition: "all 0.25s ease",
            }}
          >
            <span>{project.title}</span>
            <span
              style={{
                fontSize: "16px",
                fontWeight: "normal",
                marginTop: "10px",
              }}
            >
              {project.subtitle}
            </span>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.35)",
            backdropFilter: "blur(3px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "540px",
              backgroundColor: "#F4EFE3",
              border: "2px solid #5A5033",
              padding: "42px",
              color: "#2B1D16",
              borderRadius: "6px",
              boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
              position: "relative",
              lineHeight: "1.6",
            }}
          >
            <button
              onClick={() => setSelectedProject(null)}
              style={{
                position: "absolute",
                top: "14px",
                right: "18px",
                background: "none",
                border: "none",
                fontSize: "26px",
                cursor: "pointer",
                color: "#2B1D16",
              }}
            >
              ×
            </button>

            <h2
              style={{
                marginBottom: "4px",
                fontSize: "26px",
              }}
            >
              {selectedProject.title}
            </h2>

            <p
              style={{
                marginTop: 0,
                marginBottom: "16px",
                fontSize: "15px",
                color: "#5A5033",
                fontWeight: "bold",
              }}
            >
              {selectedProject.subtitle}
            </p>

            <div
              style={{
                width: "45px",
                height: "2px",
                backgroundColor: "#5A5033",
                marginBottom: "22px",
              }}
            />

            <p
              style={{
                marginBottom: "22px",
                fontSize: "16px",
              }}
            >
              {selectedProject.description}
            </p>

            <p
              style={{
                fontSize: "15px",
                marginBottom: 0,
              }}
            >
              <strong>Tools:</strong> {selectedProject.tools}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
