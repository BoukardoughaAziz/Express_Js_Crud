const User = require('../Models/User');

module.exports.AddUser = async (serviceData) => {
   try {
      let user = new User({ ...serviceData });
      await user.save();
   } catch (error) {
      console.log('Une erreur est survenue lors de l\'ajout de l\'utilisateur :', error);
      throw new Error(error);
   }
};




module.exports.GetUser = async ({id}) => {
   try {
      let users = await User.findById(id);
      return users; 
   } catch (error) {
      console.log('Une erreur est survenue lors de la recherche de l\'utilisateur :', error);
      throw new Error(error);
   }
};




module.exports.GetUsers = async ({id}) => {
   try {
      let users = await User.find({})
      return users; 
   } catch (error) {
      console.log('Une erreur est survenue lors de la recherche de l\'utilisateur :', error);
      throw new Error(error);
   }
};