const fs = require("fs");

const username = process.env.GITHUB_USERNAME;

async function fetchRepos() {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?sort=stars&per_page=3`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch repositories");
  }

  return response.json();
}

function generateProjectsSection(repos) {
  const formatted = repos
    .map(
      (repo) =>
        `- 🚀 [${repo.name}](${repo.html_url}) - ⭐ ${repo.stargazers_count}`
    )
    .join("\n");

  return `
## 📌 Featured Projects (Auto Generated)

${formatted}
`;
}

async function main() {
  try {
    const repos = await fetchRepos();
    const projectsSection = generateProjectsSection(repos);

    const readmeContent = `
# GitProfileX – Dynamic Profile

This section is automatically generated.

${projectsSection}

---

Generated automatically by GitProfileX 🚀
`;

    fs.writeFileSync("AUTO_PROJECTS.md", readmeContent);

    console.log("README generated successfully.");
  } catch (error) {
    console.error("Error generating README:", error);
  }
}

main();
