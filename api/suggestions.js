export default async function handler(req, res) {
  const { q } = req.query;

  if (!q) {
    return res.status(400).json({
      error: "Missing query",
    });
  }

  try {
    const url =
      `https://suggestqueries.google.com/complete/search` +
      `?client=firefox` +
      `&ds=yt` +
      `&q=${encodeURIComponent(q)}`;

    const response = await fetch(url);

    const text = await response.text();

    const start = text.indexOf("[");
    const end = text.lastIndexOf("]");

    if (start === -1 || end === -1) {
      return res.status(500).json({
        error: "Invalid response",
      });
    }

    const data = JSON.parse(text.substring(start, end + 1));

    return res.status(200).json(data);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Failed to fetch suggestions",
    });
  }
}