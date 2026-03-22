import Image from "next/image";


export default function Home() {
  return (
    <main
      style={{
        backgroundColor: "989C79",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      
      <div
        style={{display: "flex",alignItems: "center",gap: "70px",}}
      >

        <Image
          src="/selfpic.jpeg"
          alt="profile"
          width={260}
          height={260}
          style={{borderRadius: "50%",objectFit: "cover",aspectRatio: "1 / 1"}}
        />

        <div>
          <h1
            style={{fontSize: "90px",color: "#776A41",marginBottom: "30px",}}
          >
            Sahasra Ravula
          </h1>

          <div
            style={{backgroundColor: "#999578",border: "8px solid #3A3A1E",padding: "35px",width: "450px"}}
          >
            <h2>Computer Science Student @ UIC</h2>

            <p style={{ marginTop: "10px" }}>
              Building · Learning · Improving
            </p>

            <p style={{ marginTop: "15px" }}>
              Building real world projects based on python and strengthening
              my foundation in data structures and systems
            </p>
          </div>
        </div>
      </div>
    </main>
    
  );
}



