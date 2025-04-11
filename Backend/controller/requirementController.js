import requirementModel from "../models/requirementModel.js";

//add user requirement
const userRequirement=async(req,res)=>{
    const {fullname,email,phone,meeting,packing,packing2,additional,meetingDate,meetingTime,onlinePlatform,meetingLink}=req.body;
    const userId= req.userId;

    if (meeting === "Offline") {
      // Validate  meetingDate and meetingTime 
      if (!meetingDate || !meetingTime) {
        return res.json({
          success: false,
          message: "Please provide both meeting date and time for offline meetings."
        });
      }
    } else if (meeting === "Online") {
      if (!onlinePlatform || !meetingLink) {
        return res.json({
          success: false,
          message: "Please provide both online platform and meeting link for online meetings."
        });
      }
    }

    try{
    const RequirementOrder=new requirementModel({
        userId,
        fullname,
        email,
        phone,
        meeting,
       meetingDate,meetingTime,meetingLink,onlinePlatform,
        packing,
        packing2,
        additional,
    });
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
      const requirements = await requirementModel.find({}).sort({ createdAt: -1 }); // Sort by latest submission first
      return res.json({ success: true,data: requirements});
    } catch (err) {
      console.error(err);
    return res.json({success: false,message: 'An error occurred while fetching the requirements'});
    }
  };

export{userRequirement,getAllRequirements}

