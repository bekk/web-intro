# Async - await

Async-await-mønsteret er en mer moderne måte å håndtere asynkronitet på enn med [Promises](/05-javascript/08-async-await.md).

Syntaksen er som følgr:

```js
async function hentData() {
    const response = await fetch('http://ressurs.no');
    return await response.json();
}
```

## Feilhåndtering

Dersom requesten feiler, vil await kaste en feil. Dette kan vi enkelt håndtere ved å wrappe det i en `try-catch`:

```js
async function hentData() {
    try {
        const data = await fetch('http://ressurs.no');
        return await data.json();
    } catch (err) {
        // gjør noe med feilen
    }
}
```
