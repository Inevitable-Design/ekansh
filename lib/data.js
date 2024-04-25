import fs from "fs";

//Reach the package.json file
// export function getPackageJson() {
//   const path = `package.json`;
//   const packageData = JSON.parse(fs.readFileSync(path, "utf8"));
//   return packageData;
// }
// const { version } = getPackageJson();

// Data
const data = {
    name: "Ekansh",
    cli: "Inevitable-CLI",
    author: "Ekansh",
    title: ["Full-stack developer", "Software Engineer"],
    bio: "Heya!, I'm Ekansh, a Full-Stack Javascript dev from India.",
    cli_description: "",
    github: "Inevitable-Design",
    urls: [
        { label: "Twitter", value: 'https://x.com/ekansh_dev', username: 'ekansh_dev' },
        { label: "LinkedIn", value: 'https://www.linkedin.com/in/ivd-ekansh/', username: 'ivd-ekansh' },
        { label: "Discord", value: "https://discord.com/users/s.ekansh", username: "s.ekansh", hint:"oh no 😵" },
        { label: "GitHub", value: "https://github.com/Inevitable-Design", username: 'Inevitable-Design' }
    ],
    version: "1.0.7",
};
export default data;