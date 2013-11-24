<!doctype html>
<html lang="en">
<head>    
	<title>JavaScript Patterns</title>    
	<meta charset="utf-8">
</head>
<body>
	<div id="results"></div>
	<script type="text/javascript">
		function Player(name){
			this.name=name;
			this.points=0;
		}
		Player.prototype.play=function(){
			this.points+=1;
			mediator.played();
		};

		var scoreboard={
			element:document.getElementById('results'),
			update:function(score){
				var i,msg='';
				for(i in score){
					if(score.hasOwnProperty(i)){
						msg += '<p><strong>' + i + '<\/strong>: ';
						msg += score[i]; 
						msg += '<\/p>';
					}
				}
				this.element.innerHTML=msg;
			}
		};

		var mediator={
			players:{},
			setup:function(){
				var players=this.players;
				players.home=new Player('Home');
				players.guest=new Player('Guest');
			},
			played:function(){
				var players=this.players,
					score={
						Home:players.home.points,
						Guest:players.guest.points
					};
				scoreboard.update(score);
			},
			keypress:function(e){
				e=e||window.event;//IE
				if(e.which===49){
					mediator.players.home.play();
					return;
				}
				if(e.which===48){
					mediator.players.guest.play();
					return;
				}
			}
		};

		mediator.setup();
		window.onkeypress=mediator.keypress;
		setTimeout(function(){
			window.onkeypress=null;
			console.log('Game over!');
		},30000);
		
	</script>
</body>
</html>