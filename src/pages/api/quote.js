export default async function handler(req, res) {
    try {
      const response = await fetch("https://zenquotes.io/api/random");
      const data = await response.json();
      
      res.setHeader("Access-Control-Allow-Origin", "*"); // Allow CORS
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch quote" });
    }
  }
  