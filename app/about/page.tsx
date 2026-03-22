export default function About() {
  return (
    <main
      className="aboutPage"
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        paddingTop: "120px"
      }}
    >
      <div
        style={{
          width: "1100px",
          display: "flex",
          flexDirection: "column",
          gap: "80px"
        }}
      >
        {/* Title */}
        <h1
          style={{
            fontSize: "72px",
            color: "#5A5033",
            textAlign: "right",
            marginRight: "80px"
          }}
        >
          About
        </h1>

        {/* PHOTOS + CARD ROW */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "140px"
          }}
        >
          {/* Photo Stack */}
          <div className="photoSection">
            <img src="/about1.JPG" className="photo photo1" />
            <img src="/about2.jpg" className="photo photo2" />
            <img src="/about4.jpg" className="photo photo3" />
          </div>

          {/* Card Section */}
          <div
            style={{
              position: "relative",
              width: "600px",
              backgroundColor: "#A8A487",
              padding: "45px",
              borderLeft: "14px solid #6E623D",
              borderBottom: "14px solid #6E623D",
              marginLeft: "80px",
              marginTop: "-40px"
            }}
          >
            <h2
              style={{
                fontSize: "32px",
                marginBottom: "20px"
              }}
            >
              About Info
            </h2>

            <p>
              I'm a Computer Science student at the University of Illinois
              Chicago focused on building projects that strengthen my
              understanding of data structures, systems, and software
              development.
            </p>

            <p style={{ marginTop: "15px" }}>
              I enjoy working on practical applications, experimenting with
              technologies, and continuously improving my problem-solving
              skills.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
