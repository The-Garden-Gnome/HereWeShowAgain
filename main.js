//Group Project Team Members are: Mike Reams, Joe Langston, Katrine Jackson
const mainElement = document.querySelector('main')

const kata1heading = document.createElement('h1')
kata1heading.append('Kata 1: ')
mainElement.append(kata1heading)

const kata2heading = document.createElement('h1')
kata2heading.append('Kata 2: ')
mainElement.append(kata2heading)

const kata3heading = document.createElement('h1')
kata3heading.append('Kata 3: ')
mainElement.append(kata3heading)

const kata4heading = document.createElement('h1')
kata4heading.append('Kata 4: ')
mainElement.append(kata4heading)

const kata5heading = document.createElement('h1')
kata5heading.append('Kata 5: ')
mainElement.append(kata5heading)

const kata6heading = document.createElement('h1')
kata6heading.append('Kata 6: ')
mainElement.append(kata6heading)

const kata7heading = document.createElement('h1')
kata7heading.append('Kata 7: ')
mainElement.append(kata7heading)

const kata8heading = document.createElement('h1')
kata7heading.append('Kata 8: ')
mainElement.append(kata8heading)

const kata9heading = document.createElement('h1')
kata9heading.append('Kata 9: ')
mainElement.append(kata9heading)

const kata10heading = document.createElement('h1')
kata10heading.append('Kata 10: ')
mainElement.append(kata10heading)

const kata11heading = document.createElement('h1')
kata11heading.append('Kata 11: ')
mainElement.append(kata11heading)

const kata12heading = document.createElement('h1')
kata12heading.append('Kata 12: ')
mainElement.append(kata12heading)

const kata13heading = document.createElement('h1')
  mainElement.append(kata13heading)
  kata13heading.append('Kata 13: ')


const kata14heading = document.createElement('h1')
  mainElement.append(kata14heading)
  kata14heading.append('Kata 14: ')

const kata15heading = document.createElement('h1')
  mainElement.append(kata15heading)
  kata15heading.append('Kata 15: ')

  const kata16heading = document.createElement('h1')
  mainElement.append(kata16heading)
  kata16heading.append('Kata 16: ')

  const kata17heading = document.createElement('h1')
  mainElement.append(kata17heading)
  kata17heading.append('Kata 17: ')

  const kata18heading = document.createElement('h1')
  mainElement.append(kata18heading)
  kata18heading.append('Kata 18: ')

//Kata 1//

let counter1 = 0
  while (counter1 < 20) {
    counter1 += 1
    kata1heading.append(counter1 + ', ')
  }

  //Kata 2//
  let counter2 = 1
  while (counter2 <= 20) {
    if (counter2 % 2 == 0) {
  }
    counter2 += 1
    kata2heading.append(counter2 + ', ')
  }

  //kata 3//
  let counter3 = 1
  while (counter3 <= 20) {
    counter3 += 2
    kata3heading.append(counter3 + ', ')
  }

  //kata 4//
  let counter4 = 5
  while (counter4 <= 100) {
    counter4 +=5 
    kata4heading.append(counter4 + ', ')
  }

  //kata 5//
  let counter5 = 1
  while (counter5 <= 100) {
    let isSquare = Number.isInteger(Math.sqrt(counter5));
    if (isSquare) {
        kata5heading.append(counter5 + ', ')
    }
    counter5 += 1 
  }

  //kata 6//
  let counter6 = 20
  while (counter6 >= 1) {
    counter6 -=1
    kata6heading.append(counter6 + ', ')
  }

  //kata 7//
  let counter7 = 20
  while (counter7 >= 1) {
    if (counter7 % 2 == 0) {

    }
    counter7 -=1
    kata7heading.append(counter7 + ', ')
  }

  //kata 8//
  let counter8 = 19
  while (counter8 >= 1) {

    counter8 -=2
    kata8heading.append(counter8 + ', ')
  }

  //kata 9//
  let counter9 = 100
  while (counter9 >= 5) {
    counter9 -=5 
    kata9heading.append(counter9 + ', ')
  }

  //kata 10//
  let counter10 = 100
  while (counter10 >= 1) {
    let isSquare = Number.isInteger(Math.sqrt(counter10));
    if (isSquare) {
        kata10heading.append(counter10 + ', ')
    }
    counter10 -= 1 
  }
  //kata 11//
  const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
  kata11heading.append(sampleArray)

  //kata 12
//   Display all the even numbers contained in sampleArray. (244, 758, 450, …, 940, 472)

for (let index = 0; index < sampleArray.length; index +=1) {
    let evenArray = []
    if (sampleArray[index] % 2 !== 0) {
        continue
    }
    else
    {
      evenArray.push(sampleArray[index])}
      kata12heading.append(evenArray + ", ")
  }

//    kata 13

for (let index = 0; index < sampleArray.length; index +=1) {
    let oddArray = []
    if (sampleArray[index] % 2 == 0) {
        continue
    }
    else{
      oddArray.push(sampleArray[index])}
      kata13heading.append(oddArray + ",")
  }

//    kata 14

  for (let index = 0; index < sampleArray.length; index +=1) {
    let squareArray = []
    squareArray = sampleArray[index] * sampleArray[index]
    kata14heading.append(squareArray + ', ')
  }

  //    kata 15
    let result = 0;
for (let index = 1; index <= 20; index++) {  
    result += index;
    }
    
    kata15heading.append(result)

    // kata 16
    let result2 = 0
    for (let index = 0; index < sampleArray.length; index ++) {  
          result2 += sampleArray[index]
    } 
        kata16heading.append(result2)
    

     // kata 17
for(let index = 0; index <sampleArray.length; index += 1 ){
    for(let j = index +1; j<sampleArray.length; j+= 1){
        if(sampleArray[index]>sampleArray[j]){
              temp = sampleArray[index];
              sampleArray[index] = sampleArray[j];
              sampleArray[j] = temp;
      
           }}}
    kata17heading.append(sampleArray[0])

    // kata 18

    for(let index = 0; index <sampleArray.length; index += 1 ){
        for(let j = index +1; j<sampleArray.length; j+= 1){
            if(sampleArray[index]<sampleArray[j]){
                  temp = sampleArray[index];
                  sampleArray[index] = sampleArray[j];
                  sampleArray[j] = temp;
          
               }}}
        kata18heading.append(sampleArray[0])