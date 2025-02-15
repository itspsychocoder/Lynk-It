
const getQuote = async (req, res) => {
  try {
    const response = await fetch("https://zenquotes.io/api/random");
    const data = await response.json();
    
    res.setHeader("Access-Control-Allow-Origin", "*"); // Allow CORS
    res.status(200).json(data);
    }
    catch (error) {
        console.log(error)
        return res.status(400).json({ type: "error", message: 'Error getting details' });
      }
};

export default getQuote;