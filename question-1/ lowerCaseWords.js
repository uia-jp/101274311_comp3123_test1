

const lowerCaseWords = (mixedArray) => {

    return new Promise((resolve, reject) => {

        if(mixedArray.length >= 0 && Array.isArray(mixedArray)) {
            const filteredArrayHavingOnlyStr = mixedArray.filter((eachElOfArr) => typeof eachElOfArr === "string");
            const mappedArrayOfLowerCaseStrings = filteredArrayHavingOnlyStr.map((eachItemOfFilterArr) => eachItemOfFilterArr.toLowerCase());
            
            resolve(mappedArrayOfLowerCaseStrings);
            
        }else{
            reject("Invalid array");
        }
    });
};
  
//input
const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];

lowerCaseWords(mixedArray)
    .then((value) =>
      console.log(value)
    )
    .catch((error) =>
      console.log(error)
    );