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
            type: 'checkbox',
            name: 'branchesToDelete',
            message: 'Which branches you want to delete?',
            choices: all,
        })
        questions.push({
            type: 'confirm',
            name: 'confirm',
            message: 'Are you sure?'
        })

        const prompt = inquirer.createPromptModule()

        const {branchesToDelete, confirm} = await prompt(questions)

        if (!confirm) {
            console.log('Nothing deleted')
            return
        }

        await git.deleteLocalBranches(branchesToDelete)

        console.log('Deleted branches: ', branchesToDelete)
    } catch (e) {
        console.error(e)
    }
})()