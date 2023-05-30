// Require the SheetJS library -- node datesheet.js
const XLSX = require('xlsx');

// Create a new workbook
const workbook = XLSX.utils.book_new();

// Define the worksheet data
const data = [
    ['Text','Link','Year','Month (1 to 12)', 'Date', 'Hour (From 0 to 23)', 'Minutes','Image URL','Video URL','Video Type','No. of Repetitions (From 1-10 OR \'FOREVER\')','Time Gap between Repetitions (Hours: From 1-24 OR \'WEEKLY\' OR \'MONTHLY\' OR \'YEARLY\')',	'Google Business Profile Type',	'Google Business Profile URL',	'Pinterest Title',	'Pinterest Link',	'Instagram First Comment',	'Facebook First Comment',	'LinkedIn First Comment'	
  ]
  ];
  
  var safeCaptionArray = [
    "\"Looking for some hot and exclusive content? Comment and share!\"",
    "\"Want to see more of my exclusive content? Let me know below!\"",
    "\"Ready for some exciting content? Comment and share to see more!\"",
    "\"If you're a fan of my content, show me some love in the comments!\"",
    "\"Want to unlock some exclusive content? Comment and share this post!\"",
    "\"If you want to see more of my posts, comment below!\"",
    "\"Are you ready to see some amazing content? Comment and share to unlock!\"",
    "\"Want to see what's behind the scenes? Comment and share for some exclusive content!\"",
    "\"If you're a fan of my pics, drop a comment and share this post!\"",
    "\"Ready for some exciting content? Comment and share to see more of my posts!\"",
    "\"Want to see what I have in store? Comment and share to unlock!\"",
    "\"Looking for some exclusive content? Comment and share to see my posts!\"",
    "\"If you want to see more of my content, comment and let me know!\"",
    "\"Want to get access to some exclusive content? Comment and share to see more!\"",
    "\"Ready for some uncensored content? Comment and share to unlock my posts!\"",
    "\"If you're a fan of my page, show some love in the comments and share this post!\"",
    "\"Want to see more of my pics and videos? Comment and share to unlock!\"",
    "\"Looking for some amazing and exclusive content? Comment and share to see more!\"",
    "\"If you're ready to see more of my posts, drop a comment and share this post!\"",
    "\"Want to see what's behind the curtain? Comment and share to unlock some exclusive content!\"",
    "\"Are you a fan of my content? Let me know in the comments and share this post!\"",
    "\"Ready for some exclusive content? Comment and share to unlock!\"",
    "\"If you want to see more of my pics and videos, comment and let me know!\"",
    "\"Want to get access to some exciting content? Comment and share to see more!\"",
    "\"Looking for some uncensored content? Comment and share to unlock!\"",
    "\"If you're a fan of my page, show some love in the comments and share this post!\"",
    "\"Want to see more of my exclusive pics and videos? Comment and share to unlock!\"",
    "\"Ready for some exciting content? Comment and share to see more!\"",
    "\"If you're ready to see some exclusive content, drop a comment and share this post!\"",
    "\"Looking for some amazing content? Comment and share to unlock my exclusive posts!\"",
    "\"If you want more exclusive content, follow me and subscribe to my channel!\"",
    "\"Ready to see more of my awesome content? Follow me and subscribe for more!\"",
    "\"Want access to more exciting content? Follow me and subscribe now!\"",
    "\"If you like what you see, make sure to follow me and subscribe for even more!\"",
    "\"Don't miss out on exclusive content! Follow me and subscribe today!\"",
    "\"Want to see even more of my awesome photos? Follow me and subscribe!\"",
    "\"If you want to see more of my exclusive content, make sure to follow me and subscribe!\"",
    "\"Ready for more uncensored content? Follow me and subscribe now!\"",
    "\"Looking for more exciting content? Follow me and subscribe now!\"",
];

var safeNewHashtagArray = [
    '#portraitphotography', '#digitalartwork', '#beautiful', '#virtualart', '#portraitmood', '#sensualphotography',
    '#cinematiclook', '#scenicview', '#artificialintelligencephotography', '#cosplayphotography', '#journeythroughart',
    '#streetphotography', '#artificialintelligenceart', '#lingeriephotography', '#virtualmodel', '#digitalart',
    '#digitalartwork', '#artificialintelligencegeneratedart', '#artgalleries', '#urbanphotography', '#artisticsexy',
    '#beautyqueen', '#artisticexpression', '#modelphotography', '#dreamyphotography', '#fashionphotography',
    '#streetcaptures', '#lifeonstreets', '#35mmphotography', '#AI', '#StableDiffusion', '#AIart', '#AItechnology',
    '#digitalcreation', '#artificialintelligence', '#artificialcreativity', '#AIgenerated', '#techart', '#algorithmicart',
    '#AIartist', '#machinelearning', '#creativeAI', '#generativeart', '#neuralnetworks', '#AIinventive', '#AIinspired',
    '#computervision', '#artandtechnology', '#AIexpression', '#innovativeAI', '#artificialintelligencecreativity',
    '#artificialintelligencetech'
  ];
  
// Set the start date and end date
const startDate = new Date('2023-05-31');
const endDate = new Date('2023-06-02');
// var captionArray = ["\"Looking for some hot and exclusive content? Comment and share!\"", "\"Want to see more of my Patreon and OnlyFans content? Let me know below!\"", "\"Ready for some spicy content? Comment and share to see more!\"", "\"If you're a fan of my Patreon and OnlyFans content, show me some love in the comments!\"", "\"Want to unlock some exclusive Patreon and OnlyFans content? Comment and share this post!\"", "\"If you want to see more of my sexy Patreon and OnlyFans posts, comment below!\"", "\"Are you ready to see some steamy Patreon and OnlyFans content? Comment and share to unlock!\"", "\"Want to see what's behind the paywall? Comment and share for some exclusive Patreon and OnlyFans content!\"", "\"If you're a fan of my sexy Patreon and OnlyFans pics, drop a comment and share this post!\"", "\"Ready for some NSFW content? Comment and share to see more of my Patreon and OnlyFans posts!\"", "\"Want to see what I have in store for my Patreon and OnlyFans fans? Comment and share to unlock!\"", "\"Looking for some sexy and exclusive content? Comment and share to see my Patreon and OnlyFans posts!\"", "\"If you want to see more of my Patreon and OnlyFans content, comment and let me know!\"", "\"Want to get access to some exclusive Patreon and OnlyFans content? Comment and share to see more!\"", "\"Ready for some uncensored content? Comment and share to unlock my Patreon and OnlyFans posts!\"", "\"If you're a fan of my Patreon and OnlyFans page, show some love in the comments and share this post!\"", "\"Want to see more of my sexy Patreon and OnlyFans pics and videos? Comment and share to unlock!\"", "\"Looking for some steamy and exclusive Patreon and OnlyFans content? Comment and share to see more!\"", "\"If you're ready to see more of my Patreon and OnlyFans posts, drop a comment and share this post!\"", "\"Want to see what's behind the curtain? Comment and share to unlock some exclusive Patreon and OnlyFans content!\"", "\"Are you a fan of my Patreon and OnlyFans content? Let me know in the comments and share this post!\"", "\"Ready for some hot and exclusive Patreon and OnlyFans content? Comment and share to unlock!\"", "\"If you want to see more of my Patreon and OnlyFans pics and videos, comment and let me know!\"", "\"Want to get access to some spicy Patreon and OnlyFans content? Comment and share to see more!\"", "\"Looking for some uncensored Patreon and OnlyFans content? Comment and share to unlock!\"", "\"If you're a fan of my sexy Patreon and OnlyFans page, show some love in the comments and share this post!\"", "\"Want to see more of my exclusive Patreon and OnlyFans pics and videos? Comment and share to unlock!\"", "\"Ready for some NSFW Patreon and OnlyFans content? Comment and share to see more!\"", "\"If you're ready to see some exclusive Patreon and OnlyFans content, drop a comment and share this post!\"", "\"Looking for some steamy Patreon and OnlyFans content? Comment and share to unlock my exclusive posts!\"", "\"If you want more exclusive content, follow me and subscribe to my Patreon!\"", "\"Ready to see more of my sexy content? Follow me and subscribe to my Patreon for more!\"", "\"Want access to more spicy content? Follow me and subscribe to my Patreon now!\"", "\"If you like what you see, make sure to follow me and subscribe to my Patreon for even more!\"", "\"Don't miss out on exclusive content! Follow me and subscribe to my Patreon today!\"", "\"Want to see even more of my sexy photos? Follow me and subscribe to my Patreon!\"", "\"If you want to see more of my exclusive content, make sure to follow me and subscribe to my Patreon!\"", "\"Ready for more uncensored content? Follow me and subscribe to my Patreon!\"", "\"Looking for more steamy content? Follow me and subscribe to my Patreon now!\"", "\"If you're a fan of my work, follow me and subscribe to my Patreon for more exclusive content!\"", "\"Want to get access to all my exclusive content? Follow me and subscribe to my Patreon!\"", "\"If you want to see more of my Patreon content, make sure to follow me for updates!\"", "\"Don't miss out on my exclusive content! Follow me and subscribe to my Patreon now!\"", "\"Ready to see even more of my sexy side? Follow me and subscribe to my Patreon for exclusive content!\"", "\"If you love what I do, make sure to follow me and subscribe to my Patreon for more!\"", "\"Want to see more of my hot content? Follow me and subscribe to my Patreon now!\"", "\"If you want access to my best content, follow me and subscribe to my Patreon for exclusive posts!\"", "\"Looking for more exclusive content? Follow me and subscribe to my Patreon for more!\"", "\"If you want to see more of my Patreon content, make sure to follow me for the latest updates!\"", "\"Ready for more NSFW content? Follow me and subscribe to my Patreon for exclusive posts!\"", "\"If you want to see more of my sexy pics and videos, make sure to follow me and subscribe to my Patreon!\"", "\"Don't miss out on my hottest content! Follow me and subscribe to my Patreon for exclusive posts!\"", "\"Want to see more of my steamy content? Follow me and subscribe to my Patreon now!\"", "\"If you're a fan of my work, make sure to follow me and subscribe to my Patreon for more exclusive content!\"", "\"Looking for more spicy content? Follow me and subscribe to my Patreon for exclusive posts!\"", "\"Want to get access to all my exclusive content? Follow me and subscribe to my Patreon now!\"", "\"If you want to see more of my Patreon content, make sure to follow me for updates!\"", "\"Ready to see more of my sexy side? Follow me and subscribe to my Patreon for exclusive content!\"", "\"If you love what I do, make sure to follow me and subscribe to my Patreon for more!\"", "\"Want to see more of my hot content? Follow me and subscribe to my Patreon for exclusive posts!\"", "\"If you want access to my best content, follow me and subscribe to my Patreon for exclusive pics and videos!\"", "\"Looking for more exclusive content? Follow me and subscribe to my Patreon for more steamy posts!\"", "\"Don't miss out on my latest content! Follow me and subscribe to my Patreon now!\"", "\"Ready for more NSFW content? Follow me and subscribe to my Patreon for even more spicy posts!\""];
// var newHastagArray = ['#aiportrait', '#digitalimage', '#beautifulwomen', '#virtualgirl', '#portraitmood', '#sensualphoto', '#cinematic', '#scenicview', '#aiphotograph', '#cosplay', '#midjourney', '#streetphotographers', '#aigeneratedimages', '#lingerie', '#aigirl', '#digitalartwork','#digitalart', '#aigeneratedart', '#stablediffusiongirls', '#streetleaks', '#aisexy', '#beautyqueen', '#stablediffusionart', '#lingerie', '#stablediffusion', '#modelgirl', '#dreaminstreets', '#fashionphotography', '#capturestreets', '#life_is_street', '#35mm']

// const captionArray = captionArray;
// const newHastagArray = newHastagArray;

// Generate the data for the worksheet
let currentDate = startDate;
while (currentDate <= endDate) {
  for (let j = 0; j < 24; j += 1) { // Hours
    let caption = generateCaptionWithHashtags(safeCaptionArray, safeNewHashtagArray);
    data.push([caption,'',2023,currentDate.getMonth() + 1, currentDate.getDate(), j, 0]); // Add the row to the data
  }
  currentDate = new Date(currentDate.getTime() + (24 * 60 * 60 * 1000)); // Add 1 day to the current date
}
// Create a new worksheet
const worksheet = XLSX.utils.aoa_to_sheet(data);

// Add the worksheet to the workbook
XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

// Write the workbook to a file
XLSX.writeFile(workbook, 'output.xlsx');

function generateCaptionWithHashtags(captionArray, hashtagArray) {
  // Choose a random caption from captionArray
  // const randomCaption = captionArray[Math.floor(Math.random() * captionArray.length)];
  const randomCaption = safeCaptionArray[Math.floor(Math.random() * safeCaptionArray.length)];
  
  
  
  // Shuffle the hashtagArray
  const shuffledHashtags = hashtagArray.sort(() => 0.5 - Math.random());
  
  // Take the first 30 hashtags from the shuffled array
  const randomHashtags = shuffledHashtags.slice(0, 10); // change 30 or 10 based on twitter and instagram
  
  // Combine the random caption and random hashtags into a single string
  const result = `${randomCaption} ${randomHashtags.join(' ')}`;
  
  return result;
}
