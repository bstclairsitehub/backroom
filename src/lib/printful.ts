const PRINTFUL_API = "https://api.printful.com";

export async function createPrintfulOrder(orderData: {
  recipient: {
    name: string;
    address1: string;
    address2?: string;
    city: string;
    state_code: string;
    country_code: string;
    zip: string;
    email: string;
    phone?: string;
  };
  items: {
    variant_id: number;
    quantity: number;
    name: string;
    retail_price: string;
  }[];
}) {
  const res = await fetch(`${PRINTFUL_API}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.PRINTFUL_API_KEY}`,
    },
    body: JSON.stringify({
      recipient: orderData.recipient,
      items: orderData.items,
      retail_costs: {
        currency: "USD",
      },
    }),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.result || "Failed to create Printful order");
  }

  return res.json();
}

export async function getShippingRates(data: {
  recipient: { address1: string; city: string; country_code: string; state_code: string; zip: string };
  items: { variant_id: number; quantity: number }[];
}) {
  const res = await fetch(`${PRINTFUL_API}/shipping/rates`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.PRINTFUL_API_KEY}`,
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to get shipping rates");
  return res.json();
}
