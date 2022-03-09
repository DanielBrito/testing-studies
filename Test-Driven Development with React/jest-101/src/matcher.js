import jsonpath from "jsonpath";

const author = {
  name: "Juntao Qiu",
  address: "Xian, Shaanxi, China",
  projects: [
    { name: "ThoughtWorks University" },
    { name: "ThoughtWorks Core Business Beach" },
  ],
};

const resultProjects = jsonpath.query(author, "$.projects");

console.log(JSON.stringify(resultProjects));

const resultName = jsonpath.query(author, "$.projects[0].name");

console.log(resultName);

const resultAddress = jsonpath.query(author, "$.projects[0].address");

console.log(resultAddress);
