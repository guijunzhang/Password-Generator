const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"];

const charactersNoNum = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"];

const charactersNoSym = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const charactersNoNumNoSym = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

let msg1 = ""
let msg2 = ""


function newPwd() {
    let pwdLength = document.getElementById("length-txtbox").value
    let isSym = document.getElementById("isSymbol").checked
    let isNum = document.getElementById("isNumber").checked
    msg1 = ""
    msg2 = ""
    if (isSym && isNum) {
        for (let i = 0; i < pwdLength; i++) {
            msg1 += characters[Math.floor(Math.random() * characters.length)]
            msg2 += characters[Math.floor(Math.random() * characters.length)]
        }
    } else if (!isSym && isNum) {
        for (let i = 0; i < pwdLength; i++) {
            msg1 += charactersNoSym[Math.floor(Math.random() * charactersNoSym.length)]
            msg2 += charactersNoSym[Math.floor(Math.random() * charactersNoSym.length)]
        } 
    } else if (isSym && !isNum) {
        for (let i = 0; i < pwdLength; i++) {
            msg1 += charactersNoNum[Math.floor(Math.random() * charactersNoNum.length)]
            msg2 += charactersNoNum[Math.floor(Math.random() * charactersNoNum.length)]
        }
    } else {
        for (let i = 0; i < pwdLength; i++) {
            msg1 += charactersNoNumNoSym[Math.floor(Math.random() * charactersNoNumNoSym.length)]
            msg2 += charactersNoNumNoSym[Math.floor(Math.random() * charactersNoNumNoSym.length)]
        }
    }
}

function generateNewPwd() {
    newPwd()
    document.getElementById("1").innerText = msg1
    document.getElementById("2").innerText = msg2
}

function copy1(msg) {
    var copyText = document.getElementById("1");
    navigator.clipboard.writeText(copyText.textContent)
    alert("Copied pasword 1!")
}

function copy2(msg) {
    var copyText = document.getElementById("2");
    navigator.clipboard.writeText(copyText.textContent)
    alert("Copied password 2!")
}