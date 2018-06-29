// Complete the climbingLeaderboard function below.
function climbingLeaderboard(scores, alice) {
    let result = [];
    // remove duplicates from scores
    let uniques = scores.filter((item, pos) => {
        return scores.indexOf(item) === pos;
    })

    
    alice.forEach((score) => {
        while(uniques[uniques.length -1] <= score) {
            uniques.pop();
        }
        result.push(uniques.length + 1)
    })
    return result
}
const scores = [100, 100, 50, 40, 40, 20];
const aliceScores = [5, 25, 50, 120];

console.log(climbingLeaderboard(scores, aliceScores));