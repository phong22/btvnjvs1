/*bai1*/
let chieuDai = 5;
let chieuRong = 7;
console.log("Bài 1 : Chu vi của hình chữ nhật là " + ((chieuDai+chieuRong)*2) + " cm");


/*bai2*/
let r = 2;
let pi = 3.14159;

console.log("Bài 2 : chu vi của hình tròn là " + (2*pi*r) + " cm");
console.log("        diện tích của hình tròn là " + (r*r*pi) + " cm^2");


/*bai3*/
let n = 40;
console.log("Bài 3 : Tiền điện tháng này là " + (n*1500) + " đồng");


/*bai4*/
let height = 180;
let weight = 80;
console.log("Bài 4 : BMI = " + (weight/(height*height)) + " m^2");


/*bai5*/
let chieuCao = 5;
let canhDaylon = 6;
let canhDayNho = 4;
console.log("Bài 5 : Diện tích hình thang là " + (((canhDayNho + canhDaylon) * chieuCao)/2) + " cm^2");


/*bai6*/
let z = 7;
if(z / 2 === 0){
    console.log("Bài 6 : " + z + " là số chẵn");  
} else{
    console.log("Bài 6 : " + z + " là số lẻ");  
}


/*bai7*/
let a = 3;
let b = 5;
let c = 7;
let max = a;
if(b > max){
    max = b;
}
if(c > max){
    max = c;
}

console.log("Bài 7 : " + max + " là số lớn nhất");


//bai8
let u = 4;
let i = 5;
let o = 6;
if(u === i === o){
    console.log("Bài 8 : 3 số trên có thể tạo thành tam giác đều");   
} else if(u === i || u === o || i === o ){
    console.log("Bài 8 : 3 số trên có thể tạo thành tam giác cân");  
} else if(u*u + i*i === o*o || u*u + o*o === i*i || i*i + o*o === u*u){
    console.log("Bài 8 : 3 số trên có thể tạo thành tam giác vuông");  
} else if(u*u + i*i > o*o || u*u + o*o > i*i || i*i + o*o > u*u){
    console.log("Bài 8 : 3 số trên có thể tạo thành tam giác nhọn");
} else if(u + i > 0 || u + o > i || i + o > u){
    console.log("Bài 8 : 3 số trên có thể tạo thành 1 tam giác");
} else {
    console.log("Bài 8 : 3 số trên không thể tạo thành 1 tam giác");  
}


//bai9

//bai10
let year = 2024
if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
    console.log("Bài 10 : " + year + " là năm nhuận");
} else {
    console.log("Bài 10 : " + year + " không phải là năm nhuận");
}

