const sessionIdtoUsermap=new Map()

function setUser(id,user){
    sessionIdtoUsermap.set(id,user)
}

function getUser(id,user){
    sessionIdtoUsermap.get(id)
}

module.exports={setUser,getUser}