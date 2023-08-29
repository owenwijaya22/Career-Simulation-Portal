import mongoose from "mongoose";
import Company from "./companyModel";
const choiceSchema = new mongoose.Schema({
    message: {
      type: String,
      trim: true,
      required:[true,'A choice must have a message']
    },
    nextId: {
      // tell us the next chat to link with
      type: mongoose.Schema.Types.ObjectId,
      ref:'Convo',
      required:[true,'A choice must be linked to the next chat']
    },
  });
const chatSchema = new mongoose.Schema({
  companyId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:Company,
    // required:[true,'A conversation must belong to a company']
  },
  name:{
    type:String,
    required:[true,'A conversation must belong to a name']
  },
  messages: [{
    type: String,
    required: [true, 'A message must not be blank'],
    trim: true,
 }],
  npcId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'NPC',
    required: [true, 'A conversation must be related to an NPC'],
  },
  choices: [choiceSchema],
  isFinal:{
    type:Boolean,
    default:false
  },
  redirectId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Chat'
  }
});

const Choice = mongoose.model('ConvoChoice', choiceSchema);
const Convo = mongoose.model('officeConversation', chatSchema);

export { Choice };
export default Convo;