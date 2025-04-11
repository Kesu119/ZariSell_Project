import orderModel from "../models/orderModel.js";
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Placing user order
const placeOrder = async (req, res) => {
  const { username, email, phone, productname, qty, amount, address, status, date } = req.body;
  const userId = req.userId;

  try {
    const newOrder = new orderModel({
      userId,
      username,
      email,
      phone,
      productname,
      qty,
      amount,
      address,
      status,
      date,

    });

    await newOrder.save();
    res.json({ success: true, message: "Order added successfully.", orderId: newOrder._id });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Failed to add order." });
  }
};

// Get all orders
const getAllOrder = async (req, res) => {
  try {
    const orders = await orderModel.find({}).sort({ createdAt: -1 });
    res.json({ success: true, data: orders });
  } catch (err) {
    console.error(err);
    res.json({ success: false, message: "An error occurred while fetching the user's orders." });
  }
};

// Update order status manually
const updateStatus = async (req, res) => {
  try {
    await orderModel.findByIdAndUpdate(req.body.orderId, { status: req.body.status });
    res.json({ success: true, message: "Status updated successfully." });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error updating order status." });
  }
};

// Stripe Checkout Session
const StripePayment = async (req, res) => {
  try {
    const { productname, orderId } = req.body;

    const line_items = productname.map(product => ({
      price_data: {
        currency: 'inr',
        product_data: {
          name: product.name,
        },
        unit_amount: product.price,
      },
      quantity: product.quantity,
    }));

    line_items.push({
      price_data: {
        currency: 'inr',
        product_data: { name: "Delivery Charges" },
      unit_amount: 200*100, // ₹2
      },
      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: `http://localhost:3000/verify?success=true&orderId=${orderId}`,
      cancel_url: `http://localhost:3000/verify?success=false&orderId=${orderId}`,
    });

    res.json({ success: true, session_url: session.url });
  } catch (error) {
    console.error('Stripe Error:', error);
    res.json({ success: false, message: 'Payment session creation failed' });
  }
};

// Payment verification handler
const verifyPayment = async (req, res) => {
  const { success, orderId } = req.body;

  try {
    if (success === 'true') {
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      res.json({success:true,message:"paid"}); 
    } else {
      await orderModel.findByIdAndUpdate(orderId, { payment: false });
      res.json({success:false,message:"Not paid"}); 
    }
  } catch (error) {
    console.error('Payment Verification Error:', error);
    res.json({ success: false, message: 'Failed to verify payment.' });
  }
};

export {placeOrder,getAllOrder,updateStatus,StripePayment,verifyPayment};
