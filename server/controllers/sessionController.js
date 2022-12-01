// const Session = require('../models/sessionModel');
// const Cookie = require('../controllers/cookieController');
// const User = require('../models/userModel');

// const sessionController = {};

// /**
// * isLoggedIn - find the appropriate session for this request in the database, then
// * verify whether or not the session is still valid.
// */
// sessionController.isLoggedIn = async (req, res, next) => {
//   // write code here
//   const session = await Session.findOne({cookieId: req.cookies.ssid})
//   res.locals.loggedIn = session !== null;
//   return next();
//   // Check if user has a cookie with the name 'ssid' or if session exist
//   // console.log(res.locals.sessionId.cookieId);
//   // console.log(req.cookies.ssid);
//   // if (res.locals.sessionId.cookieId === req.cookies.ssid) return next();
//   // return next({ message: 'The error handler works!!' })
// };

// /**
// * startSession - create and save a new Session into the database.
// */
// sessionController.startSession = async (req, res, next) => {
//   //write code here
//   const session = await Session.findOne({cookieId: res.locals.id});
//   // returning user
//   if (session) return next();

//   // hit this block if it's a new user just signing up
//   if (res.locals.id) {
//     Session.create({cookieId: res.locals.id});
//   }

//   return next();

//   // Session.find({cookieId})
//   //   .then(data => {
//   //     console.log('session.find', data[0])
//   //     res.locals.sessionId = data[0];
//   //     if (res.locals.sessionId !== undefined) {
//   //       return next(); }
//   //   }).then(() => {
//   //     if (res.locals.sessionId === undefined) {
//   //       Session.create({cookieId})
//   //         .then(data => {
//   //           console.log('Session.create', data);
//   //           res.locals.sessionId = data;
//   //           return next();})
//   //         .catch(err => next({ message: 'The error handler in startSession!', log: err}));
//   //     }
    
//   //   });
// }
// //return next({message: 'this is end of startSession'});
// //const cookieId = foundUser.

// module.exports = sessionController;
