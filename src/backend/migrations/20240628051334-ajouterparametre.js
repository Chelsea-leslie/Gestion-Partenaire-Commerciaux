// module.exports = {
//   async up(db, client) {
//     // TODO write your migration here.
//     // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
//     // Example:
//     // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});
//     await db.collection("models").insertMany([
//       {
//         name: "partner",
//         description: "Ceci est le fichier model pour les partenaires",
//         createdAt: new Date(),
//         // autres champs spécifiques à Model 1
//       },
//       {
//         name: "payments",
//         description: "Ceci est le fichier model pour les payements",
//         createdAt: new Date(),
//         // autres champs spécifiques à Model 2
//       },
//       {
//         name: "project",
//         description: "Ceci est le fichier model pour les projets",
//         createdAt: new Date(),
//         // autres champs spécifiques à Model 3
//       },
//       {
//         name: "transactions",
//         description: "Ceci est le fichier model pour les transactions",
//         createdAt: new Date(),
//         // autres champs spécifiques à Model 4
//       },
//       {
//         name: "users",
//         description: "Ceci est le fichier model pour les utilisateurs",
//         createdAt: new Date(),
//         // autres champs spécifiques à Model 5
//       },
//       // Ajoutez d'autres modèles ici
//     ]);
//   },

//   async down(db, client) {
//     // TODO write the statements to rollback your migration (if possible)
//     // Example:
//     // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
//     await db.collection("models").deleteMany({
//       name: { $in: ["partner", "payments", "project", "transactions", "users"] },
//     });
//   }
// };
