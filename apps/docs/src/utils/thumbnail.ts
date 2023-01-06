export const getThumbnailUrl = (title: string, extension = 'png') => {
  const fileName = title.replace(/[^\da-z]/gi, '-').toLowerCase();

  return `/images/thumbnails/${fileName}.${extension}`;
};
