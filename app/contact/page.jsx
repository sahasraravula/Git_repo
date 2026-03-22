export default function Contact() {
  return (
    <main
      className="aboutPage"
      style={{
        minHeight: "100vh",
        paddingTop: "120px",
        paddingLeft: "120px",
        paddingRight: "120px"
      }}
    >
      
      {/* Title */}
      <h1
        style={{
          fontSize: "72px",
          color: "#5A5033",
          textAlign: "right",
          marginBottom: "80px"
        }}
      >
        Contact
      </h1>

      {/* Contact Links */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          fontSize: "28px",
          color: "#2B1D16",
          maxWidth: "500px",
          marginLeft: "200px"
        }}
      >

        <div>Email: sahasra@example.com</div>

        <div>
          LinkedIn: 
          <a href="#" style={{ marginLeft: "10px", color: "#5A5033" }}>
            linkedin.com/in/sahasraravula
          </a>
        </div>

        <div>
          GitHub:
          <a href="#" style={{ marginLeft: "10px", color: "#5A5033" }}>
            github.com/sahasraravula
          </a>
        </div>

      </div>

    </main>
  );
}
