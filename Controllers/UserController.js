// const UserServices = require('../Services/UserServices')
// module.exports.AddUser = (req,res)=>{
//    UserServices.AddUser(req.body)
  
// }
const UserServices = require('../Services/UserServices');

module.exports.AddUser = async (req, res) => {
   try {
      await UserServices.AddUser(req.body);
      return res.status(200).json({ message: 'Utilisateur ajouté avec succès' });
   } catch (error) {
      console.log('Une erreur est survenue :', error);
      return res.status(500).json({ message: 'Une erreur est survenue lors de l\'ajout de l\'utilisateur' });
   }
};



module.exports.GetUser = async (req, res) => {
    try {
        const user = await UserServices.GetUser({ id: req.params.id });

        if (!user) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }

        return res.status(200).json({ message: 'Utilisateur récupéré avec succès', user });
    } catch (error) {
        console.log('Une erreur est survenue lors de la récupération de l\'utilisateur :', error);
        return res.status(500).json({ message: 'Une erreur est survenue lors de la récupération de l\'utilisateur' });
    }
};



module.exports.GetUsers = async (req, res) => {
   try {
       const user = await UserServices.GetUsers({ id: req.params.id });

       if (!user) {
           return res.status(404).json({ message: 'Utilisateur non trouvé' });
       }

       return res.status(200).json({ message: 'Utilisateur récupéré avec succès', user });
   } catch (error) {
       console.log('Une erreur est survenue lors de la récupération de l\'utilisateur :', error);
       return res.status(500).json({ message: 'Une erreur est survenue lors de la récupération de l\'utilisateur' });
   }
};
