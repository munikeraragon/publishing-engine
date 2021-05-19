const { ContactMessage } = require('../models');


const Mutation = {
    createContactMessage: async (_, { contactMessage }) => {
        try{
            await ContactMessage && ContactMessage.create({
                ...contactMessage
            })
            return "Contact message has been saved"
        } catch {
            return "Error"
        }
      }
}

module.exports = { Mutation }