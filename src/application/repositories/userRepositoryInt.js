





const userRepositoryInt=(repository)=>{

const  isUserExist=(email)=>repository.isUserExist(email)
const creatingUser=(username,password,email,userRepository)=>repository.creatingUser(username,password,email,userRepository)

return{
  isUserExist,
  creatingUser
}

}

export default userRepositoryInt