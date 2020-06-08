var i = 0;
var y = 0;
var z = 0;
var w = 0;
var txt = ' ... ';
var txt2 = 'well... what are you waiting for?';
var speed = 700;
var speed2 = 40;
var count = 0;
var clicked = false;
var first = 'MALACHYDONOVAN.COM';
var namespace = ' ';
var last = 'DONOVAN';
var speed3 = 10;
var nomoresurprises = false;
var welcomed = false;
var a = 0;
var hello = 'welcome to';
var boomemoji = "💥";
var counter = 0;
var twitter_bird = "🐦";

function mainName (){
  if (z < first.length) {
    document.getElementById("clicktime").innerHTML += first.charAt(z);
    z++;
    setTimeout(mainName, speed3);
  }
  welcomeTo();
}
function welcomeTo(){
  if (a < hello.length) {
    document.getElementById("welcome").innerHTML += hello.charAt(a);
    a++;
    setTimeout(welcomeTo, 100000);
  }
  welcomed = true;
  boom();
}

function boom(){
  document.getElementById("emoji").innerHTML = boomemoji;
}

document.addEventListener("click",
function clickEffectDots()
{
    clicked = true
/*  if (welcomed == false){
    welcomeTo();
  }*/
});

function clearTextTwo(){
  var full_del2 = txt2.replace('well... what are you waiting for?','');
  document.getElementById("demo").innerHTML = full_del2;
  mainName();
}

function clearText(){
  if (count < 1 && clicked == false) {
  var del = txt.replace('...','');
  document.getElementById("demo").innerHTML = del;
  i = 0;
dotFunction();
count++;
  }
  else if (count >= 1 && clicked == false) {
    del = txt.replace('...','');
    document.getElementById("demo").innerHTML = del;
    dotFunctionTwo();
  }
  else if (clicked == true){
    del = txt.replace('...','');
    document.getElementById("demo").innerHTML = del;
    mainName();
  }
}

function dotFunction() {
  if (i < txt.length && clicked == false) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(dotFunction, speed);
  }
  else {
    clearText();
  }
}

function dotFunctionTwo() {
  if (i < txt2.length && clicked == false) {
    document.getElementById("demo").innerHTML += txt2.charAt(y);
    y++;
    setTimeout(dotFunctionTwo, speed2);
  }
  else if (clicked == true) {
    clearTextTwo()
  }
}

let anagrams = ["Coachman Nova Moldy", "Cancan Moldova Homy", "Vacancy Almond Homo", "Dacha Nova Commonly", "Malady Havoc Noncom", "Vandal Coca Homonym", "Vandal Hammy Cocoon", "Madam Anchovy Colon", "Madman Anchovy Loco", "Madman Anchovy Cool", "Madman Havoc Colony", "Chancy Moldova Oman", "Chancy Moldova Moan", "Command Halcyon Ova", "Command Volcano Hay", "Commando Anchovy La", "Coda Nonvocal Hammy", "Mach Volcano Monday", "Mach Volcano Dynamo", "Mach Canyon Moldova", "Chammy Nonvocal Ado", "Chammy Volcano Dona", "Mocha Canny Moldova", "Macho Canny Moldova", "Anchovy Comma Nodal", "Anchovy Coma Almond", "Achy Conman Moldova", "Volcano Comma Handy", "A Madman Loch Convoy", "A Chad Nova Commonly", "A Command Anchovy Lo", "A Command Havoc Only", "A Commando Navy Loch", "A Commando Ova Lynch", "A Mach Almond Convoy", "A Chammy Nonvocal Do", "A Chammy Volcano Nod", "A Chammy Volcano Don", "A Anchovy Lad Common", "A Havoc Conman Moldy", "A Havoc Madly Noncom", "A Havoc And Commonly", "A Nonvocal Hammy Cod", "A Nonvocal Hammy Doc", "A Vocal Handy Common", "A Moldova Many Conch", "A Moldova Myna Conch", "Canada Convoy Hmm Lo", "Advocacy La Hmm Noon", "Advocacy Loan Hmm On", "Advocacy Loan Hmm No", "Advocacy An Hmm Loon", "Advocacy Anon Hmm Lo", "Coachman Oval Nod My", "Coachman Oval Don My", "Coachman Nova Old My", "Coachman Van Mold Yo", "Coachman Navy Old Om", "Coachman Navy Mod Lo", "Cloaca Nova Mod Hymn", "Cloaca Van Mood Hymn", "Cloaca Van Doom Hymn", "Cancan Moldova Oh My", "Cancan Moldova Ho My", "Cancan Oval Mod Homy", "Cancan Ova Mold Homy", "Cancan Ova Moldy Ohm", "Vacancy Had Loon Mom", "Vacancy Hand Loom Om", "Vacancy Lad Ohm Mono", "Vacancy Lad Ohm Moon", "Vacancy Almond Oh Om", "Vacancy Almond Ho Om", "Vacancy Modal Ohm On", "Vacancy Modal Ohm No", "Vacancy Modal Hon Om", "Vacancy Land Ohm Moo", "Vacancy Land Homo Om", "Vacancy Land Oho Mom", "Vacancy Land Ooh Mom", "Vacancy Nodal Ohm Om", "Vacancy Nodal Oh Mom", "Vacancy Nodal Ho Mom", "Vacancy Load Hon Mom", "Vacancy Mad Ohm Loon", "Vacancy Mad Hon Loom", "Vacancy Dam Ohm Loon", "Vacancy Dam Hon Loom", "Vacancy Damn Homo Lo", "Vacancy Damn Oh Loom", "Vacancy Damn Ho Loom", "Vacancy Nomad Ohm Lo", "Vacancy And Ohm Loom", "Vacancy Ado Hmm Loon", "Vacancy Ha Mold Mono", "Vacancy Ha Mold Moon", "Vacancy Ah Mold Mono", "Vacancy Ah Mold Moon", "Vacancy Halo Nod Mom", "Vacancy Halo Don Mom", "Vacancy Ham Old Mono", "Vacancy Ham Old Moon", "Vacancy Ham Mod Loon", "Vacancy Ham Nod Loom", "Vacancy Ham Don Loom", "Vacancy Lam Hod Mono", "Vacancy Lam Hod Moon", "Vacancy Lam Doh Mono", "Vacancy Lam Doh Moon", "Vacancy Lam Mood Hon", "Vacancy Lam Doom Hon", "Vacancy Lam Nod Homo", "Vacancy Lam Don Homo", "Vacancy Loam Mod Hon", "Vacancy Loam Nod Ohm", "Vacancy Loam Don Ohm", "Vacancy Loan Hod Mom", "Vacancy Loan Doh Mom", "Vacancy Loan Mod Ohm", "Vacancy Ma Hold Mono", "Vacancy Ma Hold Moon", "Vacancy Am Hold Mono", "Vacancy Am Hold Moon", "Vacancy Ammo Hold On", "Vacancy Ammo Hold No", "Vacancy Ammo Old Hon", "Vacancy Man Hold Moo", "Vacancy Man Hod Loom", "Vacancy Man Doh Loom", "Vacancy Man Mold Oho", "Vacancy Man Mold Ooh", "Vacancy Man Old Homo", "Vacancy Oman Hold Om", "Vacancy Oman Mold Oh", "Vacancy Oman Mold Ho", "Vacancy Oman Old Ohm", "Vacancy Moan Hold Om", "Vacancy Moan Mold Oh", "Vacancy Moan Mold Ho", "Vacancy Moan Old Ohm", "Vacancy An Mold Homo", "Cacao Nova Mold Hymn", "Dacha Nonvocal Om My", "Dacha Oval Noncom My", "Dacha Van Colony Mom", "Dacha Navy Colon Mom", "Dacha Navy Common Lo", "Avocado Clam Hymn On", "Avocado Clam Hymn No", "Avocado Calm Hymn On", "Avocado Calm Hymn No", "Avocado Clan Hmm Yon", "Avocado Clan Hymn Om", "Avocado Can Hmm Only", "Avocado Canny Hmm Lo", "Avocado Lam Con Hymn", "Avocado Man Lynch Om", "Avocado An Lynch Mom", "Canal Anchovy Mod Om", "Canal Anchovy Do Mom", "Canal Had Convoy Mom", "Canal Mad Convoy Ohm", "Canal Dam Convoy Ohm", "Canal Ado Convoy Hmm", "Canal Ham Convoy Mod", "Canal Navy Mooch Mod", "Canola Ad Convoy Hmm", "Cayman Havoc Mold On", "Cayman Havoc Mold No", "Cayman Vocal Mod Hon", "Cayman Vocal Nod Ohm", "Cayman Vocal Don Ohm", "Cayman Nova Clod Ohm", "Cayman Nova Cold Ohm", "Cayman Nova Loch Mod", "Cayman Van Clod Homo", "Cayman Van Cold Homo", "Cayman Van Loch Mood", "Cayman Van Loch Doom", "Cayman Van Mooch Old", "Cayman Van Coho Mold", "Malady Nova Conch Om", "Malady Van Conch Moo", "Malady Van Mooch Con", "Vandal Chancy Om Moo", "Vandal Coach Mom Yon", "Vandal Coach Mono My", "Vandal Coach Moon My", "Vandal Coca Hymn Moo", "Vandal Cocoa Hmm Yon", "Vandal Cocoa Hymn Om", "Vandal Mach Cony Moo", "Vandal Mach Coy Mono", "Vandal Mach Coy Moon", "Vandal Chammy Coo On", "Vandal Chammy Coo No", "Vandal Mocha Coon My", "Vandal Mocha Cony Om", "Vandal Macho Coon My", "Vandal Macho Cony Om", "Vandal Nacho Coy Mom", "Vandal Achy Coon Mom", "Vandal Mac Mooch Yon", "Vandal Mac Coon Homy", "Vandal Mac Cony Homo", "Vandal Cam Mooch Yon", "Vandal Cam Coon Homy", "Vandal Cam Cony Homo", "Vandal Comma Cony Oh", "Vandal Comma Cony Ho", "Vandal Comma Coy Hon", "Vandal Coma Con Homy", "Vandal Coma Cony Ohm", "Vandal Coma Coo Hymn", "Vandal Cyan Mooch Om", "Vandal Cyan Coho Mom", "Vandal Cay Common Oh", "Vandal Cay Common Ho", "Vandal Ha Common Coy", "Vandal Ah Common Coy", "Vandal Ham Cocoon My", "Vandal Hammy Coco On", "Vandal Hammy Coco No", "Vandal Hammy Con Coo", "Vandal Mynah Coco Om", "Vandal Ma Mooch Cony", "Vandal Am Mooch Cony", "Vandal Ammo Conch Yo", "Vandal Man Coco Homy", "Vandal Man Mooch Coy", "Vandal Many Coco Ohm", "Vandal Myna Coco Ohm", "Vandal Mayo Conch Om", "Vandal May Conch Moo", "Vandal May Mooch Con", "Vandal Yam Conch Moo", "Vandal Yam Mooch Con", "Vandal Ay Cocoon Hmm", "Vandal Ya Cocoon Hmm", "Madam Anchovy Con Lo", "Madam Havoc Con Only", "Madam Lac Convoy Hon", "Madam Clan Convoy Oh", "Madam Clan Convoy Ho", "Madam Vocal Cony Hon", "Madam Oval Conch Yon", "Madam An Loch Convoy", "Madam Nova Lynch Coo", "Madam Nova Loch Cony", "Madam Navy Loch Coon", "Madam Ova Conch Only", "Madam Ova Lynch Coon", "Madman Havoc Cloy On", "Madman Havoc Cloy No", "Madman Havoc Cony Lo", "Madman Lac Convoy Oh", "Madman Lac Convoy Ho", "Madman Vocal Cony Oh", "Madman Vocal Cony Ho", "Madman Vocal Coy Hon", "Madman Oval Conch Yo", "Madman Nova Loch Coy", "Madman Van Coco Holy", "Madman Van Coho Cloy", "Madman Navy Loch Coo", "Madman Ova Lynch Coo", "Madman Ova Loch Cony", "Adman Mach Convoy Lo", "Adman Havoc Colon My", "Adman Lac Convoy Ohm", "Adman Clam Convoy Oh", "Adman Clam Convoy Ho", "Adman Calm Convoy Oh", "Adman Calm Convoy Ho", "Adman Vocal Con Homy", "Adman Vocal Cony Ohm", "Adman Vocal Coo Hymn", "Adman Oval Coco Hymn", "Adman Ma Loch Convoy", "Adman Am Loch Convoy", "Adman Van Mooch Cloy", "Aha Van Cod Commonly", "Aha Van Doc Commonly", "Aha Navy Clod Common", "Aha Navy Cold Common", "Ayah Van Clod Common", "Ayah Van Cold Common", "Lama Mach Convoy Nod", "Lama Mach Convoy Don", "Lama Anchovy Con Mod", "Lama Van Conch Moody", "Lama Navy Conch Mood", "Lama Navy Conch Doom", "Layman Havoc Con Mod", "Layman Van Cod Mooch", "Layman Van Doc Mooch", "Layman Ova Conch Mod", "Naval Chancy Mod Moo", "Naval Chancy Mood Om", "Naval Chancy Doom Om", "Naval Coca Mood Hymn", "Naval Coca Doom Hymn", "Naval Cocoa Mod Hymn", "Naval Chad Common Yo", "Naval Command Coy Oh", "Naval Command Coy Ho", "Naval Candy Mooch Om", "Naval Candy Coho Mom", "Naval Mach Con Moody", "Naval Mach Cony Mood", "Naval Mach Cony Doom", "Naval Chammy Coon Do", "Naval Chammy Coo Nod", "Naval Chammy Coo Don", "Naval Mocha Condo My", "Naval Mocha Cony Mod", "Naval Macho Condo My", "Naval Macho Cony Mod", "Naval Achy Condo Mom", "Naval Achy Common Do", "Naval Mac Condo Homy", "Naval Cam Condo Homy", "Naval Comma Cony Hod", "Naval Comma Cony Doh", "Naval Cyan Mooch Mod", "Naval Cay Common Hod", "Naval Cay Common Doh", "Naval Had Common Coy", "Naval Handy Coco Mom", "Naval Mad Mooch Cony", "Naval Dam Mooch Cony", "Naval Damn Coco Homy", "Naval Damn Mooch Coy", "Naval Day Cocoon Hmm", "Naval Hammy Coco Nod", "Naval Hammy Coco Don", "Naval Hammy Cod Coon", "Naval Hammy Doc Coon", "Naval Mynah Coco Mod", "Naval Hay Cod Common", "Naval Hay Doc Common", "Naval Ma Conch Moody", "Naval Am Conch Moody", "Naval Many Cod Mooch", "Naval Many Doc Mooch", "Naval Myna Cod Mooch", "Naval Myna Doc Mooch", "Naval Mayo Conch Mod", "Naval May Conch Mood", "Naval May Conch Doom", "Naval Yam Conch Mood", "Naval Yam Conch Doom", "Lava Chancy Mod Mono", "Lava Chancy Mod Moon", "Lava Cad Noncom Homy", "Lava Cad Con Homonym", "Lava Chad Common Yon", "Lava Command Cony Oh", "Lava Command Cony Ho", "Lava Command Coy Hon", "Lava Candy Common Oh", "Lava Candy Common Ho", "Lava Mach Con Monody", "Lava Chammy Condo On", "Lava Chammy Condo No", "Lava Chammy Cod Noon", "Lava Chammy Doc Noon", "Lava Chammy Coon Nod", "Lava Chammy Coon Don", "Lava Achy Common Nod", "Lava Achy Common Don", "Lava Achy Noncom Mod", "Lava Conman Cod Homy", "Lava Conman Doc Homy", "Lava Monaco Cod Hymn", "Lava Monaco Doc Hymn", "Lava Coma Condo Hymn", "Lava Can Cod Homonym", "Lava Can Doc Homonym", "Lava Canny Mooch Mod", "Lava Cyan Common Hod", "Lava Cyan Common Doh", "Lava Had Common Cony", "Lava Hand Common Coy", "Lava Mad Cocoon Hymn", "Lava Dam Cocoon Hymn", "Lava Damn Mooch Cony", "Lava Nomad Coco Hymn", "Lava Monday Conch Om", "Lava Dynamo Conch Om", "Lava Hammy Condo Con", "Lava Ma Conch Monody", "Lava Am Conch Monody", "Lava Man Conch Moody", "Lava Many Conch Mood", "Lava Many Conch Doom", "Lava Myna Conch Mood", "Lava Myna Conch Doom", "Mama Clad Convoy Hon", "Mama Anchovy Clod On", "Mama Anchovy Clod No", "Mama Anchovy Cold On", "Mama Anchovy Cold No", "Mama Anchovy Con Old", "Mama Havoc Cod Nylon", "Mama Havoc Doc Nylon", "Mama Clan Convoy Hod", "Mama Clan Convoy Doh", "Mama Can Convoy Hold", "Mama And Loch Convoy", "Mama Navy Condo Loch", "Mama Ova Condo Lynch", "Manna Havoc Cloy Mod", "Manna Havoc Coy Mold", "Manna Vocal Cod Homy", "Manna Vocal Doc Homy", "Chancy Almond Ova Om", "Chancy Modal Nova Om", "Chancy Modal Van Moo", "Chancy Moldova Ma On", "Chancy Moldova Ma No", "Chancy Moldova Am On", "Chancy Moldova Am No", "Chancy Moldova An Om", "Chancy Nodal Ova Mom", "Chancy Load Nova Mom", "Chancy Mad Oval Mono", "Chancy Mad Oval Moon", "Chancy Mad Nova Loom", "Chancy Dam Oval Mono", "Chancy Dam Oval Moon", "Chancy Dam Nova Loom", "Chancy Damn Oval Moo", "Chancy Damn Ova Loom", "Chancy Nomad Oval Om", "Chancy Dona Oval Mom", "Chancy Lam Nova Mood", "Chancy Lam Nova Doom", "Chancy Loam Nova Mod", "Chancy Loam Van Mood", "Chancy Loam Van Doom", "Chancy Oval Ammo Nod", "Chancy Oval Ammo Don", "Chancy Oval Man Mood", "Chancy Oval Man Doom", "Chancy Oval Oman Mod", "Chancy Oval Moan Mod", "Chancy Ammo Nova Old", "Chancy Oman Ova Mold", "Chancy Moan Ova Mold", "Coach Almond Nova My", "Coach Almond Navy Om", "Coach Madly Van Mono", "Coach Madly Van Moon", "Coach Nodal Navy Mom", "Coach Damn Navy Loom", "Coach Lam Van Monody", "Coach Manly Nova Mod", "Coach Manly Van Mood", "Coach Manly Van Doom", "Coach Man Nova Moldy", "Coach Oman Van Moldy", "Coach Oman Navy Mold", "Coach Moan Van Moldy", "Coach Moan Navy Mold", "Coach Many Nova Mold", "Coach Myna Nova Mold", "Coca Lad Van Homonym", "Coca Almond Van Homy", "Coca Almond Navy Ohm", "Coca Almond Ova Hymn", "Coca Modal Nova Hymn", "Coca Moldova An Hymn", "Coca Nomad Oval Hymn", "Coca Hymnal Nova Mod", "Coca Hymnal Van Mood", "Coca Hymnal Van Doom", "Coca Mynah Nova Mold", "Cocoa Modal Van Hymn"];

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  //While there remain elements to shuffle...
  while (0 != currentIndex) {
    //Pick a remaining element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function clearName(){
if (counter < 5){
  w = 0;
  var full_del3 = first.replace(first,'');
  document.getElementById("clicktime").innerHTML = full_del3;
  if (counter == 0){
  document.getElementById("counting").innerHTML = "1/5";
  }
  if (counter == 1){
  document.getElementById("counting").innerHTML = "2/5";
  }
  if (counter == 2){
  document.getElementById("counting").innerHTML = "3/5";
  }
  if (counter == 3){
  document.getElementById("counting").innerHTML = "4/5";
  }
  if (counter == 4){
  document.getElementById("counting").innerHTML = "5/5";
  }

  shuffle(anagrams);
  realAnagramTime();

}
else {
  twitter();
}
counter++;
}

function twitter(){
  var full_del3 = first.replace(first,'');
  document.getElementById("emoji").innerHTML = full_del3;
  document.getElementById("clicktime").innerHTML = full_del3;
  document.getElementById("welcome").innerHTML = full_del3;
  var full_del4 = first.replace(first,'');
  document.getElementById("clicktime").innerHTML = "Those were a few anagrams.. nice. Here's my twitter.";
  document.getElementById("emoji").innerHTML = twitter_bird;
}

function realAnagramTime() {
first = anagrams[0];
  if (w < first.length) {
    document.getElementById("clicktime").innerHTML += first.charAt(w);
    w++;
    setTimeout(realAnagramTime, 30);
  }
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColor() {
  $("#a").css("color", getRandomColor());
}

/*function clearAnagram() {
  var delAnagram = first.replace(anagrams[0],'');
  document.getElementById("demo").innerHTML = delAnagram;
  realAnagramTime();
  w = 0;
}*/
