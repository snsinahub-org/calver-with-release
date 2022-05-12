const github = require('@actions/github');
const core = require('@actions/core');
const ld = require( 'lodash' );
const _ = ld.noConflict();


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
    // try{
        const output = await octokit.request('GET /repos/{owner}/{repo}/tags', {
            owner: owner,
            repo: repo
          })
        // console.log("OUTPUT: " + JSON.stringify(output['data'], null, 2))
                
        let allTags = _.pluck(output['data'], 'name')
        console.log("TAG: "+ allTags)

    // } catch(e) {
    //     console.log("error: " + JSON.stringify(e, null, 2))
    // }
    
}

run();