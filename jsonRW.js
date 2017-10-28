const fs = require('fs');

let registerMember = (userName,email,password)=>{
    let members = readMembers();
    let memberDetails ={
        id : (members.length)+1,
        userName,
        email,
        password
    }
    members.push(memberDetails);
    fs.writeFileSync('./config/members.json', JSON.stringify(members));
}

let readMembers = () => {
    try {
      let memberString = fs.readFileSync('./config/members.json');
      return JSON.parse(memberString);
    } catch (e) {
      return [];
    }
};

module.exports ={
    registerMember,
    readMembers
}
