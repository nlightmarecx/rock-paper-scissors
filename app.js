const introTxt1 = document.getElementById('introTxt1');
const introTxt2 = document.getElementById('introTxt2');
const introTxt3 = document.getElementById('introTxt3');
const introTxt4 = document.getElementById('introTxt4');

const uGestImgOutput = document.getElementsByTagName('img')[0];

const uGestOutput = document.getElementById('uChosenGest');
const tChosenGest = document.getElementById('tChosenGest');
const fChosenGest = document.getElementById('fChosenGest');

const chooserU = document.getElementsByClassName('chosenGest_P')[0];
const chooserT = document.getElementsByClassName('chosenGest_P')[1];
const chooserF = document.getElementsByClassName('chosenGest_P')[2];

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

const endGameDiv = document.getElementById('endGamePage');
const endGameH3 = document.getElementById('endGameH3');
const endGameP3 = document.getElementById('endGameP3');
const quitBtn = document.getElementById('quitBtn');
const playAgainBtn = document.getElementById('playAgainBtn');


let words = ["r", "p", "s"];
let ubScore = 0;
let tbScore = 0;
let fbScore = 0;
let userGest;
let thorGest;
let freyGest;

let gameOn = false;
let outsiderT = false;
let outsiderF = false;
let numRounds = 5; //+another manually to change num rounds at restart game


choiceMade();
toggleWpnInfo();
buttonDown();

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
    gameOn = true;
};

function game(x){
    if (gameOn === true){
        $(".chosenGest_P").text("");
        $("#uChosenGestImg").attr("src", "imgs/"+x+".jpg");
        $(".gest").removeClass("circle");
        userGest = x;
        chooseUrWpnMSG.innerHTML = " ";
        makeThorChoice();
        makeFreyChoice();
        makeResult();
    }
};

function toggleWpnInfo(){
    $("#bowBtn").hover(function(){
        $("#bowInfo").slideToggle();
    })
    
    $("#swordBtn").hover(function(){
        $("#swordInfo").slideToggle();
    })
    
    $("#shieldBtn").hover(function(){
        $("#shieldInfo").slideToggle();
    })
}

function buttonDown(){
    $("#bowBtn").mousedown(function(){
        $("#bowBtn").css({"border": "solid 5px grey"});
    });
    $("#bowBtn").mouseup(function(){
        $("#bowBtn").css({"border": "solid 1px whitesmoke"});
    })

    $("#swordBtn").mousedown(function(){
        $("#swordBtn").css({"border": "solid 5px grey"});
    });
    $("#swordBtn").mouseup(function(){
        $("#swordBtn").css({"border": "solid 1px whitesmoke"});
    })

    $("#shieldBtn").mousedown(function(){        
        $("#shieldBtn").css({"border": "solid 5px grey"});
    });
    $("#shieldBtn").mouseup(function(){
        $("#shieldBtn").css({"border": "solid 1px whitesmoke"});
    })
}

// MAKE CHOICE FUNCTIONS ENDS HERE
// .....................................

function makeThorChoice(){
    thorGest = Math.floor(Math.random()*words.length);
    if (thorGest === 0){
        $("#tChosenGestImg").attr("src", "imgs/Bow.jpg");
        if(outsiderT === true){
            thorGest = " ";
        }else{
            thorGest = "Bow";
        }
        $("#tChosenGestImg").css({"transform": "rotateZ(135.5deg)"});
    }else if(thorGest === 1){
        $("#tChosenGestImg").attr("src", "imgs/Sword.jpg");
        if(outsiderT === true){
            thorGest = " ";
        }else{
            thorGest = "Sword";
        }
        $("#tChosenGestImg").css({"transform": "rotateZ(139deg)"});
    }else if (thorGest === 2){
        $("#tChosenGestImg").attr("src", "imgs/Shield.jpg");
        if(outsiderT === true){
            thorGest = " ";
        }else{
            thorGest = "Shield";
        }
    };
};

function makeFreyChoice(){
    freyGest = Math.floor(Math.random()*words.length);
    $("#fChosenGestImg").css({"transform": "rotateY(180deg)"});
    if (freyGest === 0){
        $("#fChosenGestImg").attr("src", "imgs/Bow.jpg");
        if(outsiderF === true){
            freyGest = " ";
        }else{
            freyGest = "Bow";
        }
    }else if(freyGest === 1){
        $("#fChosenGestImg").attr("src", "imgs/Sword.jpg");
        if(outsiderF === true){
            freyGest = " ";
        }else{
            freyGest = "Sword";
        }
    }else if (freyGest === 2){
        $("#fChosenGestImg").attr("src", "imgs/Shield.jpg");
        if(ubScore !== 0 && userGest === "Shield" && thorGest === "Sword"){
            $("#tChosenGestImg").css({"transform": "rotateZ(180deg)"});
        };
        if(outsiderF === true){
            freyGest = " ";
        }else{
            freyGest = "Shield";
        }
    };
};

// COMPUTER CHOICE FUNCTIONS ENDS HERE
// .....................................

// .....................................
// ROUND RESULT FUNCTIONS STARTS HERE

function makeResult(){
    identifyGestures();
    scoreTable();
    declareWinner();
};

function removeOutsider(){
    //Remove Frey
    if (ubScore === numRounds && ubScore === tbScore && ubScore > fbScore){
        $("#fChosenGest").css({"bottom": "202.5px", "right": "175px"});
        $("#fChosenGest").css("display", "none");
        $("#uChosenGest").css({"bottom": "100px", "left": "38px"});
        $("#tChosenGest").css({"bottom": "100px", "right": "38px"});
        if (thorGest === "Sword"){
            $("#tChosenGest").css({"transform": "rotateY(180deg)"});
        }
        if(thorGest === "Bow"){
            $("#tChosenGest").css({"transform": "rotateZ(88deg)"});
        };
        if (userGest === "Sword"){
            $("#uChosenGest").css({"transform": "rotateZ(0deg)"});
        }
        if(userGest === "Bow"){
            $("#uChosenGest").css({"transform": "rotateZ(45deg)"});
        };
        $("#fScBoard").css({"color": "red"});
        $("#fScore").css({"text-shadow": "0 0 10px red", "color": "grey"});
        numRounds = numRounds + 1;
        outsiderF = true;
        //Remove Thor
    }if (ubScore === numRounds && ubScore === fbScore && ubScore > tbScore){
        $("#tChosenGest").css("display", "none");
        $("#uChosenGest").css({"bottom": "100px", "left": "38px"});
        $("#fChosenGest").css({"bottom": "100px", "right": "38px"});
        if (freyGest === "Sword"){
            $("#fChosenGest").css({"transform": "rotateY(0deg)"});
        }
        if(freyGest === "Bow"){
            $("#fChosenGest").css({"transform": "rotateZ(-45deg)"});
        };
        if (userGest === "Sword"){
            $("#uChosenGest").css({"transform": "rotateZ(0deg)"});
        }
        if(userGest === "Bow"){
            $("#uChosenGest").css({"transform": "rotateZ(45deg)"});
        };
        $("#tScBoard").css({"color": "red"});
        $("#tScore").css({"text-shadow": "0 0 10px red", "color": "grey"});
        numRounds = numRounds + 1;
        outsiderT = true;
    }
}

function identifyGestures(){
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
            roundOutcomeMSG.innerHTML = "It's a TIE, Nothing Changes"
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

        //............................................................      
        //TWO PLAYER MODE  
        //USER & THOR.................................................
        case "SwordSword ":  
        case "ShieldShield ":
        case "BowBow ":        
            roundOutcomeMSG.innerHTML = "It's a TIE, Nothing Changes";
            break;
        case "SwordShield ":  
        case "ShieldBow ":
        case "BowSword ":        
            roundOutcomeMSG.innerHTML = "You WON, Thor LOST"
            ubScore ++;
            break;
        case "BowShield ":  
        case "SwordBow ":
        case "ShieldSword ":        
            roundOutcomeMSG.innerHTML = "You LOST, Thor WON"
            tbScore ++;
            break;    

        //USER & FREY.................................................
        case "Sword Sword":  
        case "Shield Shield":
        case "Bow Bow":        
            roundOutcomeMSG.innerHTML = "It's a TIE, Nothing Changes";
            break;
        case "Sword Shield":  
        case "Shield Bow":
        case "Bow Sword":        
            roundOutcomeMSG.innerHTML = "You WON, Frey LOST"
            ubScore ++;
            break;
        case "Bow Shield":  
        case "Sword Bow":
        case "Shield Sword":        
            roundOutcomeMSG.innerHTML = "You LOST, Frey WON"
            fbScore ++;
            break;    
    }        
}

function scoreTable(){
    uScore.innerHTML = ubScore;
    tScore.innerHTML = tbScore;
    fScore.innerHTML = fbScore;
}

// ROUND RESULT FUNCTIONS ENDS HERE
// .....................................

// .....................................
// RESULT FIELD FUNCTIONS STARTS HERE

function declareWinner(){
    if(ubScore === numRounds || tbScore === numRounds || fbScore === numRounds){
        removeOutsider();
        if(ubScore === numRounds && ubScore !== tbScore && ubScore !== fbScore 
            || tbScore === numRounds && tbScore !== ubScore && tbScore !== fbScore 
            || fbScore === numRounds && fbScore !== ubScore && fbScore !== tbScore
            || fbScore === numRounds && fbScore !== ubScore && fbScore === tbScore){
            gamePause();
            endGamePage();
            restartGame();
            $("#quitBtn").click(function(){
                window.open("https://github.com/nlightmarecx", "_blank");
            });
        }    
    }        
}

function gamePause(){
    gameOn = false;
    $(".gest").removeClass("button");
    $(".weaponInfo").css("opacity", "0")
}

function endGamePage(){
    $("header").addClass("fadeHalf");
    $("main").addClass("fadeHalf");
    endGameDiv.style.display = ""
    if (uScore === tScore === fScore){
        $("#endGamePage").text("Game has finished: It's a tie!");
    }else if (ubScore >= tbScore && ubScore >= fbScore){
        $("#endGamePage").removeClass("endGamePageLost");
        $("#endGameP1").removeClass("endGamePNorm");
        $("#endGamePage").addClass("endGamePageWin");
        $("#endGameH3").text("YOU WON!");
        endGameH3.style.textShadow = " 0 0 10px cyan";
        $("#endGameP1").text("YOU ARE AMAZING!");
        $("#endGameP3").text("YOU SURE YOU'RE SAVING THE WORLD FOR THE FIRST TIME?");
        $("#endGameP3").addClass("endGamePNorm");
        $("#quitBtn").text("QUIT");
        $("#quitBtn").removeClass("quitBtn");
        $("#quitBtn").addClass("playAgainBtn");
        $("#playAgainBtn").text("DO 'EM AGAIN");
        $("#playAgainBtn").addClass("playAgainBtn");

    }else if (tbScore >= ubScore && tbScore >= fbScore ||
        fbScore >= tbScore && fbScore >= ubScore){
        $("#endGameP3").removeClass("endGamePNorm");
        $("#endGamePage").removeClass("endGamePageWin");
        $("#endGamePage").addClass("endGamePageLost");
        $("#endGameH3").text("YOU LOST!");
        endGameH3.style.textShadow = " 0 0 10px red";
        $("#endGameP1").text("THROUGH, YOU ARE ALIVE! WHAT WILL HAPPEN NEXT,");
        $("#endGameP1").addClass("endGamePNorm");
        $("#endGameP3").text("IS UP TO YOU TO DECIDE!");
        endGameP3.style.textShadow = " 0 0 10px green";
        $("#quitBtn").text("QUIT");
        $("#quitBtn").removeClass("playAgainBtn");
        $("#quitBtn").addClass("quitBtn");
        $("#playAgainBtn").text("FIGHT & WIN");
        $("#playAgainBtn").addClass("playAgainBtn");
    }
}

function restartGame(){
    $("#playAgainBtn").click(function(){
        endGameDiv.style.display = "none";
        uScore.innerHTML = ubScore = 0;
        tScore.innerHTML = tbScore = 0;
        fScore.innerHTML = fbScore = 0;
        $(".gest").addClass("button");
        $(".weaponInfo").css("opacity", "1");
        $("header").removeClass("fadeHalf");
        $("main").removeClass("fadeHalf");
        userGest = "";
        thorGest = "";
        freyGest = "";
        $("main").css({"opacity": "1", "animation-delay": "0"});
        $("#introTxt1").css({"opacity": "1", "animation-delay": "0"});
        $("#introTxt2").css({"opacity": "1", "animation-delay": "0"});
        $("#introTxt3a").css({"opacity": "1", "animation-delay": "0"});
        $("#introTxt3b").css({"opacity": "1", "animation-delay": "0"});
        $("#introTxt4").css({"opacity": "1", "animation-delay": "0"});
        roundOutcomeMSG.innerHTML = ""
        $("#uChosenGestImg").attr("src", "");
        $("#tChosenGestImg").attr("src", "");
        $("#fChosenGestImg").attr("src", "");
        $(".chosen").addClass("circle");
        chooserU.innerHTML = "You";
        chooserT.innerHTML = "Thor";
        chooserF.innerHTML = "Frey";
        
        gameOn = true;
        outsiderT = false;
        outsiderF = false;
        $("#fChosenGest").css("display", "");
        $("#tChosenGest").css("display", "");
        $("#uChosenGest").css({"bottom": "8px", "left": "60px"});
        $("#fChosenGest").css({"bottom": "8px", "right": "60px"});
        $("#tChosenGest").css({"bottom": "202.5", "right": "148px"});
        $("#uChosenGest").css({"transform": "rotateZ(0deg)"});
        $("#tChosenGest").css({"transform": "rotateZ(0deg)"});
        $("#fChosenGest").css({"transform": "rotateZ(0deg)"});

        $("#fScBoard").css({"color": "white"});
        $("#fScore").css({"text-shadow": "0 0 10px cyan", "color": "white"});
        $("#tScBoard").css({"color": "white"});
        $("#tScore").css({"text-shadow": "0 0 10px cyan", "color": "white"});
        numRounds = 5;
    });
}

// RESULT FIELD FUNCTIONS ENDS HERE
// .....................................