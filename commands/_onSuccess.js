/*CMD
  command: /onSuccess
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var result = options.result.data

var amountsent = result.amount.amount.slice(1,500)

var email = result.to.email

Bot.sendInlineKeyboard([{title: "View Transaction", url: "@TXTPayouts" }],"šø *Payment Successfully Send. Check Your Coinbase.*\n\n*Amount :*"+amountsent+" *LTC*\n*Email :*"+email);

var tex = "ā *New* *Withdrawal* *Send*\n\āļø*Status*: *Paid\nš£ *User* : @" +user.username+ "\nš *Coinbase* *Email*: "+email+"\nšµ *Amount* : " +amountsent+ " *LTC*\nš¤ *Bot* *Link*: @" +
          bot.name +
          "*";

Api.sendMessage({chat_id:"@TXTPayouts",text:(""+tex+""),parse_mode:"markdown"})
