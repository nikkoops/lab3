// Async function to fetch project data
async function fetchProjects() {
    let response = await fetch('projects.json');
    let data = await response.json();
    return data;
}

// Usage
fetchProjects().then(data => {
    // Process fetched project data
});