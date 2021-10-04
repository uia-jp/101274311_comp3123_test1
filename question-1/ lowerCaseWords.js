//function
const lowerCaseWords = (mixedArray) => {

    return new Promise((resolve, reject) => {

        if(mixedArray.length >= 0 && Array.isArray(mixedArray)){

            const filterString = mixedArray.filter((item) => typeof item === "string");

            const arrayLowercaseWords = filterString.map((filteredItem) => filteredItem.toLowerCase());
            
            resolve(arrayLowercaseWords);
            
        }else{

            reject("error");

        }

    });
};
  
//input
const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];

//output
lowerCaseWords(mixedArray)
    .then((value) =>

      console.log(value)

    )
    .catch((error) =>

      console.log(error)
      
    );