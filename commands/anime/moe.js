// Copyright (©) 2020 Azura Apple. All rights reserved. MIT License.

const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports = class MoeCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'moe',
            aliases: ['awwnime', 'loli'],
            group: 'anime',
            memberName: 'moe',
            guildOnly: true,
            description: 'Cute anime girls!',
            examples: ['~moe'],
            throttling: {
                usages: 1,
                duration: 5
            }
        });
    }

    run(message) {
        randomPuppy('awwnime')
            .then(url => {
                const embed = new MessageEmbed()
                    .setFooter(`awwnime`)
                    .setDescription(`[Image URL](${url})`)
                    .setImage(url)
                    .setColor('#A187E0')
                return message.channel.send({ embed })
            })
    }
}