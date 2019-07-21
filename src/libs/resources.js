const {
  fs
} = global.tabris;

const getDrawableDpi = () => {
  const pixelRatio = Math.floor(window.devicePixelRatio);
  if(pixelRatio < 1.5) {
    return "mdpi";
  } else if(pixelRatio > 1.5) {
    return "hdpi";
  } else {
    return "xhdpi";
  }
}

const getImagePath = fileName => {
  return "/resources/images/"+fileName;
}
const getIcon = (name, color) => {
  return `/resources/icons/drawable-${getDrawableDpi()}/${name}@${color}.png`;
}

module.exports = {
  getDrawableDpi,
  getImagePath,
  getIcon
}
