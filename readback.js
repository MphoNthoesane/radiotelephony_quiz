alert("Increase your volume!")
let radio = ['Alpha','Bravo','Charlie','Delta','Echo','Foxtrot','Golf','Hotel','India','Juliet','Kilo','Lima','Mike','November','Oscar','Papa','Quebec','Romeo','Sierra','Tango','Uniform','Victor','Whiskey','X ray','Yankee','Zulu']

//First Random word
let a = radio[Math.floor(Math.random()*radio.length)]
let b = radio[Math.floor(Math.random()*radio.length)]
let c = radio[Math.floor(Math.random()*radio.length)]
let d = radio[Math.floor(Math.random()*radio.length)]
let e = radio[Math.floor(Math.random()*radio.length)]
let f = radio[Math.floor(Math.random()*radio.length)]
let g = radio[Math.floor(Math.random()*radio.length)]

let first_word = a + " " + b + " " + c + " " + d + " " + e + " " + f + " "+ g
let correct1 = a[0]+b[0]+c[0]+d[0]+e[0]+f[0]+g[0]

//Second Random word
let h = radio[Math.floor(Math.random()*radio.length)]
let i = radio[Math.floor(Math.random()*radio.length)]
let j = radio[Math.floor(Math.random()*radio.length)]
let k = radio[Math.floor(Math.random()*radio.length)]
let l = radio[Math.floor(Math.random()*radio.length)]
let m = radio[Math.floor(Math.random()*radio.length)]
let n = radio[Math.floor(Math.random()*radio.length)]

let second_word = h + " " + i + " " + j + " " + k + " " + l + " " + m + " " + n 
let correct2 = h[0]+i[0]+j[0]+k[0]+l[0]+m[0]+n[0]
//Third Random word
let o = radio[Math.floor(Math.random()*radio.length)]
let p = radio[Math.floor(Math.random()*radio.length)]
let q = radio[Math.floor(Math.random()*radio.length)]
let r = radio[Math.floor(Math.random()*radio.length)]
let s = radio[Math.floor(Math.random()*radio.length)]
let t = radio[Math.floor(Math.random()*radio.length)]
let u = radio[Math.floor(Math.random()*radio.length)]

let third_word = o + " " + p + " " + q + " " + r + " " + s + " " + t + " " + u
let correct3 = o[0]+p[0]+q[0]+r[0]+s[0]+t[0]+u[0]
//Fourth Random word
let v = radio[Math.floor(Math.random()*radio.length)]
let w = radio[Math.floor(Math.random()*radio.length)]
let x = radio[Math.floor(Math.random()*radio.length)]
let y = radio[Math.floor(Math.random()*radio.length)]
let z = radio[Math.floor(Math.random()*radio.length)]
let aa = radio[Math.floor(Math.random()*radio.length)]
let bb = radio[Math.floor(Math.random()*radio.length)]

let fourth_word = v + " " + w + " " + x + " " + y + " " + z + " " + aa + " " + bb
let correct4 = v[0]+w[0]+x[0]+y[0]+z[0]+aa[0]+bb[0]
//Fifth Random word
let cc = radio[Math.floor(Math.random()*radio.length)]
let dd = radio[Math.floor(Math.random()*radio.length)]
let ee = radio[Math.floor(Math.random()*radio.length)]
let ff = radio[Math.floor(Math.random()*radio.length)]
let gg = radio[Math.floor(Math.random()*radio.length)]
let hh = radio[Math.floor(Math.random()*radio.length)]
let ii = radio[Math.floor(Math.random()*radio.length)]

let fifth_word = cc + " " + dd + " " + ee + " " + ff + " " + gg + " " + hh + " " + ii
let correct5 = cc[0]+dd[0]+ee[0]+ff[0]+gg[0]+hh[0]+ii[0]

let listen1 = document.getElementById("listen1")
document.getElementById("listen1").onclick = function(){
    listen1.style.position = "absolute"
    listen1.style.visibility = "hidden"
}
let listen2 = document.getElementById("listen2")
document.getElementById("listen2").onclick = function(){
    listen2.style.position = "absolute"
    listen2.style.visibility = "hidden"
}
let listen3 = document.getElementById("listen3")
document.getElementById("listen3").onclick = function(){
    listen3.style.position = "absolute"
    listen3.style.visibility = "hidden"
}
let listen4 = document.getElementById("listen4")
document.getElementById("listen4").onclick = function(){
    listen4.style.position = "absolute"
    listen4.style.visibility = "hidden"
}
let listen5 = document.getElementById("listen5")
document.getElementById("listen5").onclick = function(){
    listen5.style.position = "absolute"
    listen5.style.visibility = "hidden"
}


let button1 = document.getElementById("listen1")
let text1 = first_word;
button1.addEventListener("click",()=>{
    setTimeout(timer,2000)
    function timer(){
        let utterance = new
    SpeechSynthesisUtterance(first_word);
    speechSynthesis.speak(utterance);
    }

    

});
let button2 = document.getElementById("listen2")
let text2 = second_word;
button2.addEventListener("click",()=>{
    setTimeout(timer,2000)
    function timer(){
    let utterance = new
        SpeechSynthesisUtterance(second_word);
        speechSynthesis.speak(utterance);
    }

});
let button3 = document.getElementById("listen3")
let text3 = third_word;
button3.addEventListener("click",()=>{
    setTimeout(timer,2000)
    function timer(){
        let utterance = new
    SpeechSynthesisUtterance(third_word);
    speechSynthesis.speak(utterance);
    }

});
let button4 = document.getElementById("listen4")
let text4 = fourth_word;
button4.addEventListener("click",()=>{
    setTimeout(timer,2000)
    function timer(){
        let utterance = new
    SpeechSynthesisUtterance(fourth_word);
    speechSynthesis.speak(utterance);
    }
});
let button5 = document.getElementById("listen5")
let text5 = fifth_word;
button5.addEventListener("click",()=>{
    setTimeout(timer,2000)
    function timer(){
        let utterance = new
    SpeechSynthesisUtterance(fifth_word);
    speechSynthesis.speak(utterance);
    }

});
let mark1 = document.getElementById("mark1")
let mark2 = document.getElementById("mark2")
let mark3 = document.getElementById("mark3")
let mark4 = document.getElementById("mark4")
let mark5 = document.getElementById("mark5")

let answer1 = document.getElementById("answer1").value.toUpperCase()
let answer2 = document.getElementById("answer2").value.toUpperCase()
let answer3 = document.getElementById("answer3").value.toUpperCase()
let answer4 = document.getElementById("answer4").value.toUpperCase()
let answer5 = document.getElementById("answer5").value.toUpperCase()

let check = document.getElementById("check")
document.getElementById("check").onclick = function(){
    let answer1 = document.getElementById("answer1").value.toUpperCase()
    let answer2 = document.getElementById("answer2").value.toUpperCase()
    let answer3 = document.getElementById("answer3").value.toUpperCase()
    let answer4 = document.getElementById("answer4").value.toUpperCase()
    let answer5 = document.getElementById("answer5").value.toUpperCase()

    if(answer1==correct1){
        mark1.innerHTML = "✔️"
    }
    else{
        mark1.innerHTML = "❌"+"The correct is " +correct1
        listen1.style.position = ""
        listen1.style.visibility = "visible"
    }

    if(answer2==correct2){
        mark2.innerHTML = "✔️"
    }
    else{
        mark2.innerHTML = "❌"+"The correct is " +correct2
        listen2.style.position = ""
        listen2.style.visibility = "visible"
    }

    if(answer3==correct3){
        mark3.innerHTML = "✔️"
    }
    else{
        mark3.innerHTML = "❌"+"The correct is " +correct3
        listen3.style.position = ""
        listen3.style.visibility = "visible"
    }

    if(answer4==correct4){
        mark4.innerHTML = "✔️"
    }
    else{
        mark4.innerHTML = "❌"+"The correct is " +correct4
        listen4.style.position = ""
        listen4.style.visibility = "visible"
    }

    if(answer5==correct5){
        mark5.innerHTML = "✔️"
    }
    else{
        mark5.innerHTML = "❌"+"The correct is " +correct5
        listen5.style.position = ""
        listen5.style.visibility = "visible"
    }
    check.style.position = "absolute"
    check.style.visibility = "hidden"
}
