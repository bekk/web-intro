# Async/await

Async-await-mønsteret er en mer moderne måte å håndtere asynkronitet på enn med [Promises](./08-promises.md).

Syntaksen er som følger:

```javascript
async function hentData() {
    const response = await fetch('http://ressurs.no');
    return response.json();
}
```

## Feilhåndtering

Dersom requesten feiler, vil await kaste en feil. Dette kan vi enkelt håndtere ved å wrappe det i en `try-catch`:

```javascript
async function hentData() {
    try {
        const data = await fetch('http://ressurs.no');
        return data.json();
    } catch (err) {
        // gjør noe med feilen
    }
}
```

