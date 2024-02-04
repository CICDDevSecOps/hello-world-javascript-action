const core = require('@actions/core');
const github = require('@actions/github');
const js = require('js-yaml');
const fs = require ('fs');
module.exports = async ({github, context, core}) => {
try {
  // `who-to-greet` input defined in action metadata file
  //const nameToGreet = core.getInput('who-to-greet');
  //const veracode = core.getInput('veracode-data');
  const yamlData = fs.readFilesync(`${github.workspace}/app-sec.yml`,utf8);
  const parsedData = yaml.load(yamlData);
  core.setOutput("veracode", parsedData.veracode);
} catch (error) {
  core.setFailed(error.message);
}
}
