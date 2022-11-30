export const getThumbnailUrl = (title: string, ext = 'png') => {
  const fileName = title.replace(/[^a-z0-9]/gi, '-').toLowerCase();

  return `/images/thumbnails/${fileName}.${ext}`;
};
