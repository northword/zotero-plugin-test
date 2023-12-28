import issueParser from "issue-parser";
const changelog = `* close #4 (f61686b)`;
const parser = issueParser("github");
const result = changelog
  .split("\n")
  .map(parser)
  .flatMap((parsed) => parsed.actions.close)
  .filter((action) => !action.slug || action.slug === `${owner}/${repo}`)
  .map((action) => ({ type: "issue", number: parseInt(action.issue, 10) }));
console.log(result);
