# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Launch School JS100 exercise repository containing JavaScript programming exercises focused on fundamental concepts including:

- Array manipulation and methods (filter, map, includes)
- Object properties and iteration
- Function implementation (factorial, even/odd detection)
- Control flow and loops
- Basic JavaScript syntax and concepts

## Code Architecture

**Exercise Structure**: Individual JavaScript files containing isolated exercises, each typically including:
- Function definitions with specific problem-solving logic
- Test cases via `console.log()` statements showing expected outputs
- Comments describing the exercise requirements

**File Naming Patterns**:
- `object_e[number].js` - Object-related exercises
- `array_[description].js` - Array manipulation exercises  
- Descriptive names for specific algorithms (`factorial.js`, `evenOrOdd.js`)

**Common Patterns**:
- Functions are standalone with no external dependencies (except `readline-sync` available)
- Test output via console.log with expected results in comments
- Input validation in some exercises (e.g., integer checking in `evenOrOdd.js`)
- Alternative implementations sometimes shown in commented code

## Development Commands

**Run individual exercises**:
```bash
node [filename].js
```

**Run from parent directory**:
```bash
node JS100/exercise/[filename].js
```

## Code Style Notes

- Uses `let` and `const` appropriately
- Function expressions and arrow functions both present
- Consistent semicolon usage
- Clear variable naming conventions
- Comments include exercise descriptions and expected outputs