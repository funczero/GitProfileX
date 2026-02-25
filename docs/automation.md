# Automation

GitProfileX supports dynamic updates using Node.js and GitHub Actions.

---

## Local Generator

Run:

```
npm install
npm run generate
```

This will fetch your repositories using the GitHub API.

---

## Environment Variable

You can define:

```
GITHUB_USERNAME=yourusername
```

If not set, it defaults to:

funczero

---

## GitHub Actions (Optional)

You can automate generation using a workflow:

- Run on push
- Run daily
- Update README automatically

Workflow location:

.github/workflows/update.yml
