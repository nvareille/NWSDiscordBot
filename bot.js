const Discord = require('discord.js');
const client = new Discord.Client();
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "discord"
});

console.log(process.env);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

function ConnectQuery(q, v)
{
	con.connect(function ()
	{		
		con.query(q, v);
	});
	
}

client.on('message', msg =>
{
	let values =
	[
		[msg.content]
	]
	
	ConnectQuery("INSERT INTO messages (Content) VALUES ?", [values]);
		
	if (msg.content === 'ping')
	{
		msg.reply('pong');
	}
});



client.login(process.env.discord_token);