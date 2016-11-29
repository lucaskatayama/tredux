import md5 from 'md5';

export default (userImage) => {
  const imgSrc = userImage
    ? userImage.trim().toLowerCase()
    : '';
  const hash = md5(imgSrc);
  return `https://www.gravatar.com/avatar/${hash}.jpg?s=100`;
};
