// Array to hold the quotes
let quotes = [
    { text: "The best way to predict the future is to create it.", category: "Inspiration" },
    { text: "Life is 10% what happens to us and 90% how we react to it.", category: "Motivation" },
    { text: "Success is not the key to happiness. Happiness is the key to success.", category: "Happiness" }
  ];
  function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
  
    const quoteDisplay = document.getElementById("quoteDisplay");
    quoteDisplay.innerHTML = `<p><strong>${quote.category}</strong>: "${quote.text}"</p>`;
    document.getElementById("newQuote").addEventListener("click", showRandomQuote);
    function addQuote() {
        const newQuoteText = document.getElementById("newQuoteText").value;
        const newQuoteCategory = document.getElementById("newQuoteCategory").value;
      
        if (newQuoteText && newQuoteCategory) {
          // Add the new quote to the array
          quotes.push({ text: newQuoteText, category: newQuoteCategory });
      
          // Clear the form inputs
          document.getElementById("newQuoteText").value = "";
          document.getElementById("newQuoteCategory").value = "";
      
          // Optionally, display the new quote immediately
          showRandomQuote();
        } else {
          alert("Please enter both quote and category.");
        }
      }
      document.getElementById("addQuote").addEventListener("click", addQuote);
      let quotes = [
        { text: "The best way to predict the future is to create it.", category: "Inspiration" },
        { text: "Life is 10% what happens to us and 90% how we react to it.", category: "Motivation" },
        { text: "Success is not the key to happiness. Happiness is the key to success.", category: "Happiness" }
      ];
      
      // Function to display a random quote
      function showRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const quote = quotes[randomIndex];
      
        const quoteDisplay = document.getElementById("quoteDisplay");
        quoteDisplay.innerHTML = `<p><strong>${quote.category}</strong>: "${quote.text}"</p>`;
      }
      
      // Event listener for the "Show New Quote" button
      document.getElementById("newQuote").addEventListener("click", showRandomQuote);
      
      // Function to add a new quote
      function addQuote() {
        const newQuoteText = document.getElementById("newQuoteText").value;
        const newQuoteCategory = document.getElementById("newQuoteCategory").value;
      
        if (newQuoteText && newQuoteCategory) {
          // Add the new quote to the array
          quotes.push({ text: newQuoteText, category: newQuoteCategory });
      
          // Clear the form inputs
          document.getElementById("newQuoteText").value = "";
          document.getElementById("newQuoteCategory").value = "";
      
          // Optionally, display the new quote immediately
          showRandomQuote();
        } else {
          alert("Please enter both quote and category.");
        }
      }
      // Array to hold the quotes
let quotes = [
    { text: "The best way to predict the future is to create it.", category: "Inspiration" },
    { text: "Life is 10% what happens to us and 90% how we react to it.", category: "Motivation" },
    { text: "Success is not the key to happiness. Happiness is the key to success.", category: "Happiness" }
  ];
  
  // Function to display a random quote
  function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
  
    const quoteDisplay = document.getElementById("quoteDisplay");
    quoteDisplay.innerHTML = `<p><strong>${quote.category}</strong>: "${quote.text}"</p>`;
  }
  
  // Function to create the Add Quote form dynamically
  function createAddQuoteForm() {
    const formContainer = document.getElementById("formContainer");
  
    // Create the form elements dynamically
    const newQuoteText = document.createElement("input");
    newQuoteText.id = "newQuoteText";
    newQuoteText.type = "text";
    newQuoteText.placeholder = "Enter a new quote";
  
    const newQuoteCategory = document.createElement("input");
    newQuoteCategory.id = "newQuoteCategory";
    newQuoteCategory.type = "text";
    newQuoteCategory.placeholder = "Enter quote category";
  
    const addQuoteButton = document.createElement("button");
    addQuoteButton.textContent = "Add Quote";
    addQuoteButton.addEventListener("click", addQuote);
  
    // Append form elements to the form container
    formContainer.appendChild(newQuoteText);
    formContainer.appendChild(newQuoteCategory);
    formContainer.appendChild(addQuoteButton);
  }
  
  // Function to add a new quote
  function addQuote(event) {
    event.preventDefault();
  
    const newQuoteText = document.getElementById("newQuoteText").value;
    const newQuoteCategory = document.getElementById("newQuoteCategory").value;
  
    if (newQuoteText && newQuoteCategory) {
      // Add the new quote to the array
      quotes.push({ text: newQuoteText, category: newQuoteCategory });
  
      // Clear the form inputs
      document.getElementById("newQuoteText").value = "";
      document.getElementById("newQuoteCategory").value = "";
  
      // Optionally, display the new quote immediately
      showRandomQuote();
    } else {
      alert("Please enter both quote and category.");
    }
  }
  
  // Event listener for the "Show New Quote" button
  document.getElementById("newQuote").addEventListener("click", showRandomQuote);
  
  // Initialize the page with the Add Quote form
  document.addEventListener("DOMContentLoaded", function() {
    createAddQuoteForm();
  });
  