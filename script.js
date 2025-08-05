let appointmentCount = 0;

document.getElementById('addAppointment').addEventListener('click', function() {
    const patientName = document.getElementById('patientName').value;
    const appointmentDate = document.getElementById('appointmentDate').value;

    if (patientName && appointmentDate) {
        const appointmentList = document.getElementById('appointmentList');
        const li = document.createElement('li');
        li.textContent = `${patientName} - ${new Date(appointmentDate).toLocaleString()}`;
        
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Eliminar';
        removeBtn.className = 'remove-btn';
        removeBtn.onclick = function() {
            appointmentList.removeChild(li);
            appointmentCount--;
            updateAppointmentCount();
        };

        li.appendChild(removeBtn);
        appointmentList.appendChild(li);

        appointmentCount++;
        updateAppointmentCount();

        // Limpiar los campos
        document.getElementById('patientName').value = '';
        document.getElementById('appointmentDate').value = '';
    } else {
        alert('Por favor, complete todos los campos.');
    }
});

function updateAppointmentCount() {
    document.getElementById('appointmentCount').textContent = appointmentCount;
}
