/*CMD
  command: šš» Referrals
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let stat = Bot.getProperty(""+user.telegramid+"");

if (stat=="ban"){
Bot.sendMessage("*You're Ban*");
}else{

let res = Libs.ResourcesLib.userRes("referral");
let reflink=Libs.ReferralLib.currentUser.getRefLink("LegitCrypto0Robot","Bot");
let lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get();
Bot.sendMessage("*āÆļø Total Invites : "+refList.length+" Users\n\nā Per Referral 0.00000100 LTC\n\nš Referral Link ā¬ļø\n"+reflink+"*");

}
