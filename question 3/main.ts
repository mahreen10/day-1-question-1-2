let personName: string = "Meerab";
console.log("lowercase:", personName.toLowerCase());
console.log("uppercase:", personName.toLocaleUpperCase());
console.log("titlecase:", personName.replace(/\bw/g,c=>c.toLocaleUpperCase()) );