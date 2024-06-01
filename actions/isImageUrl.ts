// Function to check if an image URL is valid
export const isImageUrl = async (url: string) => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};
