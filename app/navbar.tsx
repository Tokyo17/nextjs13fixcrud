import Link from "next/link";

export default function Navbar(){
    return(
        <div className="nav">
            <h1 className="title-main">
                <Link href="/">Sticky Wall</Link>
            </h1>
            <div className="add-note-nav">
                <Link href="/add">+</Link> 
            </div>
        </div>
    )
}