import Container from 'components/Container';
import Socials from 'components/Socials';
import siteData from 'data/siteData';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="fixed z-50 w-full border-b bg-white bg-opacity-90 backdrop-blur">
      <Container>
        <div className="flex w-full justify-between py-3 md:py-4">
          <Link href="/" passHref className="flex items-center gap-1">
            <img src={siteData.images.brand} className="h-6" alt="brand name" />
            <img src={siteData.images.icon} className="h-6 w-6" alt="brand icon" />
          </Link>

          <Socials />
        </div>
      </Container>
    </div>
  );
}
