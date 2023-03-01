const introTxt1 = document.getElementById('introTxt1');
const introTxt2 = document.getElementById('introTxt2');
const introTxt3 = document.getElementById('introTxt3');
const introTxt4 = document.getElementById('introTxt4');

const uGestImgOutput = document.getElementsByTagName('img')[0];

const uGestOutput = document.getElementById('uChosenGest');
const tChosenGest = document.getElementById('tChosenGest');
const fChosenGest = document.getElementById('fChosenGest');
const chooseUrWpnMSG = document.getElementById('chooseUrWpnMSG');
const roundOutcomeMSG = document.getElementById('roundOutcomeMSG');

const bowImg = document.getElementById('bowImg');
const swordImg = document.getElementById('swordImg');
const shieldImg = document.getElementById('shieldImg');


const bowBtn = document.getElementById('bowBtn');
const swordBtn = document.getElementById('swordBtn');
const shieldBtn = document.getElementById('shieldBtn');

const gameStatus = document.getElementById('gameStatus');
const uScore = document.getElementById('uScore');
const tScore = document.getElementById('tScore');
const fScore = document.getElementById('fScore');
const endGameDiv = document.getElementById('endGamePage')

let words = ["r", "p", "s"];
let ubScore = 0;
let tbScore = 0;
let fbScore = 0;
let userGest;
let thorGest;
let freyGest;

choiceMade();

$("#bowBtn").hover(function(){
    $("#bowInfo").slideToggle();
})

$("#swordBtn").hover(function(){
    $("#swordInfo").slideToggle();
})

$("#shieldBtn").hover(function(){
    $("#shieldInfo").slideToggle();
})

// .................................
// MAKE CHOICE FUNCTIONS STARTS HERE

function choiceMade(){
    bowBtn.addEventListener('click', function(){
        game("Bow");
    });
    swordBtn.addEventListener('click',function(){
        game("Sword" );
    });
    shieldBtn.addEventListener('click', function(){
        game("Shield");
    });
};

function game(x){
    //uGestOutput.innerHTML = x;
    $(".chosenGest_P").text("");
    $("#uChosenGestImg").attr("src", "imgs/"+x+".jpg");
    $(".gest").removeClass("circle")
    userGest = x;
    chooseUrWpnMSG.innerHTML = " ";
    makeThorChoice();
    makeFreyChoice();
    makeResult();
};

// MAKE CHOICE FUNCTIONS ENDS HERE
// .....................................

function makeThorChoice(){
    thorGest = Math.floor(Math.random()*words.length);
    if (thorGest === 0){
        $("#tChosenGest").addClass("ZrotateBow");
        $("#tChosenGestImg").attr("src", "imgs/Bow.jpg");
        thorGest = "Bow";
    }else if(thorGest === 1){
        $("#tChosenGest").addClass("ZrotateSword");
        $("#tChosenGestImg").attr("src", "imgs/Sword.jpg");
        thorGest = "Sword";
    }else if (thorGest === 2){
        $("#tChosenGestImg").attr("src", "imgs/Shield.jpg");
        thorGest = "Shield";
    };
};

function makeFreyChoice(){
    freyGest = Math.floor(Math.random()*words.length);
    $("#fChosenGest").addClass("Yrotate");
    if (freyGest === 0){
        $("#fChosenGestImg").attr("src", "imgs/Bow.jpg");
        freyGest = "Bow";
    }else if(freyGest === 1){
        $("#fChosenGestImg").attr("src", "imgs/Sword.jpg");
        freyGest = "Sword";
    }else if (freyGest === 2){
        $("#fChosenGestImg").attr("src", "imgs/Shield.jpg");
        freyGest = "Shield";
        if(ubScore !== 0 && userGest === "Shield" && thorGest === "Sword"){
            $("#tChosenGest").addClass("XrotateSwSh");
        }
    };
};

// COMPUTER CHOICE FUNCTIONS ENDS HERE
// .....................................

// .....................................
// ROUND RESULT FUNCTIONS STARTS HERE

function makeResult(){
    switch (userGest+thorGest+freyGest){
        case "BowBowBow":
        case "BowSwordShield":
        case "BowShieldSword":

        case "ShieldShieldShield":
        case "ShieldBowSword": 
        case "ShieldSwordBow":  

        case "SwordSwordSword":
        case "SwordBowShield":
        case "SwordShieldBow":
            roundOutcomeMSG.innerHTML = "It's a TIE, \nNothing Changes" //On some reason new lines are not working
            break;

        case "ShieldBowBow":
        case "BowSwordSword":
        case "SwordShieldShield":
            roundOutcomeMSG.innerHTML = "You WON, Thor and Frey LOST"
            ubScore ++;
            break;
        case "SwordSwordShield":
        case "BowBowSword":
        case "ShieldShieldBow":
            roundOutcomeMSG.innerHTML = "You and Thor WON, Frey LOST"
            ubScore ++;
            tbScore ++;
            break;
        case "SwordShieldSword":  
        case "ShieldBowShield":
        case "BowSwordBow":        
            roundOutcomeMSG.innerHTML = "You and Frey WON, Thor LOST"
            ubScore ++;
            fbScore ++;
            break;
        
        case "SwordBowBow":
        case "ShieldSwordSword":
        case "BowShieldShield":
            roundOutcomeMSG.innerHTML = "You LOST, Thor and Frey WON"
            tbScore ++;
            fbScore ++;
            break;
        case "ShieldShieldSword":
        case "BowBowShield":
        case "SwordSwordBow":
            roundOutcomeMSG.innerHTML = "You and Thor LOST, Frey WON"
            fbScore ++;
            break;
        case "SwordBowSword":  
        case "ShieldSwordShield":
        case "BowShieldBow":        
            roundOutcomeMSG.innerHTML = "You and Frey LOST, Thor WON"
            tbScore ++;
            break;

    }
    scoreTable();
    declareWinner();
};

// ROUND RESULT FUNCTIONS ENDS HERE
// .....................................

// .....................................
// RESULT FIELD FUNCTIONS STARTS HERE

function scoreTable(){
    uScore.innerHTML = ubScore;
    tScore.innerHTML = tbScore;
    fScore.innerHTML = fbScore;
}

function declareWinner(){
    if(ubScore === 5 || tbScore === 5 || fbScore === 5){
        $("header").fadeOut(1500); 
        $("main").fadeOut(1500, function(){
        endGameDiv.style.fontFamily = "TimesNewRoman"
            if (uScore === tScore === fScore){
                $("#endGamePage").text("Game has finished: It's a tie!");
            }else if (ubScore >= tbScore && ubScore >= fbScore){
                $("#endGamePage").text("Game has finished: Congratulations! You Won!");
                endGameDiv.style.color = "greenyellow"
            }else if (tbScore >= ubScore && tbScore >= fbScore){
                $("#endGamePage").text("YOU LOST.. But YOU ARE ALIVE, WHAT WILL HAPPEN NEXT, IS UP TO YOU TO DECIDE");
                endGameDiv.style.textShadow = "none"
            }else if (fbScore >= tbScore && fbScore >= ubScore){
                $("#endGamePage").text("YOU LOST.. But YOU ARE ALIVE, WHAT WILL HAPPEN NEXT, IS UP TO YOU TO DECIDE");
                endGameDiv.style.textShadow = "none"
            }
        }); 
    }         
}

// RESULT FIELD FUNCTIONS ENDS HERE
// .....................................