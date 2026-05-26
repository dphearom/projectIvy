import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <header>
            <nav> 
                <Link href='/' className="logo">
                    <Image src="/icons/logo1.png" alt="logo" width={75} height={75}/>
                    <p>Breksa Events</p>
                </Link>
                <ul>
                    <Link href="/">Home</Link>
                    <Link href="/">Events</Link>
                    <Link href="/">Create Event</Link>
                </ul>
            
            </nav>
        </header>
    )
}
export default Navbar
