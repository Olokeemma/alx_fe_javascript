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
  // Load quotes from local storage (if any)
let quotes = JSON.parse(localStorage.getItem("quotes")) || [
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
  
    // Store the last viewed quote in session storage
    sessionStorage.setItem("lastViewedQuote", JSON.stringify(quote));
  }
  
  // Function to add a new quote
  function addQuote(event) {
    event.preventDefault();
  
    const newQuoteText = document.getElementById("newQuoteText").value;
    const newQuoteCategory = document.getElementById("newQuoteCategory").value;
  
    if (newQuoteText && newQuoteCategory) {
      // Add the new quote to the array
      quotes.push({ text: newQuoteText, category: newQuoteCategory });
  
      // Save the updated quotes to local storage
      saveQuotes();
  
      // Clear the form inputs
      document.getElementById("newQuoteText").value = "";
      document.getElementById("newQuoteCategory").value = "";
  
      // Optionally, display the new quote immediately
      showRandomQuote();
    } else {
      alert("Please enter both quote and category.");
    }
  }
  
  // Function to save quotes to local storage
  function saveQuotes() {
    localStorage.setItem("quotes", JSON.stringify(quotes));
  }
  
  // Function to create the Add Quote form dynamically
  function createAddQuoteForm() {
    const formContainer = document.getElementById("formContainer");
  
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
  
    formContainer.appendChild(newQuoteText);
    formContainer.appendChild(newQuoteCategory);
    formContainer.appendChild(addQuoteButton);
  }
  
  // Event listener for the "Show New Quote" button
  document.getElementById("newQuote").addEventListener("click", showRandomQuote);
  
  // Initialize the page with the Add Quote form
  document.addEventListener("DOMContentLoaded", function() {
    createAddQuoteForm();
  
    // Display the last viewed quote from session storage (if any)
    const lastViewedQuote = JSON.parse(sessionStorage.getItem("lastViewedQuote"));
    if (lastViewedQuote) {
      const quoteDisplay = document.getElementById("quoteDisplay");
      quoteDisplay.innerHTML = `<p><strong>${lastViewedQuote.category}</strong>: "${lastViewedQuote.text}"</p>`;
    }
  });
  // Function to export quotes to a JSON file
function exportToJson() {
    const jsonStr = JSON.stringify(quotes, null, 2); // Pretty print JSON
    const blob = new Blob([jsonStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
  
    // Create a temporary link to trigger the download
    const a = document.createElement("a");
    a.href = url;
    a.download = "quotes.json";
    a.click();
  
    // Clean up the object URL
    URL.revokeObjectURL(url);
  }
  
  // Add event listener for the export button
  document.getElementById("exportJson").addEventListener("click", exportToJson);
  // Function to import quotes from a JSON file
function importFromJsonFile(event) {
    const fileReader = new FileReader();
  
    fileReader.onload = function(event) {
      try {
        const importedQuotes = JSON.parse(event.target.result);
        quotes.push(...importedQuotes);  // Add the imported quotes to the current array
        saveQuotes();  // Save the updated quotes to local storage
        alert('Quotes imported successfully!');
      } catch (e) {
        alert('Failed to import quotes. Please ensure the file is a valid JSON.');
      }
    };
  
    fileReader.readAsText(event.target.files[0]);
  }
  
  // Add event listener for the file input
  document.getElementById("importFile").addEventListener("change", importFromJsonFile);
  
  