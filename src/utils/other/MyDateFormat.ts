export const myDateFormat = (value: string): string => {
    const date = new Date(value);

    
    const convertValue = `${date.getHours()}:${date.getMinutes()}  ${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;

    return convertValue;
  };