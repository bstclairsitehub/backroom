import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { createPrintfulOrder } from "@/lib/printful";

interface CartItemMetadata {
  id: number;
  name: string;
  size: string;
  quantity: number;
  price: number;
}

interface ShippingAddress {
  address?: {
    line1: string;
    line2?: string;
    city: string;
    state?: string;
    country?: string;
    postal_code?: string;
  };
  name?: string;
}

export async function POST(req: Request) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  if (!sig) {
    return NextResponse.json({ error: "No signature" }, { status: 400 });
  }

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error("Webhook signature verification failed:", err.message);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as any;

    try {
      const cartItems: CartItemMetadata[] = JSON.parse(
        session.metadata?.cart || "[]"
      );
      const shipping: ShippingAddress = session.shipping_details || session.customer_details;

      if (cartItems.length > 0 && shipping?.address) {
        await createPrintfulOrder({
          recipient: {
            name: shipping.name || "Customer",
            address1: shipping.address.line1 || "",
            address2: shipping.address.line2 || undefined,
            city: shipping.address.city || "",
            state_code: shipping.address.state || "",
            country_code: shipping.address.country || "US",
            zip: shipping.address.postal_code || "",
            email: session.customer_email || session.customer_details?.email || "",
          },
          items: cartItems.map((item) => ({
            variant_id: item.id,
            quantity: item.quantity,
            name: `${item.name} - ${item.size}`,
            retail_price: item.price.toString(),
          })),
        });
        console.log("Printful order created for session:", session.id);
      }
    } catch (err) {
      console.error("Failed to create Printful order:", err);
    }
  }

  return NextResponse.json({ received: true });
}
