import orderModel from "../models/orderModel.js";

// Placing user order
const placeOrder = async (req, res) => {
  const { productname, qty, amount, address, status, date, paymode } = req.body;
  const userId = req.userId; // User ID from the auth middleware

  try {
    const newOrder = new orderModel({
      userId,
      productname,
      qty,
      amount,
      address,
      status,
      date,
      paymode,
    });
    await newOrder.save();
    res.json({ success: true, message: "Order added successfully." });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Failed to add order." });
  }
};

// Get all orders for the logged-in user
const getAllOrder = async (req, res) => {
  // const userId = req.userId; // User ID from the auth middleware

  try {
    // Fetch only the orders for the logged-in user
    const orders = await orderModel.find({ }).sort({ createdAt: -1 }); // Sort by latest first
    res.json({ success: true, data: orders });
  } catch (err) {
    console.error(err);
    res.json({ success: false, message: "An error occurred while fetching the user's orders." });
  }
};

// Update order status
const updateStatus = async (req, res) => {
  const { orderId, status } = req.body;

  try {
    // Update the order's status based on the order ID
    await orderModel.findByIdAndUpdate(orderId, { status });
    res.json({ success: true, message: "Status updated successfully." });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error updating order status." });
  }
};

export { placeOrder, getAllOrder, updateStatus };















// import orderModel from "../models/orderModel.js";
// import userModel from "../models/userModel.js";

// //placing user order for frontend
// const placeOrder=async(req,res)=>{
//     const frontend_url="http://localhost:3000";
           
//         const newOrder=new orderModel({
//              userId:req.userId,
//             productname:req.body.productname,
//             qty:req.body.qty,
//             amount:req.body.amount,
//             address:req.body.address,
//             status:req.body.status,
//             date:req.body.date,
//             paymode:req.body.paymode,
//         })
//         try {
//             await newOrder.save();
//             res.json({success:true,message:"order adding"})
//        } catch (error) {
//             console.log(error);
//         res.json({success:false,message:" order not add"})
//         }
//     }
        
//     //get all order from frontend
//     const getAllOrder = async (req, res) => {
//         // const { userId } = req.body;
//         try {
//           const orders = await orderModel.find({}).sort({ createdAt: -1 }); // Sort by latest submission first
//         return res.json({ success: true,data: orders});
//         } catch (err) {
//           console.error(err);
//         return res.json({success: false,message: 'An error occurred while fetching the user orders'});
//         }
//       };

//       //api for updating order status
// const updateStatus=async(req,res)=>{
// try {
//     await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status})
//     res.json({success:true,message:"Status updated"})
// } catch (error) {
//     console.log(error);
//     res.json({success:false,message:"Error"})
// }
// }

// export {placeOrder,getAllOrder,updateStatus}












// //user orders for frontend
// const userOrder=async(req,res)=>{
// try {
//     const orders=await orderModel.find({userId:req.body.userId})
//     res.json({success:true,data:orders})
// } catch (error) {
//     console.log(error);
//     res.json({success:false,message:"Error"})
// }
// }

// //Listing order for admin panel
// const listOrders= async(req,res)=>{
// try {
//         const orders=await orderModel.find({});
//         res.json({success:true,data:orders})
// } catch (error) {
//     console.log({success:false,message:"Error"})
// }
// }

// //api for updating order status
// const updateStatus=async(req,res)=>{
// try {
//     await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status})
//     res.json({success:true,message:"Status updated"})
// } catch (error) {
//     console.log(error);
//     res.json({success:false,message:"Error"})
// }
// }





//2nd code

// //placing user order for frontend
// const placeOrder=async(req,res)=>{
//     const frontend_url="http://localhost:3000";
//     try {
//         const newOrder=new orderModel({
//             userId:req.body.userId,
//             items:req.body.items,
//             amount:req.body.amount,
//             address:req.body.address
//         })
//         await newOrder.save();
//         await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}});

//         const line_items=req.body.items.map((item)=>({
//             price_data:{
//                 currency:"inr",
//                 product_data:{
//                     name:item.name
//                 },
//                 unit_amount:item.price*100*80
//             },
//             quantity:item.quantity
//         }))

//         line_items.push({
//             price_data:{
//                 currency:"inr",
//                 product_data:{
//                     name:"Delivery Charges"
//                 },
//                 unit_amount:2*100*80
//             },
//             quantity:1
//         })

//         const session=await Stripe.Checkout.session.create({
//             line_items:line_items,
//             mode:'payment',
//             success_url:`${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
//             cancel_url:`${frontend_url}/verify?success=false&orderId=${newOrder._id}`
//         }) 
//             res.json({success:true,session_url:session_url})
//     } catch (error) {
//         console.log(error);
//         res.json({success:false,message:"Error"})
//     }
// }

// const verifyOrder=async(req,res)=>{
//     const {orderId,success}=req.body;
//     try {
//         if(success=="true"){
//             await orderModel.findByIdAndUpdate(orderId,{payment:true});
//             res.json({success:true,message:"paid"})
//         }else{
//             await orderModel.findByIdAndDelete(orderId);
//             res.json({success:false,message:"Not Paid"})
//         }
//     } catch (error) {
//         console.log(error);
//         res.json({success:false,message:"Error"})
//     }
// }

// //user orders for frontend
// const userOrder=async(req,res)=>{
// try {
//     const orders=await orderModel.find({userId:req.body.userId})
//     res.json({success:true,data:orders})
// } catch (error) {
//     console.log(error);
//     res.json({success:false,message:"Error"})
// }
// }

// //Listing order for admin panel
// const listOrders= async(req,res)=>{
// try {
//         const orders=await orderModel.find({});
//         res.json({success:true,data:orders})
// } catch (error) {
//     console.log({success:false,message:"Error"})
// }
// }

// //api for updating order status
// const updateStatus=async(req,res)=>{
// try {
//     await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status})
//     res.json({success:true,message:"Status updated"})
// } catch (error) {
//     console.log(error);
//     res.json({success:false,message:"Error"})
// }
// }
// export {placeOrder,verifyOrder,userOrder,listOrders,updateStatus}