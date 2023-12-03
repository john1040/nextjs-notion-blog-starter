import Container from 'components/Container';
import Contacts from 'components/Contacts';
import siteData from 'data/siteData';

export default function Footer() {
  return (
    <footer className="border-t bg-white py-4 md:py-8">
      <Container>
        <div className="flex items-end justify-between">
          <div className="mt-4 flex items-center justify-center gap-2">
            <img src="/icon.svg" alt="" className="w-4 md:w-6" />
            <p className="text-center text-[12px] text-gray-400 md:text-base">
              {siteData.footerText}
            </p>
          </div>
          <Contacts />
        </div>
      </Container>
    </footer>
  );
}
