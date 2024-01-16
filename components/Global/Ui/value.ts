import * as enData from '@/messages/en.json';

// Read the JSON file
export function getKeyByValue(obj: Record<string, any>, value: any): any{
    for (const key in obj) {
      if (typeof obj[key] === 'object') {
        const nestedKey = getKeyByValue(obj[key], value);
        if (nestedKey) {
          return `${key}/${nestedKey}`;
        }
      } else if (obj[key] === value) {
        return key;
      }
    }
    return undefined;
  }
  
  const targetValue = "Search";
  const key = getKeyByValue(enData, targetValue);
  
  console.log(key);
 