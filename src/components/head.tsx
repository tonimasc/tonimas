import NextHead from 'next/head';

type Props = {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogImage?: string;
};

export function Head({
  title,
  description,
  keywords,
  author,
  ogTitle,
  ogDescription,
  ogUrl,
  ogImage,
}: Props) {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={ogImage} />
      <meta name="robots" content="follow, index" />
    </NextHead>
  );
}

Head.defaultProps = {
  author: 'Toni Mas',
  description: 'My site',
  keywords: 'Toni Mas site',
  ogDescription: 'Toni Mas site',
  ogImage: '',
  ogTitle: 'Toni Mas site',
  ogUrl: '',
  title: 'Toni Mas',
};
