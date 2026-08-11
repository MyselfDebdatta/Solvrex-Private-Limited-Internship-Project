---
name: Auto Git Push Rule
description: Ensure changes are automatically committed and pushed to GitHub after any successful update.
---

# Auto Git Push

When interacting with the user for this project, you MUST remember the following workflow constraint:
Whenever you successfully complete any task, update, or code modification for the user, you must automatically:
1. `git add .`
2. `git commit -m "[Descriptive commit message]"`
3. `git push origin main`

Do this automatically as part of your execution steps without requiring the user to explicitly remind you to push.
