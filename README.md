# FingerTips

An assistive technology bot for people who have trouble using their hands, or for those who don't have hands.

## Development Instructions

1. Join our FingerTips [Discord](https://discord.gg/vCKF7Urty2), where we do testing.
2. Fork and clone this repo.
3. Create a test Discord bot at [here](https://discord.com/developers/applications).
4. Ping one of the Discord admins to invite your bot in the server for testing.
5. Name it as FingerTips-<your username>
6. Read the official Discord js [guide](https://discordjs.guide/#before-you-begin) and follow the steps until **Adding your bot to servers**.
7. Copy the token and clientId id into a file called config.json like this:-

```
{
  "token": "Your bots token",
  "guildId": "906936820724555776",
  "clientId": "Your bots Client Id"
}
```

8. Run `npm install`
9. Run `node deploy-commands.js` if you have made any changes to the deploy-commands.js file.
10. Once you got the clientId and token for your bot you can run the bot using `node index.js`
