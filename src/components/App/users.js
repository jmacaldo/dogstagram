const users = [
  "Michael",
  "Dwight",
  "Jim",
  "Pam",
  "Andy",
  "Ryan",
  "Creed",
  "Kevin",
  "Angela",
  "Oscar",
  "Phyllis",
  "Karen"];

export default function(){
  console.log('module fired!');
  return users[Math.floor(Math.random()*users.length)]
}
