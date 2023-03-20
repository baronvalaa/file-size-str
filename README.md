# file-size-str

Number format to file size string .

## Install
```bash
npm i file-size-str --save
```


## Example
```javascript
const filesize = require("file-size-str");

console.log(filesize(100)); //100 B
console.log(filesize(100,1));//100.0 B
console.log(filesize(1000000000000,10));//931.3225746155 GB
```

# Parameter

```javascript
filesize(number,precision);
```
number : need format value

precision : the return precision with toFixed
