const core = require('@actions/core');
const github = require('@actions/github');
module.exports = async ({github, context, core}) => {
try {
  // `who-to-greet` input defined in action metadata file
  //const nameToGreet = core.getInput('who-to-greet');
  //const veracode = core.getInput('veracode-data');
  core.setOutput("veracode", sampleapp);
} catch (error) {
  core.setFailed(error.message);
}
}
