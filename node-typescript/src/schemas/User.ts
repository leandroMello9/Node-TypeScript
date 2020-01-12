import { Schema, model, Document } from 'mongoose'

interface UserInteface extends Document {
  // ? Email não é obrigatorio
  email?: string,
  fritName?: string,
  lastName?: string,
  fullName(): string
}

const UserSchema = new Schema({
  email: String,
  fristName: String,
  lastName: String

}, {
  timestamps: true
})

UserSchema.methods.fullName = function ():string {
  return this.fristName + ' ' + this.lastName
}

export default model<UserInteface>('User', UserSchema)
