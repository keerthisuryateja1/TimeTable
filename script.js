const timetableData = {
    '9:00 - 10:00': ['CSPD (1115)', 'CSPD (1115)', 'DAALAB (1106)', 'PASLAB (1106)', 'PAS (1115)'],
    '10:00 - 11:00': ['MGD (1216)', 'CSPD (1115)', 'DAALAB (1106)', 'PASLAB (1106)', 'DBMS (1215)'],
    '11:00 - 12:00': ['GENAI (1215)', 'DBMSLAB (1210)', 'No class', 'DAALAB (1106)', 'DAA (1215)'],
    '12:00 - 1:00': ['DBMS (1115)', 'DBMSLAB (1210)', 'No class', 'DAALAB (1106)', 'GENAI LAB (1007)'],
    '1:00 - 2:00': ['No class', 'No class', 'CSPD (1115)', 'No class', 'GENAI LAB (1007)'],
    '2:00 - 3:00': ['PAS (1115)', 'GENAI (1215)', 'CSPD (1115)', 'No class', 'GENAI (1215)'],
    '3:00 - 4:00': ['DAALAB (1106)', 'DAA (1215)', 'No class', 'DAA (1215)', 'PAS (1115)'],
    '4:00 - 5:00': ['DAALAB (1106)', 'No class', 'No class', 'DBMS (1207)', 'PAS (1115)']
  };
  
  const tableBody = document.querySelector('#timetable tbody');
  
  for (const [time, subjects] of Object.entries(timetableData)) {
    const row = document.createElement('tr');
    const timeCell = document.createElement('td');
    timeCell.textContent = time;
    row.appendChild(timeCell);
  
    subjects.forEach(subject => {
      const subjectCell = document.createElement('td');
      subjectCell.textContent = subject || 'No class';
      row.appendChild(subjectCell);
    });
  
    tableBody.appendChild(row);
  }
  