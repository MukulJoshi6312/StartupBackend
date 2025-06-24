import Contact from "../models/contact.js";

export const ContactDetails = async(req,res)=>{
    try{

        const {name,email,service,about:projectDetail,country} = req.body;

        console.log(name,  email , service ,  projectDetail ,  country)

        if(!name || !email || !service || !projectDetail || !country){
            res.status(403,).json({
                success:false,
                message:"Missing required fileds"
            })
        }
        await Contact.create({name,email,service,projectDetail,country});
        res.status(200).json({
            success:true,
            message:"Your query successfully submited."
        })

    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

export const getDetails = async (req, res) => {
  try {
    const data = await Contact.find().sort({createdAt:-1});
    if (!data) {
      return res.status(404).json({ success: false, message: "No data found" });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};


export const updateQueryStatus = async(req,res)=>{
  try{

    const {id} = req.params;

    const query = await Contact.findById(id);

    if(!query){
      return res.status(404).json({
        success:false,
        message:"Query not found"
      })
    }

    query.queryStatus = !query.queryStatus;

    await query.save();

    return res.status(200).json({
      success:true,
      message:"Status change successfully"
    })

  }catch(error){
  return res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
}