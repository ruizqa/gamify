let tigger = {character: 'Tigger'}
let pooh = {character:'Winnie the Pooh'}
let piglet = {character:'Piglet'}
let owl = {character:'Owl'}
let cRobin = {character:'Christopher Robin'}
let rabbit = {character: 'Rabbit'}
let gopher = {character: 'Gopher'}
let bees = {character:'Bees'}
let konga ={character: 'Konga'}
let eeyore = {character:'Eeyore'}
let heffalumps ={character:'Heffalumps'}

let characters = [tigger,pooh,piglet,owl,cRobin,rabbit,gopher,bees,konga,eeyore,heffalumps];

tigger['north'] = pooh
pooh['south'] = tigger
piglet['east']=pooh
pooh['west']=piglet
owl['south']=piglet
piglet['north']=owl
owl['east']=cRobin
cRobin['north']=konga
konga['south']=cRobin
cRobin['east']=rabbit
rabbit['west']=cRobin
cRobin['south']=pooh
pooh['north']=cRobin
bees['west']=pooh
pooh['east']=bees
bees['north']=rabbit
rabbit['south']=bees
rabbit['east']=gopher
gopher['west']=rabbit
cRobin['north']=konga
konga['south']=cRobin
konga['north']=eeyore
eeyore['south']=konga
eeyore['east']=heffalumps
heffalumps['west']=eeyore

tigger.greet = function(){
    console.log("Hey! Welcome home")
}


pooh.greet = function(){
    console.log("Howdy!")
}

piglet.greet = function(){
    console.log("Welcome!!")
}

owl.greet = function(){
    console.log("Good day, my dear")
}

cRobin.greet = function(){
    console.log("What a pleasant surprise!")
}

rabbit.greet = function(){
    console.log("Hello!")
}

gopher.greet = function(){
    console.log("Hi!")
}

bees.greet = function(){
    console.log("Greetings!")
}

konga.greet = function(){
    console.log("Hi-ya!")
}

eeyore.greet = function(){
    console.log("What's up")
}

heffalumps.greet = function(){
    console.log("Shalom")
}

let player={location:tigger, honey:false}


function move(direction){
    if(direction in player.location){
    player.location = player.location[direction]
    console.log(`You are now at ${player.location.character}'s house`);
    player.location.greet();
    }
    else{
        console.log("You may not go that way");
    }

}

function pickUp(){
    if(player.location.character=='Bees'){
        player.honey = true;
        console.log("You've gathered some honey!")
    }
    else{
        console.log("Whoops! There is no honey at this location")
    }
}



function mission(){
    let character = Math.floor(Math.random() * characters.length);
    console.log(`${characters[character].character} is looking for honey! Can you help?`)
    return characters[character];
}


let target = mission();


function drop(){
    if(player.honey = true && player.location == target){
        console.log(`Congratulations! You delivered the honey to ${target.character}!`);
        player.honey = false;
    }
    else if(player.honey = true && player.location != target){
        console.log("Whooops! This isn't the place that needs the honey!")
    }

    else{
        console.log("You don't have any honey");
    }


}