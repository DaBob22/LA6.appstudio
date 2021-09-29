
let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]




submitName.onclick=function(){
  let memberName = inptName.value
  if (members.includes(memberName) == true) {
  lblMember.value = "you are a member!"
  }
else { lblMember.value = "You were not a member and have now been added!"
  members.push(memberName)
  }
}
