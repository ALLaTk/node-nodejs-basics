const parseEnv = () => {
  const arr = [];
  for (let key in process.env) {
    if(key.startsWith('RSS_')){
      arr.push(`${key}=${process.env[key]}`);
    }
  }
  console.log(arr.join('; '));
};

parseEnv();