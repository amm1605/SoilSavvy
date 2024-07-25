document.addEventListener('DOMContentLoaded', () => {
    const cropForm = document.getElementById('crop-form');
    const cropList = document.getElementById('crop-list');

    cropForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const cropName = document.getElementById('crop-name').value;
        const soilCondition = document.getElementById('soil-condition').value;
        const growthStage = document.getElementById('growth-stage').value;

        const cropItem = document.createElement('li');
        cropItem.innerHTML = `
            <span>${cropName} - Soil: ${soilCondition}, Growth Stage: ${growthStage}</span>
            <button class="delete-btn">Delete</button>
        `;

        cropList.appendChild(cropItem);

        cropForm.reset();

        const deleteBtn = cropItem.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            cropList.removeChild(cropItem);
        });
    });
});
