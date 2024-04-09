document.addEventListener("DOMContentLoaded", function() {
    const rentalTypeSelect = document.getElementById('rental-type');
    const vehicleImage = document.getElementById('vehicle-image');

    fetch('data/data.json')
        .then(response => response.json())
        .then(data => {
            const rentalOptions = data;
            populateRentalOptions(rentalOptions);
            
            rentalTypeSelect.addEventListener('change', updateVehicleImage);
            
            updateVehicleImage();

            function populateRentalOptions(options) {
                options.forEach(option => {
                    const newOption = document.createElement('option');
                    newOption.textContent = option.type;
                    rentalTypeSelect.appendChild(newOption);
                });
            }

            function updateVehicleImage() {
                const selectedRental = rentalTypeSelect.value;
                const selectedOption = rentalOptions.find(option => option.type === selectedRental);
                if (selectedOption) {
                    vehicleImage.src = selectedOption.image;
                    vehicleImage.style.display = 'block'; 
                } else {
                    vehicleImage.src = ''; 
                    vehicleImage.style.display = 'none'; 
                }
            }
        })
        .catch(error => console.error('Error fetching rental data:', error));
});