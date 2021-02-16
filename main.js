var who = ['The dog','My grandma','His turtle','My bird'];
var action = ['ate','peed','crushed','broke'];
var what = ['my homework', 'the keys', 'the car'];
var when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];
document.getElementById('excuseGenerate').addEventListener('click', alerta);

function generate(){
    let numWho = Math.floor(Math.random()*(4));
    let numAction = Math.floor(Math.random()*(4));
    let numWhat = Math.floor(Math.random()*(3));
    let numWhen = Math.floor(Math.random()*(5));
    document.getElementById('excuseText').style = 'display:block'
    document.getElementById('excuseText').innerHTML=`${who[numWho]} ${action[numAction]} ${what[numWhat]} ${when[numWhen]}`
}
function alerta(){
    document.getElementById('excuseGenerate').style='box-shadow: 4px 4px 0 0 rgba(0, 0, 0, 0.3);'
    setTimeout(()=>{
document.getElementById('excuseGenerate').style='box-shadow: none'
    },200)
}