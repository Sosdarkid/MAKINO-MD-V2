const fs = require("fs");
const chalk = require("chalk");

//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = true;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = false;                 //make true to view statuses 
global.ANTI_BOT = false;
global.PM_BLOCKER = false;
global.CHATBOT = true;


global.Owner = ["2349150984798"];
global.OwnerNumber = ["2349150984798"];
global.ownertag = ["2349150984798"]; 
global.OwnerName =  "NBAJASPER TECH";
global.BotName = "🐦Makino-md-v2";
global.packname = "MAKINO-MD-V2";                             //Do not change.
global.author = "TAIRA MAKINO";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.

global.sessID = process.env.sessID |{"noiseKey":{"private":{"type":"Buffer","data":"aDXrGRjey+GnHwcbtNQ9441D6JsGCtFW0sep56YMTmo="},"public":{"type":"Buffer","data":"ZMw8wDyJAoOyhthulw1aiNGAtza8ZMcaMl+Wnf63SiA="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"IH6FRWD6UuGJCYMPDBxpLmmcpdZ4obz7L9K4Bme9mHY="},"public":{"type":"Buffer","data":"7FNBiGtCwFrcGO/tc8Ura/Hfd4kNJg4lHk+llk7tCHk="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"aAOzlU8/NjUBLirT3VOlINeyuRCQEwbaDZdiGnIo0Vg="},"public":{"type":"Buffer","data":"UDQ0XGA3l1MkRtML5goQtmCHrWTk1MT8Tn3JuQ4gwmo="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"mFqPp9pRFqqxYKqkF/Dr1TpmqD6FBBu5P0DJimMglW8="},"public":{"type":"Buffer","data":"AL9arXqTETK/EdYbVdUBpD0iDeNLepUP1IW3gU4as1c="}},"signature":{"type":"Buffer","data":"WOKYEEWSBM87hjJAR/0V+MPB5jhgBPNq8F4b8LV11CTlTyWr+CitNrYEFF2ZdnlgcaOtaKqFLKuDShLiIHfkgw=="},"keyId":1},"registrationId":144,"advSecretKey":"9OQ6Gm3wHGLgOGmg4dgDSL/X2qz+AF27X8FIg+K7Zx0=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"nPd-wBWwQGWEteu1hEAvsA","phoneId":"29783e42-bfbb-4b31-ab40-61672256cc73","identityId":{"type":"Buffer","data":"ECu2pghToodnDHzJRvgFTGB8jBs="},"registered":true,"backupToken":{"type":"Buffer","data":"r6qPAhmk75kmcjlrK2mXOUqLu98="},"registration":{},"pairingCode":"ZBGPMZF5","me":{"id":"2349150984798:33@s.whatsapp.net"},"account":{"details":"CImm2LsPEPKN+LUGGAQgACgA","accountSignatureKey":"VLTVGGjrGADUcc4At46PwoLutTWYiKi9jtDv0XUISEU=","accountSignature":"b3GWvOE9AHJ18OEiC3xuoWbn5xiqaLI1sqVP2e+3m60M4SrguD+dpFKpI7UttRPEt4HAZRKOVYQG5qHsDe0XCA==","deviceSignature":"Gv6M1Ra2DQgWJuKjFXD/nQkqRIwD2qqdpxeVRAiXuVFXwi5TUr9yQkWmLKaF7WEESFafv9C/4Qf0rF1qacJqjg=="},"signalIdentities":[{"identifier":{"name":"2349150984798:33@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BVS01Rho6xgA1HHOALeOj8KC7rU1mIiovY7Q79F1CEhF"}}],"platform":"iphone","lastAccountSyncTimestamp":1723729663,"myAppStateKeyId":"AAAAAIzb"}| ``
global.prefa = ["/"]

//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command,Dont trespass, Baka!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Baka!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*, Baka!',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}
