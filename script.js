const messages = [["are motivated today!", "are modelling on Steve Jobs.", 'believe "Your time is limited, so don’t waste it living someone else’s life."'], 
                  ["are zen today.", "are modelling on Buddha.", 'believe "The mind is everything. What you think you become."' ], 
                  ["are determined today!", "are modelling on Woody Allen.", 'believe "Eighty percent of success is showing up."' ]]


const generateRandomIndex = (arr) => Math.floor(Math.random() * arr.length);

const generateRandomQuotes = (arr) => {
  let index = generateRandomIndex(arr)
  arr[index].forEach(string => {
    console.log(`You ${string}`)
  })
}

generateRandomQuotes(messages)
