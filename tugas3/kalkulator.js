const tambah = (...a)=>{
    return a[0]+a[1];
}
const kurang = (...a)=>{
    return a[0]-a[1];
}
const kali = (...a)=>{
    return a[0]*a[1];
}
const bagi = (...a)=>{
    return a[0]/a[1];
}
const modulus = (...a)=>{
    return a[0]%a[1];
}
const tambahBT = document.getElementById("tambah");
tambahBT.addEventListener("click", function(){
    let num1 = parseInt(document.getElementById("angka1").value);
    let num2 = parseInt(document.getElementById("angka2").value);
    let result = tambah(num1,num2);
    let hasil = document.getElementById("hasil");
    hasil.setAttribute("value",result);
});
const kurangBT = document.getElementById("kurang");
kurangBT.addEventListener("click", function(){
    let num1 = parseInt(document.getElementById("angka1").value);
    let num2 = parseInt(document.getElementById("angka2").value);
    let result = kurang(num1,num2);
    let hasil = document.getElementById("hasil");
    hasil.setAttribute("value",result);
});
const kaliBT = document.getElementById("kali");
kaliBT.addEventListener("click", function(){
    let num1 = parseInt(document.getElementById("angka1").value);
    let num2 = parseInt(document.getElementById("angka2").value);
    let result = kali(num1,num2);
    let hasil = document.getElementById("hasil");
    hasil.setAttribute("value",result);
});
const bagiBT = document.getElementById("bagi");
bagiBT.addEventListener("click", function(){
    let num1 = parseInt(document.getElementById("angka1").value);
    let num2 = parseInt(document.getElementById("angka2").value);
    let result = bagi(num1,num2);
    let hasil = document.getElementById("hasil");
    hasil.setAttribute("value",result);
});
const modulusBT = document.getElementById("modulus");
modulusBT.addEventListener("click", function(){
    let num1 = parseInt(document.getElementById("angka1").value);
    let num2 = parseInt(document.getElementById("angka2").value);
    let result = modulus(num1,num2);
    let hasil = document.getElementById("hasil");
    hasil.setAttribute("value",result);
});
const clearBT = document.getElementById("clear");
clearBT.addEventListener("click", function(){
    document.getElementById("angka1").value="";
    document.getElementById("angka2").value="";
    let hasil = document.getElementById("hasil");
    hasil.setAttribute("value"," ");
});