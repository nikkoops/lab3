// Project class
class Project {
    constructor(name, description, technologies) {
        this.name = name;
        this.description = description;
        this.technologies = technologies;
    }

    display() {
        // Display project details on the webpage
    }
}

// Usage
let project1 = new Project("Project 1", "Description of Project 1", ["HTML", "CSS", "JavaScript"]);