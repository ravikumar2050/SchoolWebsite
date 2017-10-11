/**
 * Created by pranavkapoor on 08/07/17.
 */

var array=[0,1,2,3,4,5,6,7,8];
var array1=["#zero","#one","#two","#three","#four","#five","#six","#seven","#eight"];
var array2=["#zero","#one","#two","#three","#four","#five","#six","#seven","#eight"];

var i=0;

function winGame(para)
{


}
function  checkWin()
{
    if (array[0] === array[4] && array[4] === array[8])
    {
        if(array[0]===100)
        {
            winGame("player");  //player wins
        }
        else if(array[0]===99)
        {
            winGame("cpu");
        }
    }
    if (array[2] === array[4] && array[4] === array[6])
    {
        if (array[0] === 100) {
            winGame("player");
        }
        else if (array[0] === 99) {
            winGame("cpu");

        }
    }

    if (array[0] === array[3] && array[3] === array[6])
    {
        if(array[0]===100)
        {
            winGame("player");        }
        else if(array[0]===99)
        {
            winGame("cpu");

        }
    }
    if (array[1] === array[4] && array[4] === array[7])
    {
        if(array[0]===100)
        {
            winGame("player");
        }
        else if(array[0]===99)
        {
            winGame("cpu");

        }

    }
    if (array[2] === array[5] && array[5] === array[8])
    {
        if(array[0]===100)
        {
            winGame("player");
        }
        else if(array[0]===99)
        {
            winGame("cpu");

        }

    }
    if (array[0] === array[1] && array[1] === array[2])
    {
        if(array[0]===100)
        {
            winGame("player");
        }
        else if(array[0]===99)
        {
            winGame("cpu");

        }

    }
    if (array[3] === array[4] && array[4] === array[5])
    {
        if(array[0]===100)
        {
            winGame("player");
        }
        else if(array[0]===99)
        {
            winGame("cpu");

        }

    }
    if (array[6] === array[7] && array[7] === array[8])
    {
        if(array[0]===100)
        {
            winGame("player");
        }
        else if(array[0]===99)
        {
            winGame("cpu");

        }

    }
}



function cpuTurn(){
    var cpuNumber=Math.floor(Math.random()*(array1.length ));
    var cpuChoice=array1[cpuNumber];
    console.log(cpuNumber)

    console.log(cpuChoice)

    $(cpuChoice).text("0");
    $(cpuChoice).unbind("click")
    for(var p=0;p<array2.length;p++){
        if(cpuChoice===array2[p]){
            array[p]=99;

        }
    }


array1=array1.filter(function (val) {
    return val!=cpuChoice;

})
checkWin();
};


function playerTurn(ide,numberInArray,filteringChoice) {

    $(ide).text("X");
    $(ide).unbind("click")
array[numberInArray]=100;
    array1=array1.filter(function (val) {
        return val!=filteringChoice;
    })


    cpuTurn();
checkWin();

};


$("#zero").click(function () {
    playerTurn("#zero",0,"#zero");

});
$("#one").click(function () {
    playerTurn("#one",1,"#one");
});
$("#two").click(function () {
    playerTurn("#two",2,"#two");
});
$("#three").click(function () {
    playerTurn("#three",3,"#three");
});
$("#four").click(function () {
    playerTurn("#four",4,"#four");
});
$("#five").click(function () {
    playerTurn("#five",5,"#five");
});
$("#six").click(function () {
    playerTurn("#six",6,"#six");
});
$("#seven").click(function () {
    playerTurn("#seven",7,"#seven");
});
$("#eight").click(function () {
    playerTurn("#eight",8,"#eight");
});

function  reset() {
    window.location.reload();
}

$("#resetALl").click(function () {
    console.log("hello");
    reset();
});