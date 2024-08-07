export const importImage = (src: string) => {
  try {
    return require(`${src}`).default;
  } catch (err) {
    console.error(`Error importing image at ${src}`, err);
    return null;
  }
};
