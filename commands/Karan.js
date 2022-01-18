/*CMD
  command: Karan
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var user = User.getProperty("status");
if (user=="member" | user =="administrator" | user=="creator"){
var balance = Libs.ResourcesLib.userRes("balance");
var withdrawn = Libs.ResourcesLib.userRes("withdrawn");
var ref = Libs.ResourcesLib.userRes("referral");
var msgid = User.getProperty("msgid")
Api.deleteMessage({
message_id : msgid
})
Bot.sendKeyboard("🆔 Account Balance,\n🙌🏻 Referrals,🎁 Daily Bonus,➖ Withdraw\n📩 Update Coinbase Email\n💳Withdraw-History,📊Statistics\n〽️My-Referal,🏅LeaderBoard","*Welcome to Bot*")
}
Bot.runCommand("ref")
