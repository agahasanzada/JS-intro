// Varibal
let ad = "Aga"
let soyad = "Hasanzada"
let yas = 25
let telebe = true
let telefon = null


console.log("Ad:",ad);
console.log("Soyad",soyad);
console.log("Yas",25);
console.log("Telebe",telebe);
console.log("Telefon",null);

//Function
function salamVer(){
    console.log("Salam Aga!");
}

salamVer();

function cemle(a,b){
    console.log("Cem", a+b);
}

cemle(5,3);

function cemcixvur(c,d,f){
    console.log("Misal", c+d*f);
}

cemcixvur(7,5,9)

//Array
let seherler = ["Milan","Paris","Roma","Basel","Madrid"]

console.log(seherler[2]);

// Object
let sagird = {
    ad: "Murad",
    yas: 25,
    aktiv: true
};

console.log(sagird.ad);

// misal tekrar
console.log(seherler[1]);
salamVer();
cemle(4,8);
cemcixvur(5,8,3);
console.log(sagird.yas);
// misal tekrar

//Functiona dəyər göndərmək

function salam(ad){
    console.log("Salam",ad);
}

salam("Aga")
salam("Ali")

let name = "Nurlan";
let firstname = "David"
let age = 25
let city = ["New York","Los Angles","Lənkəran"]
let student = {name: name,firstname: firstname ,age:age,city: city[1]};

function about(t){
    console.log("Name", t.name);
    console.log("Firstname",t.firstname);
    console.log("Age",t.age)
    console.log("City",t.city);
}

about(student);

// Array elementini dəyişmək

let cityes = ["Baki","Quba","Ismayilli"];

cityes[2]="Lenkeran";

console.log("Deyisen",cityes);