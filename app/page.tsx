import Image from "next/image";

export default function Home() {
  return (
    <main className="homePage">
      <section className="homeHero">
        <div className="homePhotoStack">
          <div className="homePhoto photo1">
            <Image
              src="/selfpic2.png"
              alt="Home photo 1"
              fill
              className="stackImg"
            />
          </div>

          <div className="homePhoto photo2">
            <Image
              src="/selfpic3.jpeg"
              alt="Home photo 2"
              fill
              className="stackImg"
            />
          </div>

          <div className="homePhoto photo3">
            <Image
              src="/selfpic.jpeg"
              alt="Home photo 3"
              fill
              className="stackImg"
            />
          </div>
        </div>

        <div className="homeContent">
          <h1 className="homeName">Sahasra Ravula</h1>

          <div className="introBox">
            <p>Computer Science Student @ UIC</p>
            <p>Building · Learning · Improving</p>
            <p>
              Building real world projects based on python and strengthening my
              foundation in data structures and systems
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}