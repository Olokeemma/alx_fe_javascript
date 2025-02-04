// Array of all Nigerian States and Abuja
const states = [
    "Abia", "Abuja", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", 
    "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", 
    "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", 
    "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", 
    "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"
  ];
  
  // Function to populate the state dropdown
  function populateStates() {
    const stateSelect = document.getElementById('state');
    states.forEach(state => {
      const option = document.createElement('option');
      option.value = state;
      option.textContent = state;
      stateSelect.appendChild(option);
    });
  }
  
  // Call the function to populate states
  populateStates();
  
  // Handling form submission
  document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents page reload on form submission
    
    const age = document.getElementById('age').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const state = document.getElementById('state').value;
  
    if(age && phone && education && state) {
      alert("Registration Successful!\n" + 
        "Age: " + age + "\n" + 
        "Phone: " + phone + "\n" + 
        "Education/Skill: " + education + "\n" + 
        "State: " + state);
      // Optionally, you can send this data to a backend server
    } else {
      alert("Please fill in all fields.");
    }
  });
  