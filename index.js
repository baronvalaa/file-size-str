module.exports =  (bytes,precision=0) => {
  if(typeof bytes=='string'){
    bytes=parseInt(bytes);
  }
  if (bytes == 0) return "0 B";
  let k = 1024;
  let sizeStr = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]; //store
  let i = 0;
  for (let l = 0; l < 8; l++) {
    if (bytes / Math.pow(k, l) < 1) {
      break;
    }
    i = l;
  }
  return (bytes / Math.pow(k, i)).toFixed(precision) + " " + sizeStr[i];
};
