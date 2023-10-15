export const checkImageURL = (url) => {
  if (!url) return false;
  else {
    // const pattern = new RegExp(
    //   "^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$",
    //   "i"
    // );
    // if (pattern.test(url)) {
    //   return true;
    // }
    return true;
  }
};
