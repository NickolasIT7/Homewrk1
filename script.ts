// let a = +(prompt('введите свой возраст') as string)
// if (a > 0 && a < 12) {
// alert ('ребенок') 
// }
// else if (a > 11 && a < 18) {
// alert ('подросток')  
// }
// else if (a > 17 && a < 60) {
// alert ('взрослый')  
// }
// else if (a > 59) {
// alert ('пенсионер')  
// }

// let b = +(prompt('введите число от 0 до 9') as string)
// if (b < 0 || b > 9) {
// alert ('введите число от 0 до 9')  
// }
// else if (b == 0) {
// alert (')')  
// }
// elsе if (b == 1) {
// alert ('!')  
// }
// elsе if (b == 2) {
// alert ('"') 
// }
// elsе if (b == 3) {
// alert ('№')  
// }
// elsе if (b == 4) {
// alert (';')  
// }
// elsе if (b == 5) {
// alert ('%')  
// }
// elsе if (b == 6) {
// alert ('^')  
// }
// elsе if (b == 7) {
// alert ('&')  
// }
// elsе if (b == 8) {
// alert ('*')  
// }
// elsе (b == 9) {
// alert ('(')  
// }

// let b = +(prompt('введите число от 0 до 9') as string)
// switch (b) {
// case 0: 
// alert (')')
// break
// case 1: 
// alert ('!')
// break
// case 2: 
// alert ('@')
// break
// case 3: 
// alert (')')
// break
// case 4: 
// alert ('$')
// break
// case 5: 
// alert ('%')
// break
// case 6: 
// alert ('^')
// break
// case 7: 
// alert ('&')
// break
// case 8: 
// alert ('*')
// break
// case 9: 
// alert ('(')
// break
// default: 
// alert ('введите число от 0 до 9')
// }

// let numb = +(prompt ('введите трехзначное число') as string)
// let numb1 = (numb / 100)
// let numb2 = ((numb / 10) % 10)
// var numb3 = (numb % 10);
// if (numb1 == numb2 || numb1 == numb3|| numb2 == numb3) {
// alert ('есть одинаковые цифры') 
// }
// else {
// alert ('нет одинаковых цифр') 
// }

// let y = +(prompt ("введите год") as string)
// if (y % 4 == 0 && y % 100 !=0 || y % 400 == 0) {
// alert ('високосный')  
// }
// else {
// alert ('невисокосный')  
// }

// let number = +(prompt ('введите пятиразрядное число') as string)
// let number1 = (number/10000);
// let number2 = (number/1000);
// let number3 = (number/10);
// let number4 = (number%10);
// if (number1 == number4  && number2 == number3) {
// alert ('палиндром')  
// } 
// else {
//  alert ('это число не палиндром')
// }

// let money = +(prompt('введите количество USD') as string)
// let v = +(prompt('выберите валюту: введите 1, чтобы перевести в Euro, 2, чтобы перевести в UAN, 3 чтобы перевести в AZN') as string)
// const Eu = (money*0.91)
// const Uan = (money*7)
// const Azn = (money*1.7)
// switch (v) {
// case 1: v = Eu
// break
// case 2: v = Uan 
// break;
// case 3: v = Azn   
// default:
// alert: ('выберите валюту')
// }
// alert (v);

// let sum = +(prompt('введите сумму покупки') as string)
// let sum1 = (sum*0.97)
// let sum2 = (sum*0.95)
// let sum3 = (sum*0.93)
// if (sum > 199 && sum < 301) {
// alert ('скидка 3% ,' +sum1)  
// }
// else if (sum >299 && sum < 501) {
// alert ('скидка 5% ,' +sum2)
// }
// else if (sum >500) {
// alert ('скидка 7% ,'+sum3)  
// }
// else if (sum < 200) {
// alert (sum)  
// }

// let l = +(prompt('введите длину окружности') as string)
// let n = +(prompt('введите периметр квадрата') as string)
// const PI = 3.14
// let d = (l / PI)
// if (n > d || n ==d) {
// alert ('поместится')  
// }
// else {
// alert ('не поместится')
// }

// let london = +(prompt ('какой клуб не из Лондона:1 - Челси, 2 - Тоттенхэм, 3 - Эвертон') as string)
// let lk = +(prompt ('кто выиграл Лигу Конференций в прошлом сезоне: 1 - Севилья, 2 - Рома, 3 - Марсель') as string)
// let italy = +(prompt ('назовите чемпиона Италии прошлого сезона: 1 - Ювентус, 2 - Наполи - 3 Милан') as string)
// let x = 0;
// let y = 2;
// switch (london) {
// case 1: london = x
// break;
// case 2: london = x
// break;
// case 3: london= y
// break;
// }
// switch (lk) {
// case 1: lk = x
// break;
// case 2: lk = y
// break;
// case 3: lk = x
// break;    
// }
// switch (italy) {
// case 1: italy = x
// break;
// case 2: italy= x
// break;
// case 3: italy = y;
// break;    
// }
// alert (london+lk+italy)

// let day = +(prompt ('введите день') as string)
// let month = +(prompt ('введите месяц') as string)
// let year = +(prompt ('введите дату') as string)
// let nextDay = day + 1
// let nextMonth = month
// let nextYear = year
// if (nextDay > 31 || nextDay > 30 && [4, 6, 9, 11].includes(month)) {
//   nextDay = 1
//   nextMonth++
// }
// if (nextMonth > 12) {
//   nextMonth = 1
//   nextYear++
// }
// alert(nextDay)
// alert(nextMonth)
// alert(nextYear)