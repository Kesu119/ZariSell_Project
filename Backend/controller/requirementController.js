import requirementModel from "../models/requirementModel.js";


//add user requirement
const userRequirement=async(req,res)=>{
    const frontend_url="http://localhost:3000";
    const RequirementOrder=new requirementModel({
        // userId:req.body.userId,

        fullname:req.body.fullname,
        email:req.body.email,
        phone:req.body.phone,
        meeting:req.body.meeting,
        packing:req.body.packing,
        packing2:req.body.packing2,
        additional:req.body.additional
    })
    try {
        await RequirementOrder.save();
        res.json({success:true,message:"requirement add"})
    } catch (error) {
        console.log(error);
    res.json({success:false,message:" requirement not add"})
    }
}

//get all requirement controller
 const getAllRequirements = async (req, res) => {
    try {
      const requirements = await requirementModel.find().sort({ createdAt: -1 }); // Sort by latest submission first
      return res.json({ success: true,data: requirements,});
    } catch (err) {
      console.error(err);
    return res.json({success: false,message: 'An error occurred while fetching the requirements'});
    }
  };

export{userRequirement,getAllRequirements}






// import requirementModel from "../models/requirementModel.js";

// const userRequirement = async (req, res) => {
//     try {
//         const frontend_url = "http://localhost:3000";

//         // Create a new requirement order object
//         const RequirementOrder = new requirementModel({
//             // userId: req.body.userId,
//             fullname: req.body.fullname,
//             email: req.body.email,
//             phone: req.body.phone,
//             meeting: req.body.meeting,
//             packing: req.body.packing,
//             packing2: req.body.packing2,
//             additional: req.body.additional
//         });

//         // Save the requirement order to the database
//         await RequirementOrder.save();

//         // Send a success response if data is saved successfully
//         return res.status(200).json({
//             message: "Requirement order has been saved successfully!",
//             data: RequirementOrder
//         });

//     } catch (error) {
//         // Send an error response if there's any issue
//         return res.status(500).json({
//             message: "There was an error saving the requirement order.",
//             error: error.message
//         });
//     }
// };

// export { userRequirement };
