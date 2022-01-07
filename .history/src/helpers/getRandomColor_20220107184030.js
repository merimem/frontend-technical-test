function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  
export default function  getRandomColor () {
    let colors = ['#A8D281', '#FBE465', '#FB8771', '#0358B1', '#7AD2C8', '#11B3DF', '#7E57CB']
    let color;
    colors = shuffle(colors)
    colors = colors[Math.floor(Math.random() * 6)]
    return (color)
}