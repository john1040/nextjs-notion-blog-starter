import { Article } from 'utils/types';
import slugify from 'slugify';
import getLocalizedDate from 'utils/getLocalizedDate';

type Props = {
  article: Article;
};

export default function ArticleCardLarge({ article }: Props) {
  const slug = slugify(article.title).toLowerCase();

  const formattedTime = getLocalizedDate(article.publishedDate);

  return (
    <a href={`/blog/${slug}`} className="group relative lg:col-span-2">
      <div className="absolute bottom-0 right-0 z-0 h-full w-full rounded-lg bg-black duration-500 group-hover:-bottom-1 group-hover:-right-1" />
      <div className="relative z-10 flex h-full translate-x-0  translate-y-0 cursor-pointer flex-col overflow-hidden rounded-lg border-2 border-black duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
        <div className="relative">
          <div className="absolute">
            {article?.categories?.map(category => (
              <div
                key={category}
                className="relative left-3 top-3 z-[2] mb-2 mr-2 inline-flex items-center rounded bg-gray-100 px-3 py-1.5 text-xs font-bold uppercase text-gray-600 shadow"
              >
                {category}
              </div>
            ))}
          </div>
          <div className="contrast-[0.9] filter">
            <img
              className="aspect-video w-full bg-gray-50 object-cover transition"
              src={article.coverImage}
              alt={'article cover'}
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-between bg-white px-4 py-4">
          <div className="flex-1">
            <p className="text-3xl font-bold  leading-[1.1] text-gray-900">
              {article.title}
            </p>
            <p className="mt-2 line-clamp-2 text-base text-gray-500">{article.summary}</p>
          </div>
          <div className="mt-4 flex items-center">
            <div className="mb-2 flex space-x-1 text-xs text-gray-400">
              {article.categories.map(category => (
                <div key={category}>
                  <span className="font-semibold text-gray-600">{category} </span>
                  <span aria-hidden="true">&middot;</span>
                </div>
              ))}
              <time dateTime={formattedTime}>{formattedTime}</time>
            </div>
            {/* <p className="text-sm font-medium text-gray-900">{article?.author?.name}</p> */}
          </div>
        </div>
      </div>
    </a>
  );
}
