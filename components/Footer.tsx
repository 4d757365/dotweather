import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" border-t">
      <div className="mx-auto py-10">
        <Link href="https://github.com/4d757365">
          <p className="text-center text-xs">
            &copy; 2023 4d757365. All rights reserved.
          </p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
