/*CMD
  command: /setup
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Libs.Coinbase.setup();

Bot.sendMessage(
   "Now please go to BB App > Admin Panel and setup Api Keys. Then run /setupCB"
);
