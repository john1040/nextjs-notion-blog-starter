import Link from 'next/link';
import CustomLink from './CustomLink';
import siteData from 'data/siteData';

const Contacts = () => {
  return (
    <CustomLink href={siteData.mail}>
      <div>
        {/* <img src="/icons/mail.svg" alt="mail icon" className="w-10" /> */}
        <div>找到我們</div>
      </div>
    </CustomLink>
  );
};

export default Contacts;
