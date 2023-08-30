import Company from "../../models/companyModel";

const updateTaskIdEvent=async (companyId,taskId)=>{
    try{
        const company=await Company.findById(companyId)
        const {tasks}=company
        tasks.forEach(element => {
            if(element.taskId==taskId)
            return element;
        });
    }catch(error){
        res.status(500).json({ message: error.message });
    }
}
export default updateTaskIdEvent;