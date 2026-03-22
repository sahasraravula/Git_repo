

export default function Projects() {
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
          marginBottom: "60px"
        }}
      >
        Projects
      </h1>

      {/* Project Cards */}
       <div style={{display: "flex",gap: "80px",justifyContent: "center",marginTop: "0px"}}>

      {/* Project 1 */}
      <div style={{width: "340px",height: "380px",backgroundColor: "#A7A287",display: "flex",alignItems: "center",justifyContent: "center",fontSize: "28px",color: "#2B1D16"}}>
        Project 1
      </div>

      {/* Project 2 */}
      <div style={{width: "340px",height: "380px",backgroundColor: "#A7A287",display: "flex",alignItems: "center",justifyContent: "center",fontSize: "28px",color: "#2B1D16"}}>
        Project 2
      </div>

    </div>

    </main>
  );
}


