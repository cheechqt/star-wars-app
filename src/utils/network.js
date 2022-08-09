
export const getApiResource = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.error("Could not fetch.", response.status);
      return false;
    }

    return await response.json();
  } catch (err) {
    console.error("Could not fetch.", err.message);
    return false;
  }
}
