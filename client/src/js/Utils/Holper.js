class Helper {
  generateUserId() {
    this.userid = Math.random().toString(16).slice(2);
    return this.userid;
  }
}


export default Helper;
