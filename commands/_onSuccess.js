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

Bot.sendInlineKeyboard([{title: "View Transaction", url: "@TXTPayouts" }],"💸 *Payment Successfully Send. Check Your Coinbase.*\n\n*Amount :*"+amountsent+" *LTC*\n*Email :*"+email);

var tex = "✅ *New* *Withdrawal* *Send*\n\❄️*Status*: *Paid\n🗣 *User* : @" +user.username+ "\n🌐 *Coinbase* *Email*: "+email+"\n💵 *Amount* : " +amountsent+ " *LTC*\n🤖 *Bot* *Link*: @" +
          bot.name +
          "*";

Api.sendMessage({chat_id:"@TXTPayouts",text:(""+tex+""),parse_mode:"markdown"})
