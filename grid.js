// scripts.js
const dataTable = document.getElementById('dataTable');
const searchInput = document.getElementById('searchInput');
const addRowBtn = document.getElementById('addRowBtn');
let data = []; // Sample data

// Generate sample data
for (let i = 1; i <= 50; i++) {
    data.push({
        col1:`Row ${i}`,
        col2: `Value ${i}`,
        col3: `Data ${i}`,
        col4: `Info ${i}`,
        col5: `Item ${i}`
    });
}

// Function to render table rows
function renderTableRows() {
    const filteredData = filterData(data);
    dataTable.innerHTML = '';
    filteredData.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td contenteditable>${row.col1}</td>
            <td contenteditable>${row.col2}</td>
            <td contenteditable>${row.col3}</td>
            <td contenteditable>${row.col4}</td>
            <td contenteditable>${row.col5}</td>
            <td><button class="btn btn-danger btn-sm delete-btn">Delete</button></td>
        `;
        dataTable.appendChild(tr);
    });

    const deleteBtns = document.querySelectorAll('.delete-btn');
    deleteBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            deleteRow(index);
        });
    });
}

// Function to filter data based on search input
function filterData(data) {
    const searchTerm = searchInput.value.toLowerCase();
    return data.filter(row => {
        return Object.values(row).some(value => value.toLowerCase().includes(searchTerm));
    });
}

// Event listener for search input
searchInput.addEventListener('input', () => {
    renderTableRows();
});

// Event listener for add row button
addRowBtn.addEventListener('click', () => {
    data.push({ col1: '', col2: '', col3: '', col4: '', col5: '' });
    renderTableRows();
});

//
function deleteRow(index) {
    data.splice(index, 1);
    renderTableRows();
}

// Initial render
renderTableRows();