import mongoose from "mongoose"

const requirementSchema=new mongoose.Schema({
   userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    fullname:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:String,required:true},
    meeting:{type:String,required:true},
    packing:{type:String,required:true},
    packing2:{type:String,required:true},
    additional:{type:String}
})

const requirementModel=mongoose.models.requirement||mongoose.model("requirement",requirementSchema);
export default requirementModel;