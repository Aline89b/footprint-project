import { Schema, models, model} from "mongoose"


const userContactSchema = new Schema({
    name: String,
    surname: String,
    email: String
})

 const UserContact = models.contact || model("contact", userContactSchema)

export default UserContact