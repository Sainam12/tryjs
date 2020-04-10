//Age_in_days Calculator

function Age_Calc()
{
	var birthyear = prompt("Enter birth year");
	var age_in_days = (2018 - birthyear)*365;
	var h1 = document.createElement('h1');
	var textAnswer = document.createTextNode('You are '+age_in_days +' days old');
	h1.setAttribute('id','age_in_days');
	h1.appendChild(textAnswer);
	var a =document.getElementById('flex-box-result');
	a.appendChild(h1);
}
function Reset1()
{
	document.getElementById('age_in_days').remove();
}


//Jin Generator

var div = document.getElementById('image');
function Generate_Jin()
{
	var image = document.createElement('img');
	var div = document.getElementById('image');
	image.setAttribute('id','photo');
	image.src = "Jin.jpg";
	div.appendChild(image);
}
function Delete()
{	
	document.getElementById('photo').remove();
}
function Reset2()
{
	document.getElementById('image').remove();
}



//Rock Paper Scissor

	var p_points=0;
	var cpu_points=0;

function Start()
{

	//Remove Start Btn
	document.getElementById('Start').remove();

	//Getting Parent Elements
	var con = document.getElementById('container');
	var div_main = document.getElementById('main');

	//Add Reset Btn
	var reset = document.createTextNode('Reset');
	var btn = document.createElement('button');
	btn.setAttribute('class','btn btn-danger');
	btn.setAttribute('id','Reset');
	btn.setAttribute('onclick','Reset3()');
	div_main.appendChild(btn);
	btn.appendChild(reset);


	//Add Game
	var div_game =document.createElement('div');
	div_game.setAttribute('class','flex-box-container-1');
	div_game.setAttribute('id','game');
	con.appendChild(div_game);


	//Add Title
	var title = document.createElement('div');
	title.setAttribute('class','flex-box-container-1');
	title.setAttribute('id','P/Cpu');
	var u_head = document.createTextNode('User');
	var c_head = document.createTextNode('Computer');
	var p1 = document.createElement('p');
	p1.setAttribute('id','title');
	var p2 = document.createElement('p');
	p2.setAttribute('id','title');
	p1.appendChild(u_head);
	title.appendChild(p1);
	p2.appendChild(c_head);
	title.appendChild(p2);
	con.appendChild(title)


	//Add Result
	var div_result =document.createElement('div');
	var div_result_temp = document.createElement('div');
	div_result.setAttribute('id','result');
	div_result.setAttribute('class','flex-box-container-1');
	div_result_temp.setAttribute('id','result_temp');
	div_result_temp.setAttribute('class','flex-box-container-1');
	div_result.appendChild(div_result_temp);
	con.appendChild(div_result);

	//Add To Game Page
		//Getting Parent Elements
		var div = document.getElementById('game');

		//Add Rock Images
		var rock = document.createElement('img');
		rock.setAttribute('onclick','Result(this)');
		rock.setAttribute('src','Rock.jpg');
		rock.setAttribute('id','rock');
		div.appendChild(rock);

		//Add Paper Imagesvar 
		var paper = document.createElement('img');
		paper.setAttribute('onclick','Result(this)');
		paper.setAttribute('src','Paper.jpg');
		paper.setAttribute('id','paper');
		div.appendChild(paper);

		//Add Scissor Images
		var sci = document.createElement('img');
		sci.setAttribute('onclick','Result(this)');
		sci.setAttribute('src','Scissor.jpg');
		sci.setAttribute('id','sci');
		div.appendChild(sci);

	//Create Score Section
	var score = document.createElement('div');
	var score_temp = document.createElement('div');
	score.setAttribute('id','score');
	score_temp.setAttribute('id','score_temp');
	score.appendChild(score_temp);
	con.appendChild(score);
}
function Reset3()
{
	p_points=0;
	cpu_points=0;
	//Remove unnecessary content
	document.getElementById('score').remove();
	document.getElementById('P/Cpu').remove();
	document.getElementById('Reset').remove();
	document.getElementById('game').remove();
	document.getElementById('result').remove();


	//Getting Parent Elements
	var div = document.getElementById('main');

	//Add Start Btn
	var btn = document.createElement('button');
	var start = document.createTextNode('Start');
	btn.setAttribute('class','btn btn-primary');
	btn.setAttribute('onclick','Start()');
	btn.setAttribute('id','Start');
	div.appendChild(btn);
	btn.appendChild(start);
}
function Result(img)
{
	document.getElementById('score_temp').remove();
	document.getElementById('result_temp').remove();

	//Getting parent id
		var main = document.getElementById('container');
		var div = document.getElementById('result');
		var score = document.getElementById('score');

	//Creating temp sections
		var div_result_temp = document.createElement('div');
		div_result_temp.setAttribute('id','result_temp');
		div_result_temp.setAttribute('class','flex-box-container-1');
		div.appendChild(div_result_temp);

		var score_temp = document.createElement('div');
		score_temp.setAttribute('id','score_temp');
		score.appendChild(score_temp);

	//Evaluating Result
	var comp = Math.floor(Math.random()*10000)%3+1;
	var res = eval(img.id,comp);

	//Create Selected choice section
	var img1 = img.src;
	var img2 = fetch_img(comp);
	var user = document.createElement('img');
	user.setAttribute('src',img1);
	user.setAttribute('class','img');
	var computer = document.createElement('img');
	computer.setAttribute('src',img2);
	computer.setAttribute('class','img');
	div_result_temp.appendChild(user);
	div_result_temp.appendChild(computer);

	//Create Final Result
	var div2 = document.createElement('div');
	div2.setAttribute('id','text_result');
	var result = document.createTextNode(res);
	div2.appendChild(result);
	score_temp.appendChild(div2);
}
function fetch_img(val)
{
	if(val==1)
		return "Rock.jpg";
	else if(val==2)
		return "Paper.jpg";
	else
		return "Scissor.jpg";
}
function eval(id,val2)
{
	var val1,res;
	if(id=='rock')
	{
		if(val2==3)
			p_points++;
		else if(val2==2)
			cpu_points++;
	}
	else if(id=='paper')
	{
		if(val2==1)
			p_points++;
		else if(val2==3)
			cpu_points++;
	}
	else
	{
		if(val2==1)
			cpu_points++;
		else if(val2==2)
			p_points++;
	}
	return res=p_points+" : "+cpu_points;
}



//Colorful Buttons
var buttons=document.getElementsByTagName('button');
var copy = [];
for(let i=0;i<buttons.length;i++)
{
	copy[i]=buttons[i].classList[1];
}
function ChangeColor(color)
{
	if(color.value == "red")
		ColorRed();
	else if(color.value == "green")
		ColorGreen();
	else if(color.value == "random")
		ColorRandom();
	else if(color.value == "reset")
		ColorReset(copy);
}
function ColorRed()
{
	for(let i=0;i<buttons.length;i++)
	{
		buttons[i].classList.remove(buttons[i].classList[1]);
		buttons[i].classList.add('btn-danger');
	}
}
function ColorGreen()
{
	for(let i=0;i<buttons.length;i++)
	{
		buttons[i].classList.remove(buttons[i].classList[1]);
		buttons[i].classList.add('btn-success');
	}
}
function ColorReset(copy)
{
	for(let i=0;i<buttons.length;i++)
	{
		buttons[i].classList.remove(buttons[i].classList[1]);
		buttons[i].classList.add(copy[i]);
	}
}
function ColorRandom()
{
	var type=['btn-primary','btn-success','btn-danger','btn-warning'];
	for(let i=0;i<buttons.length;i++)
	{
		let choice = Math.floor(Math.random()*10000)%4;
		buttons[i].classList.remove(buttons[i].classList[1]);
		buttons[i].classList.add(type[choice]);
	}
}