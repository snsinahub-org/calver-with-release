const {_} = require('lodash')
const github = require('@actions/github');
const core = require('@actions/core');



async function run() {
    const myToken = core.getInput('token');
    const repoFull = core.getInput('repo').split('/');
    const tag = core.getInput('tag');
    const allowedUsers = core.getInput('allowed_users');
    const repo = repoFull[1]
    const owner = repoFull[0]


    
    const octokit = github.getOctokit(myToken)
    console.log("Owner: " + owner)
    console.log("Repo: " + repo)

    const output = octokit.rest.repos.getReleaseByTag({
        owner,
        repo,
        tag,
      });

    console.log("OUTPUT: " + JSON.stringify(output, null, 2))
}

run();