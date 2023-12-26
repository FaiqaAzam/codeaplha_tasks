function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

function createIssue() {
    const title = document.getElementById('title').value;
    const assignee = document.getElementById('assignee').value;
    const priority = document.getElementById('priority').value;

    const issueList = document.getElementById('issue-list');

    // Create a new issue element
    const issueElement = document.createElement('div');
    issueElement.className = 'issue-table';
    issueElement.innerHTML = `
        <strong>Title:</strong> ${title}<br>
        <strong>Assignee:</strong> ${assignee}<br>
        <strong>Priority:</strong> ${priority}
    `;

    // Append the new issue to the issue list
    issueList.appendChild(issueElement);
}