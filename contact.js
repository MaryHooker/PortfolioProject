let buttonReview = document.querySelector('#likeButton');

buttonReview.addEventListener('click', messageOnClick);

function messageOnClick(event) {
   
//ASK THE USER IF THEY LIKE THE COLOR SCHEME
//****************if they do not like
//Create an empty array to store the reponses for why the user does not like the color theme
let colorSchemeBetter=[];

let doYouLikeColor='';

while(doYouLikeColor==''){
    //Prompt the user to ask if they like the color theme and provide them with the choice of yes or no and store it in variable
    doYouLikeColor= prompt("Do you like the color scheme of this page? Yes or No?");
//Create conditional to prompt the user to provide feedback if they answer 'no' to liking the color theme
if(doYouLikeColor=='no'||doYouLikeColor=='No')
{   //prompt the user for what colors they would like more and store it in a variable
    let whatCanBeBetter= prompt("I'm sorry! What color scheme would be more appealing to you?");
    //Add the user response to the empty array of what can be improved
    colorSchemeBetter.push(whatCanBeBetter);
    alert('Thank you for your input!');
}
}
//iterate through every element in the array 'color scheme better' using a for each and anonymous function
colorSchemeBetter.forEach((answer) =>
{   //print the array in the console
    console.log(`Do NOT like: ${answer}`);
});
//***************if they do like
//Create an empty array to hold the resonses for what the user likes about the color scheme
let colorSchemeLike=[];
////Create conditional to prompt the user to provide feedback if they answer 'yes' to liking the color theme
if(doYouLikeColor=='yes'||doYouLikeColor=='Yes')
{   //prompt the user for why they like the color scheme and store it in a variable
    let whatDoYouLike= prompt('Thank you! What do you like about it?');
    ////Add the user response to the empty array of what can they liked about the color scheme
    colorSchemeLike.push(whatDoYouLike);
    alert('Thank you for your input!');
};
//iterate through every element in the array 'color scheme like' using a for each and anonymous function
colorSchemeLike.forEach((answer)=>
    {   //print the array in the console
        console.log(`Like: ${answer}`);
    })

};   
//*****************************************************************
    

