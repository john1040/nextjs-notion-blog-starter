import Subscribe from 'components/Subscribe';
import Footer from './Footer';
import Navbar from './Navbar';
import { MetaHead } from './MetaHead';

const FORM_ID = process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ID;
const API_KEY = process.env.NEXT_PUBLIC_CONVERTKIT_API_KEY;

export function Layout(props) {
  const { children, date, imageUrl, title, description, ogUrl } = props;

  const metaHeadProps = {
    date,
    imageUrl,
    description,
    ogUrl,
    title
  };

  return (
    <>
      <MetaHead {...metaHeadProps} />
      <Navbar />
      <div className="md:20 pb-10 pt-10">{children}</div>
      {FORM_ID && API_KEY && <Subscribe />}
      <Footer />
    </>
  );
}
