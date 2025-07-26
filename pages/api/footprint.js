

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { origin, destination, travel_mode, car_details, train_details, flight_details } = req.body;

  try {
    const body = {
      origin: origin || null,         // { query: "Rome" } o { locode: "IT-ROM" }
      destination: destination || null,
      travel_mode,
    };

    // Aggiungi dettagli specifici per il mezzo, se ci sono
    if (travel_mode === "car" && car_details) {
      body.car_details = car_details;
    } else if (travel_mode === "train" && train_details) {
      body.train_details = train_details;
    } else if (travel_mode === "plane" && flight_details) {
      body.flight_details = flight_details;
    }

    const response = await fetch("https://preview.api.climatiq.io/travel/v1-preview1/distance", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.CLIMATIQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data.error || "Errore API Climatiq" });
    }

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message || "Errore server" });
  }
}
