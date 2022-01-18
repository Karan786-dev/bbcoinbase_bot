/*CMD
  command: /broadcast
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: _Enter your Message_
  keyboard: 
  aliases: 
CMD*/

if (user.telegramid == 1109004518 | user.telegramid == 1109004518){
let msg = "💌 Admin Message : \n\n" + data.message
Bot.sendMessageToAllPrivateChats(msg)
Bot.sendMessage("✅Message sent to all active members")
}else{
Bot.sendMessage("Not admin")
}
