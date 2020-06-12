// Node.js
(async () => {
    const simpleGit = require('simple-git')
    const inquirer = require('inquirer')

    const args = process.argv
    const workingDir = args[2] || './'

    const git = simpleGit(workingDir)

    const questions = []

    try {
        const { all } = await git.branchLocal()

        questions.push({
            type: 'list',
            name: 'branch',
            message: 'Choose a branch to checkout',
            choices: all,
        })

        const prompt = inquirer.createPromptModule()

        const {branch} = await prompt(questions)

        await git.checkout(branch)
    } catch (e) {
        console.error(e)
    }
})()