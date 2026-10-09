# Wikipedia Language Test

Playwright + TypeScript project that tests changing the interface language of a logged-in Wikipedia user.

## Automated test case

**Title:** Verify that a logged-in user can change the interface language.

**Preconditions:**

- A valid Wikipedia test account is available.
- Its username and password are configured as environment variables.

| Step | Action                                                                                                       | Expected result                                                 |
| ---- | ------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------- |
| 1    | Open the login page and sign in.                                                                             | The user is authenticated.                                      |
| 2    | Open the user menu and select Preferences.                                                                   | The Preferences page opens.                                     |
| 3    | Read the current language and select a different language in User profile → Internationalisation → Language. | The selected language differs from the current language.        |
| 4    | Click Save.                                                                                                  | The Preferences page reloads after saving.                      |
| 5    | Check the page language.                                                                                     | The `<html lang>` attribute matches the selected language code. |

The test selects a random language from `LANGUAGE_CODES`, excluding the current language. It waits for the GET response for `/Special:Preferences` after saving, then asserts the `lang` attribute.

**Postcondition:** The account keeps the selected language after the test.

Test file: [`src/tests/change-language.spec.ts`](src/tests/change-language.spec.ts).

## Local setup

Requirements: Node.js 24 and npm. 

```bash
git clone git@github.com:romanesss/wikipedia-test-automation-task.git
cd wikipedia-test-automation-task
npm ci
npx playwright install --with-deps chromium
```

Create a `.env` file in the project root:

```dotenv
wiki_username=your_test_username
wiki_password=your_test_password
```

## Run the test

Run in headless mode:

```bash
npx playwright test
```

## HTML report

The report is generated at `playwright-report/index.html`. Open it with:

```bash
npx playwright show-report
```

Additional test output is stored in `test-results/`.

## GitHub Actions

The workflow runs on pushes and pull requests targeting `main` or `master`.

In **Settings → Secrets and variables → Actions**, add these repository secrets:

| Secret          | Value                           |
| --------------- | ------------------------------- |
| `WIKI_USERNAME` | Wikipedia test account username |
| `WIKI_PASSWORD` | Wikipedia test account password |

The workflow maps them to `wiki_username` and `wiki_password` environment variables.

To view a CI report, open **Actions → workflow run → Artifacts** and download `playwright-report`. Extract the archive and run:

```bash
npx playwright show-report /path/to/extracted/playwright-report
```

CI reports are retained for 30 days.

## Important Note:
Test works locally, but doesn't work on the CI/CD due to Wikipedia bot detection.

Local run:
<img width="1464" height="920" alt="image" src="https://github.com/user-attachments/assets/146306da-07ff-4200-8bbd-d3f5d21145e3" />

CI/CD run:
<img width="1167" height="1348" alt="image" src="https://github.com/user-attachments/assets/9df8d357-9ce6-4194-8fe2-0568648d39e6" />


