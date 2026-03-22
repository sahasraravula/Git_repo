import Link from "next/link";
export default function Header(){
    return (
        <nav style={{display: "flex", justifyContent: "flex-end",gap: "40px",padding: "10px 40px"}}>
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/contact">Contact</Link>
    </nav>
    );
}


