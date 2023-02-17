
# Jap W Jay
## Page to learn 1000 most commonly used Japanese words.
## Practice hiragana and katakana
## Practice japanese convosation by conversing with a bot
## Page url https://jaywiz77.github.io/japwjay/
## Coded with React, Vite, Typescript

# best-practice efforts

## 1. Using Vite
### - Faster spin-up of the development server, Vite does not build the entire application before serving. 
### - Less waiting time for reflecting file updates,  updates simple and fast regardless of the size of application.

## 2. Using TypeScript
### - With the different typings, it allows better maintainability of the codebase.

## 3. Using Constants File
### - Improved readability, the variable name might be easier to understand than raw values.
### - Better maintainability, value only need to be updated at single place.

## 4. Use React Hooks
### - With Hooks, you can extract stateful logic from a component so it can be tested independently and reused. 
### - Placing useEffect inside the component lets us access the count state variable (or any props) right from the effect. 
```
    useEffect(() => {
        setSelectedWord(words[selectedCount]);
    },[selectedCount])

    useEffect(()=>{
        speak();
    },[selectedWord]);
```