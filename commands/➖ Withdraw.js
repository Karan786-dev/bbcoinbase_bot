/*CMD
  command: ➖ Withdraw
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: _Enter Your Amount_
  keyboard: 
  aliases: 
CMD*/

var balance = Libs.ResourcesLib.userRes("balance");

var amount = parseFloat(message)

var email = User.getProperty("email");

if (amount>balance.value()){

Bot.sendKeyboard("🔙BACK","💰 Your Balance : "+(balance.value()).toFixed(10)+" *LTC*\n\n❌ You Can Not Withdraw Out Of Your Balance");

return

}

if (amount<0.00000050){

Bot.sendKeyboard("🔙BACK","💰 Your Balance : "+(balance.value()).toFixed(10)+" *LTC*\n\n❌ To withdraw, you have to input at least 0.00000050 *LTC*");

return

}

if (balance.value()<0.00000050){

Bot.sendKeyboard("🔙BACK","💰 *Your* *Balance* : "+(balance.value()).toFixed(8)+" *LTC*\n\n❌ To withdraw, you need at least 0.00000050 *LTC*");

return

}

if (!email){

Bot.sendKeyboard("🔙BACK","You did not set any email address click on Set Email Address for setup your Email address");

return

}

var userPayment = Libs.ResourcesLib.anotherChatRes("userpayment", "global")
userPayment.add(+message)
  var user_link = Libs.commonLib.getLinkFor(user)
  var withdrawn = Bot.getProperty("totalWithdrawn")
  withdrawn = parseFloat(withdrawn)

var userPayment = Libs.ResourcesLib.anotherChatRes("totalPayment", "global")
  userPayment.add(+message)
  var balance = Libs.ResourcesLib.userRes("balance")
  if (isNaN(message)) 

var history = User.getProperty("history")
var time = Libs.DateTimeFormat.format(new Date(), "dd/m/yyyy h:M:s T") + "M"
var amount = message
  if (history == undefined) {
    var newh =
      "-------------------------------------------------------------------------------------\n" +
      "✅ Withdraw Amount : " +
      amount +
      "LTC" +
      "\n⚕DATE " +
      time
    User.setProperty("history", newh, "string")
  } else {
    var nwh =
      "-------------------------------------------------------------@"+bot.name+"------------------------" +
      "\n✅ Withdraw Amount : " +
      amount +
      "LTC" +
      "\n⚕ DATE " +
      time
    var toal = nwh + history
    User.setProperty("history", toal, "string")
  }
Bot.sendMessage("*✅ Withdrawal sent\n\n💳 Transaction Details :\n 💰Amount : "+data.message+" LTC\n💼 wallet : "+email+"*")

balance.add(-amount);

Libs.Coinbase.apiCall({

 method: "POST",  

 path: "accounts/d6c0d409-2138-5309-8af1-dfb6641215c3/transactions",

 body: {

 "type": "send",

 "to": email,

 "amount": message,

 "currency": "LTC"

},
onSuccess: "/onSuccess",

 onError: "/onApiError"

})
