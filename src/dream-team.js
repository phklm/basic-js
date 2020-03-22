module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false
  let team = [];
  members.forEach(member => {
    if(typeof(member) != "string") return false;
    team.push(member.trim()[0].toUpperCase());
  });
  return team.sort().join('');
};