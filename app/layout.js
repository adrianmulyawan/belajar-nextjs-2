"use client"

// import './globals.css'
// import { Inter } from 'next/font/google'

// > Import bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap'; 

// const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
  //   title: 'Create Next App',
  //   description: 'Generated by create next app',
  // }
  
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RootLayout({ children }) {
  const router = useRouter();

  const handleOnClick = (url) => {
    router.push(url);
  }

  return (
    <html lang="en">
      <head>
        <title>NextJS Dasar</title>
      </head>
      <body>
        {/* <nav>
          <center><h2>Navbar</h2></center>
        </nav> */}

        <ul>
          <li style={{ cursor: "pointer" }}>
            <Link style={{ textDecoration: "none", color: "black" }} href="/">Home</Link>
          </li>
          <li style={{ cursor: "pointer" }}>
            <Link style={{ textDecoration: "none", color: "black" }} href="/blog">Blog</Link>
          </li>
          <li style={{ cursor: "pointer" }} onClick={ () => handleOnClick('/news') }>
            News
          </li>
          <li style={{ cursor: "pointer" }} onClick={ () => handleOnClick('/dashboard') }>
            Dashboard
          </li>
          <li style={{ cursor: "pointer" }} onClick={ () => handleOnClick('/calculator') }>
            Calculator
          </li>
          <li style={{ cursor: "pointer" }} onClick={ () => handleOnClick('/find-profile') }>
            Github Profile
          </li>
        </ul>

        {children}
        
        {/* <footer>
          <center><h2>Footer</h2></center>
        </footer> */}
      </body>
    </html>
  )
}
