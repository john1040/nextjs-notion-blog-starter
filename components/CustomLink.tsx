import Link from 'next/link';

const CustomLink = ({
  href,
  children
}: {
  href: string;
  children: JSX.Element | string;
}) => {
  return (
    <Link href={href} target="_blank" rel="noreferrer noopener" className="relative">
      <div className="absolute  -bottom-1 -right-1 z-0 h-full w-full rounded-md bg-black" />
      <div className="relative z-10 flex items-center gap-2 rounded-md border-2 border-black bg-white  px-2 py-2 font-bold duration-200 hover:translate-x-1 hover:translate-y-1 md:px-4">
        {children}
        <img
          src="/icons/screen-pointer.svg"
          alt="pointer icon"
          className="w-3 origin-center scale-x-[-1] scale-y-[1]"
        />
      </div>
    </Link>
  );
};

export default CustomLink;
