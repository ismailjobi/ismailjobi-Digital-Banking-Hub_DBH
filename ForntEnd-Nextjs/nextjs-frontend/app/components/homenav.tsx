import Link from "next/link";
import "../globals.css";

export default function HomeNav() {
    return (
        <>
            <div className="navbar bg-base-100 sticky top-0 z-50">
                <div className="flex-1">
                    <img className="h-12 w-auto" src="https://img.icons8.com/color/452/chase-bank.png" alt="Bank Logo" />
                    <a href="/" className="btn btn-ghost text-xl">IFSP Bank</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Accounts</a></li>
                        <li><a>Credit Cards</a></li>
                        <li><a>Borrow</a></li>
                        <li><a>Services</a></li>
                        <li><Link href="./signup">Signup</Link></li>
                        <li><Link href="./login">Login</Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

