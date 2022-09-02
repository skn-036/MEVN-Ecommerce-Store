import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

interface IUser {
	name: string;
	email: string;
	password: string;
	avatar?: string;
	token?: string | null;
}

// const handlePasswordHashing = async (password: string): string => {
// 	const hash: string = await bcrypt.hash
// }

const userSchema = new Schema<IUser>(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true, select: false },
		avatar: { type: String },
		token: { type: String || null, required: false, select: false },
	},
	{
		timestamps: true,
	}
);

userSchema.pre('save', async function (next) {
	if (this.password && this.isModified('password')) {
		this.password = await bcrypt.hash(this.password, 10);
	}
	next();
});

export default model<IUser>('User', userSchema);
