import express from 'express';

const surveyRouter = express.Router();

surveyRouter.get("/", (req, res) => {
    console.log('survey route accessed');
    res.send('hit the user endpoint');
})
  
surveyRouter.post("/", (req, res) => {
    console.log(req.body);
    res.json(req.body);
});

export default surveyRouter;