// Copyright (©) 2020 Azura Apple. All rights reserved. MIT License.

const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const randomPuppy = require('random-puppy');
const subreddits = [
    "memes",
    "DeepFriedMemes",
    "bonehurtingjuice",
    "surrealmemes",
    "dankmemes",
    "meirl",
    "me_irl",
    "funny"
]

module.exports = class MemeCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'meme',
            group: 'fun',
            memberName: 'meme',
            guildOnly: true,
            description: 'Sends a random meme from selected subreddits!',
            examples: ['~meme'],
            details: "There is no NSFW filter on this!",
            throttling: {
                usages: 2,
                duration: 10
            }
        });
    }

    run(message) {
        var randSubreddit = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

        randomPuppy(randSubreddit)
        .then(url => {
            const embed = new MessageEmbed()
                .setFooter(`${randSubreddit}`)
                .setDescription(`[Image URL](${url})`)
                .setImage(url)
                .setColor('#887064');
            return message.channel.send({ embed });
        })
    }
}