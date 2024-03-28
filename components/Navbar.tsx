import Image from "next/image";
import Link from "next/link";

import { NavLinks } from "@/constant";
import AuthProviders from "@/providers/AuthProviders";
import { getCurrentUser } from "@/lib/session";

const Navbar =  async () => {



  const session = await getCurrentUser() //user logged in session

  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="/logo.svg" width={116} height={43} alt="logo" />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.text}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
            
        {/* Buttons  */}
      <div className="flexCenter gap-4">
        {
          session?.user ? (
            <>
              UserPhoto

              <Link href='/create-project'>
                Share Work
              </Link>
            </>
          ) : (
            <AuthProviders /> //auth providers allows user to log in
          )
        }
      </div>
    </nav>
  );
};

export default Navbar;
