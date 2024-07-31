const expenseForm = document.getElementById('expenseForm');
const expenseList = document.getElementById('expenseList');

expenseForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const currency = document.getElementById('currency').value;
    
    if (description && category && !isNaN(amount) && amount > 0) {
        const newRow = document.createElement('tr');
        
        newRow.innerHTML = `
            <td class="p-3 border-b border-gray-700">${description}</td>
            <td class="p-3 border-b border-gray-700">${category}</td>
            <td class="p-3 border-b border-gray-700">${currency} ${amount.toFixed(2)}</td>
        `;
        
        expenseList.appendChild(newRow);
        
        // Clear the form fields
        expenseForm.reset();
    } else {
        alert('Please fill out all fields correctly.');
    }
});
