import express from "express"
import authMiddleware from "../middleware/auth.js"
import { getAllRequirements, userRequirement } from "../controller/requirementController.js"

const requirementRouter=express.Router()

requirementRouter.post("/addrequirement",userRequirement);
requirementRouter.get("/getrequirement",getAllRequirements);
export default requirementRouter;











// import express from 'express';
// import requirementModel from '../models/requirementModel.js';

// const router = express.Router();

// // Endpoint to get all requirements
// router.get('/getAllRequirements', async (req, res) => {
//   try {
//     const requirements = await requirementModel.find(); // Fetch all documents from the database
//     res.status(200).json(requirements); // Send the requirements back as a JSON response
//   } catch (error) {
//     res.status(500).json({
//       message: 'Error fetching requirements',
//       error: error.message,
//     });
//   }
// });

// export default router;






//for frontend optional
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import RequirementForm from './components/RequirementForm';
// import AdminPanel from './components/AdminPanel';

// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/requirement-form" component={RequirementForm} />
//         <Route path="/admin" component={AdminPanel} />
//       </Switch>
//     </Router>
//   );
// }

// export default App;
