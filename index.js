const venom = require('venom-bot');

venom
  .create({
    session: 'mybot',
    multidevice: true,
  })
  .then((client) => startBot(client))
  .catch((error) => {
    console.log('Error starting bot:', error);
  });

function startBot(client) {
  console.log('✅ WhatsApp BOT is running...');

  client.onMessage(async (message) => {
    if (message.body.toLowerCase() === 'hello' && !message.isGroupMsg) {
      await client.sendText(message.from, '👋 Hello! I am your WhatsApp Bot.');
    }

    if (message.body.toLowerCase() === 'help' && !message.isGroupMsg) {
      await client.sendText(
        message.from,
        '🤖 *Bot Commands:*\n\n' +
        '1️⃣ hello - Bot will greet you.\n' +
        '2️⃣ help - Show this help message.\n\n' +
        'Thanks for using this bot!'
      );
    }

    if (message.body.toLowerCase() === 'who are you?' && !message.isGroupMsg) {
      await client.sendText(message.from, 'I am a simple WhatsApp bot created with Venom!');
    }
  });
}
