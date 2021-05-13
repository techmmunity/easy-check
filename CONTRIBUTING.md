# How to contribute?

## Project Architecture

```
| src
| - - checks (validations)
| - - - - <group> (group of validations, ex: number, cpf, date)
| - - - - - - is-<validation_name>.ts (file that contains the validation function)
| - - helpers (Global helpers)
| - - tests (unit testing with Jest)
| - - index.ts (exports all the functions)
| README.md (Project apresentation and documentation)
```

## Projects Patterns

#### Files

- All files names are written in `kebab-case`
- One feature per file

#### Folders

- All folders names are written in `kebab-case`

#### Tests

- One test file per feature
- The file must be 2 describe functions
  - The describe functions must recieve the first parameter of `"<featureName> (return <True/False>)"` (Ex: `"isMaskedCPF (return True)"`)

## How to add new validations?

- Fork the project to your own github account
- Clone the repository
- Install the depencencies using `yarn`
- Check the current existent folder groups inside of `src/checks` to see if any of them matches with the new feature that you want to implement.
  - If any of them matches, great! Create a new file, with the name of the feature, and write the new feature in the file.
  - If none of then match, create a new file, and add the export in the `src/index.ts` file
- After your new feature has been created, add the tests in the `src/tests` folder
