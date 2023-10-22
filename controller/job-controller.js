import Job from "../models/job.js";

async function saveJobData (req,res){
try{
    const newJob= new Job(req.body);
    await newJob.save();
    res.status(200).json({message:"Job saved successfully"});  
}
catch(error){
    console.log(error.message);
    res.status(500).json({error:error.message});
}  
}
export {saveJobData}; 

async function getJobData (req,res){
    try{
        const jobs=await Job.find();
        res.status(200).json(jobs);  
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({error:error.message});
    }  
}
export {getJobData};  