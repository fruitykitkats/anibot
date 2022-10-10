// Copyright (©) 2020 Azura Apple. All rights reserved. MIT License.

const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class AvatarCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'avatar',
            aliases: ['dp', 'ava', 'picture'],
            group: 'utility',
            memberName: 'avatar',
            guildOnly: true,
            description: 'Shows the avatar of the specified user or yourself!',
            examples: ['~avatar <mention>'],
            args: [{
                key: 'member',
                prompt: 'Which user would you like to get the avatar of?',
                type: 'member',
                default: ''
            }]
        });
    }

    run(message, args) {
        const member = args.member || message.author;
        if (!member.user.avatar) return message.channel.send('This user does not have an avatar!');
        const avatar = member.user.avatarURL({
            format: member.user.avatar.startsWith('a_') ? 'gif' : 'png',
            size: 2048
        });

        const embed = new MessageEmbed()
            .setAuthor(`${member.user.tag}`, avatar)
            .setColor(member.displayHexColor ? member.displayHexColor : '#D0C7FF')
            .setDescription(`[Avatar URL](${avatar})`)
            .setImage(avatar)
        return message.channel.send({ embed });
    }
}