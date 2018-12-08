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

export function randomUser(){
  return users[Math.floor(Math.random()*users.length)]
}
