import { Schema, model } from 'mongoose';

const npcSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'An AI must have a name'],
    },
    position: {
      type: String,
      required: [true, 'An AI must have a position'],
    },
    aiType: {
      type: String,
      required: [true, 'An AI must have a type'],
      enum: ['GPT', 'CHOICE'],
      default: 'GPT',
    },
    image: {
      type: String,
      required: [true, 'An AI must have an image'],
    },
  },
  {
    timestamps: true,
  }
);

const NPC = model('AI', npcSchema);

export default NPC;
