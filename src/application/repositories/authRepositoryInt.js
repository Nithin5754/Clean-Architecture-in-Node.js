


const authRepositoryInt=(repository)=>{

const authenticatedUser=(email,password)=>repository.authenticatedUser(email,password)


return {
  authenticatedUser
}

}


export default authRepositoryInt