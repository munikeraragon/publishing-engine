const { ContactMessage } = require("../models");

const Query = {
    getContactMessages: async () => {
    try {
      const contactMessages = await ContactMessage.findAll();
      return contactMessages;
    } catch (err) {
      return err;
    }
  },
};

const Mutation = {
  createContactMessage: async (_, { contactMessage }) => {
    try {
      (await ContactMessage) &&
        ContactMessage.create({
          ...contactMessage,
        });
      return "Contact message has been saved";
    } catch (err) {
      return err;
    }
  },
};

module.exports = { Query, Mutation };
