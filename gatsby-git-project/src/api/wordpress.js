export const fetchPageContent = async (pageId) => {
  try {
    const response = await fetch(`http://localhost/wordpress-headless-1/wp-json/wp/v2/pages/${pageId}`);
    if (!response.ok) {
      throw new Error(`Error fetching page: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch page content:', error);
    return null;
  }
};
