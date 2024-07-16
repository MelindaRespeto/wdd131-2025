
const today = new Date();

const shortDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "short"
}).format(today);

console.log(shortDate); // To display the formatted date in the console


