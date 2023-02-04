function isHorseman(string: string) {
  if(string === 'horseman') {
    return true;
  } else {
    throw Error ("You're NOT the horseman! I am the horse... man!")
  }
}

export default isHorseman;