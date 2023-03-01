import mongoose from "mongoose";
import { UserDocumnet } from "./user.model";

export interface SessionDocument extends mongoose.Document {
    user: UserDocumnet["_id"];
    valid: boolean;
    userAgent: string;
    createdAt: Date;
    updatedAt: Date;
}

const sessionSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        valid: { type: Boolean, default: true },
        userAgent: { type: String },
    },
    { timestamps: true }
);

const sessionModel = mongoose.model<SessionDocument>("Session", sessionSchema);

export default sessionModel;
