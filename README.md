# Slogan Contest 2025 — Static Site (with Razorpay)

This static site includes a **Pay Entry Fee** section using **Razorpay Payment Link** (no backend required).
You can also switch to **Checkout.js** if you have a server to create orders.

## Configure
Edit `script.js`:
- `RAZORPAY_PAYMENT_LINK` → paste your Razorpay Payment Link (Dashboard → Payment Links → Create)
- `GOOGLE_FORM_URL` → your Google Form
- `WHATSAPP_NUMBER`, `CONTACT_EMAIL`
- Dates if needed

### Recommended Razorpay setting
In your Payment Link settings, set **Success Redirect URL** to your Google Form (you can append `?source=razorpay`).

## Deploy to Vercel
- Import this folder into a GitHub repo and **Import to Vercel**, or use the Vercel CLI to deploy.
