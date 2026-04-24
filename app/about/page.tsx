export default function About() {
  return (
    <main
      className="aboutPage"
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        paddingTop: "50px"
      }}
    >
      <div
        style={{
          width: "1180px",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          marginTop: "-10px"
        }}
      >
        <h1
          style={{
            fontSize: "72px",
            color: "#5A5033",
            textAlign: "right",
            marginRight: "120px",
            marginBottom: "10px"
          }}
        >
          About
        </h1>

        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "90px",
            marginLeft: "30px"
          }}
        >
          <div className="photoSection">
            <img src="/about1.JPG" className="photo photo1" />
            <img src="/selfpic4.jpg" className="photo photo2" />
            <img src="/about4.jpg" className="photo photo3" />
          </div>

          <div
            style={{
              position: "relative",
              width: "600px",
              backgroundColor: "#B7B093",
              padding: "30px 34px",
              borderLeft: "14px solid #6E623D",
              borderBottom: "14px solid #6E623D",
              marginTop: "-10px",
              marginLeft: "80px",
              boxSizing: "border-box"
            }}
          >
            <h2
              style={{
                fontSize: "30px",
                marginBottom: "14px",
                color: "#1E1E1E",
                fontWeight: 700,
                lineHeight: 1.2
              }}
            >
              Here's a little about me :-
            </h2>

            <p
              style={{
                fontSize: "15.5px",
                lineHeight: 1.55,
                color: "#1E1E1E",
                margin: 0,
                maxWidth: "520px"
              }}
            >
              I’m a Computer Science student at the University of Illinois Chicago who’s
              really into building projects and learning by doing. I didn’t always plan to
              go into CS. My interest actually started in high school when I took an AI
              class out of curiosity, and that’s what got me hooked. It made me realize
              how interesting and creative this field can be. Since then, I’ve been
              exploring different areas of computer science and trying to get a better feel
              for what I enjoy most, whether that’s data structures, systems, or general
              software development. I like working on practical projects because they help
              me understand how things work, not just learn the theory. Lately, I’ve been
              getting more into web development, experimenting with different tools and
              technologies, and building things from scratch. Fun fact: my personal
              website was actually the very first site I ever built while learning. Outside of
              CS, I like reading, I’m really fascinated by airplanes and jets, and I enjoy
              being outdoors, especially going on short treks and just spending time in
              nature.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}