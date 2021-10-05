// This function must return the name of the person who submitted 
// the vegetable with the highest ranking in the provided category.
const judgeVegetable = function(vegetables, metric){
  let highest = 0;
  let winnerIndex = 0;
  for(let i = 0; i < vegetables.length; i++){
    if(vegetables[i][metric] > highest){
      highest = vegetables[i][metric];
      winnerIndex = i;
    }
  }
  return vegetables[winnerIndex].submitter;
}
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric));