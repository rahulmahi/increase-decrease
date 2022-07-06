let main_div = document.createElement('div');

let img1 = document.createElement('img');

let btn1 = document.createElement('button');

let btn2 = document.createElement('button');

let br = document.createElement('br');

img1.src = 'love.jpg';
main_div.appendChild(img1);
main_div.appendChild(br);
main_div.appendChild(btn1);
main_div.appendChild(btn2);

btn1.textContent = 'increase';

btn2.textContent = 'decrease';
btn1.style.margin = '50px 50px';


btn1.setAttribute('onclick','butn1()');
btn2.setAttribute('onclick','butn2()');
function butn1()
{
 z = img1.clientWidth;
 img1.style.width = z + 10 +'px';
}
function butn2()
{
 z = img1.clientWidth;
 img1.style.width = z - 10 +'px';
}

document.body.append(main_div);


