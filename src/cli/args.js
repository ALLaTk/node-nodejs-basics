import { argv } from 'process';
const parseArgs = () => {
  const argvArr = argv
  const arr = [];
  for (let i = 0; i < argvArr.length; i++) {
    if (argvArr[i].startsWith('--')) {
      arr.push(`${argvArr[i].slice(2)} is ${argvArr[i+1]}`);
    }
  }
  console.log(arr.join(', '));
};

parseArgs();