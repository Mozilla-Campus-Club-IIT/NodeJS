const write = require('./jsonRW.js');

module.exports = (app)=> {    
      app.post('/api/v1/members/register', (req, res) => {
          let body = req.body;
          if (body.userName==undefined||body.email==undefined||body.password==undefined){
              res.status(400).send("Invalid Post request")
              return;
          }
          write.registerMember(body.userName,body.email,body.password);
          res.status(200).send("User Registered.");
      });
  }
