const {_} = require('lodash')
const github = require('@actions/github');
const core = require('@actions/core');
const { exec } = require("child_process");
var args = process.argv.slice(2);



async function run() {
    const myToken = core.getInput('token');
    const repoFull = core.getInput('repo').split('/');
    const tag = core.getInput('tag');
    const allowedUsers = core.getInput('allowed_users');
    const repo = repoFull[1]
    const owner = repoFull[2]


    
    const octokit = github.getOctokit(myToken)

    const output = octokit.rest.repos.getReleaseByTag({
        owner,
        repo,
        tag,
      });

    console.log("OUTPUT: " + output)
}

run();