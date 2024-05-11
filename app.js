let words = ["Alms","Annoy","Also","Aim" ,"Approve","Boy","Belt" ,"Bird" ,"Bloom" ,"Belly",
"Clean", "Come","Cold" ,"City","Close","Dam","Deep","Dear" ,"Dig" ,"Dust","East","Eagle","Entry"
,"Eager","Edify","Fund","Feast","Flies" ,"Foam","Flower","Game","Gap","Gate" ,"Ghost","Gift",
"He","Hide","Hope" ,"Head","Hill","Iceberg","Idol","Injection" ,"Ivory","Iron","Jar","Jam",	"Jet",
"Jaw","Jug","Key", "Kite", "Kitten", "Kit", "Kin","Lamp","Log","Lap" ,"Lab"	,"Love","Money","Melt"	
,"My","Made","Mirror","Nail", "Nation", "Nature", "Nacho","Nap","Of","Once","Oven","Off","One",
"Pan","Pant","Paint"," Pet","Petrol","Qualify", "Quality"," Qualm"," Quarrel", "Queen","Rat",
" Rail", "Rabbit","Rest","Ring","Sleep","Slow","Soup", "Smile","Smell","tank", "torn", "timber",
"to", "teacher", "tasty","Unicorn","Use","Upset","Ugly","Upon","Vacuum","Vibrant","Vocal"
, "Vegetable","Victor","Way", "Wall"," Word","Wolf", "Waves",'xenial', "xenon", "xebecs", "xylophone",
 "Xavier","Yell","Yellow","Yelp","Yes","Yoga","Zest", "ZAP", "Zapper", "Zip", "Zone"
]
let displayWord = document.getElementById("dis-element")
function getWord(word){
    let random = Math.floor(Math.random()*words.length)
    let genWord = words[random]
    for(var i =0; i < words.length; i++){
        if(word == genWord[0].toLowerCase()){
            displayWord.innerHTML = genWord;
            break
        }else{
         random = Math.floor(Math.random()*words.length)
           genWord = words[random]
        }
    }
}
