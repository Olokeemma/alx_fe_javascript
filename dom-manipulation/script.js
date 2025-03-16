// Load quotes from local storage (if any)
let quotes = JSON.parse(localStorage.getItem("quotes")) || [
    { text: "The best way to predict the future is to create it.", category: "Inspiration" },
    { text: "Life is 10% what happens to us and 90% how we react to it.", category: "Motivation" },
    { text: "Success is not the key to happiness. Happiness is the key to success.", category: "Happiness" }
  ];
  
  // Load the last selected category from local storage
  let lastSelectedCategory = localStorage.getItem("selectedCategory") || "all";
  
  // Function to display quotes
  function displayQuotes(filteredQuotes) {
    const quoteDisplay = document.getElementById("quoteDisplay");
    quoteDisplay.innerHTML = '';
  
    if (filteredQuotes.length > 0) {
      filteredQuotes.forEach(quote => {
        quoteDisplay.innerHTML += `<p><strong>${quote.category}</strong>: "${quote.text}"</p>`;
      });
    } else {
      quoteDisplay.innerHTML = `<p>No quotes found for this category.</p>`;
    }
  }
  
  // Function to populate category filter dropdown
  function populateCategories() {
    const categoryFilter = document.getElementById("categoryFilter");
    const categories = ["all", ...new Set(quotes.map(quote => quote.category))]; // "all" option and unique categories
  
    categories.forEach(category => {
      const option = document.createElement("option");
      option.value = category;
      option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
      categoryFilter.appendChild(option);
    });
  
    // Set the last selected category in the dropdown
    categoryFilter.value = lastSelectedCategory;
  }
  
  // Function to filter quotes based on selected category
  function filterQuotes() {
    const selectedCategory = document.getElementById("categoryFilter").value;
  
    // Save the selected category in local storage
    localStorage.setItem("selectedCategory", selectedCategory);
  
    lastSelectedCategory = selectedCategory; // Update the global variable to track the selection
  
    if (selectedCategory === "all") {
      displayQuotes(quotes);
    } else {
      const filteredQuotes = quotes.filter(quote => quote.category === selectedCategory);
      displayQuotes(filteredQuotes);
    }
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
      filterQuotes();
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
  document.getElementById("newQuote").addEventListener("click", filterQuotes);
  
  // Event listener for the category filter change
  document.getElementById("categoryFilter").addEventListener("change", filterQuotes);
  
  // Initialize the page with the Add Quote form and populate categories
  document.addEventListener("DOMContentLoaded", function() {
    createAddQuoteForm();
    populateCategories();
    filterQuotes(); // Display quotes according to the last selected category
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
        quotes.push(...import
            // Load quotes from local storage (if any)
let quotes = JSON.parse(localStorage.getItem("quotes")) || [
    { text: "The best way to predict the future is to create it.", category: "Inspiration" },
    { text: "Life is 10% what happens to us and 90% how we react to it.", category: "Motivation" },
    { text: "Success is not the key to happiness. Happiness is the key to success.", category: "Happiness" }
  ];
  
  // Load the last selected category from local storage
  let lastSelectedCategory = localStorage.getItem("selectedCategory") || "all";
  
  // Function to display quotes
  function displayQuotes(filteredQuotes) {
    const quoteDisplay = document.getElementById("quoteDisplay");
    quoteDisplay.innerHTML = '';
  
    if (filteredQuotes.length > 0) {
      filteredQuotes.forEach(quote => {
        quoteDisplay.innerHTML += `<p><strong>${quote.category}</strong>: "${quote.text}"</p>`;
      });
    } else {
      quoteDisplay.innerHTML = `<p>No quotes found for this category.</p>`;
    }
  }
  
  // Function to display a random quote from the filtered list
  function showRandomQuote() {
    const filteredQuotes = getFilteredQuotes();
  
    // Generate a random index
    const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
  
    // Get the random quote
    const randomQuote = filteredQuotes[randomIndex];
  
    // Display the random quote
    const quoteDisplay = document.getElementById("quoteDisplay");
    quoteDisplay.innerHTML = `<p><strong>${randomQuote.category}</strong>: "${randomQuote.text}"</p>`;
  }
  
  // Function to get filtered quotes based on selected category
  function getFilteredQuotes() {
    const selectedCategory = document.getElementById("categoryFilter").value;
  
    // Save the selected category in local storage
    localStorage.setItem("selectedCategory", selectedCategory);
  // Mock server URL (JSONPlaceholder simulates a real server for testing purposes)
const serverUrl = "https://jsonplaceholder.typicode.com/posts"; // Using posts to simulate quotes

// Load quotes from local storage (if any)
let quotes = JSON.parse(localStorage.getItem("quotes")) || [
  { text: "The best way to predict the future is to create it.", category: "Inspiration" },
  { text: "Life is 10% what happens to us and 90% how we react to it.", category: "Motivation" },
  { text: "Success is not the key to happiness. Happiness is the key to success.", category: "Happiness" }
];

// Function to fetch data from the server (simulated by JSONPlaceholder)
async function fetchFromServer() {
  try {
    const response = await fetch(serverUrl);
    const serverData = await response.json();
    // Simulate server data structure similar to quote objects
    const serverQuotes = serverData.map(post => ({
      text: post.title, 
      category: post.body.substring(0, 20) // For demonstration, we'll take a small snippet from the body as the category
    }));
    return serverQuotes;
  } catch (error) {
    console.error("Error fetching server data:", error);
    return [];
  }
}

// Function to sync data with the server
async function syncData() {
  const serverQuotes = await fetchFromServer();
  
  // Simulate conflict resolution (server data takes precedence)
  for (let serverQuote of serverQuotes) {
    const localQuoteIndex = quotes.findIndex(quote => quote.text === serverQuote.text);

    if (localQuoteIndex === -1) {
      // Add the server quote to the local array if it's not already there
      quotes.push(serverQuote);
    } else {
      // If the quote exists locally, we'll overwrite it with the server data
      quotes[localQuoteIndex] = serverQuote;
    }
  }

  // Save the updated quotes to local storage
  saveQuotes();

  // Notify the user that data has been synced
  alert("Data has been synced with the server. Any conflicts were resolved.");
}

// Function to save quotes to local storage
function saveQuotes() {
  localStorage.setItem("quotes", JSON.stringify(quotes));
}

// Function to display quotes
function displayQuotes(filteredQuotes) {
  const quoteDisplay = document.getElementById("quoteDisplay");
  quoteDisplay.innerHTML = '';

  if (filteredQuotes.length > 0) {
    filteredQuotes.forEach(quote => {
      quoteDisplay.innerHTML += `<p><strong>${quote.category}</strong>: "${quote.text}"</p>`;
    });
  } else {
    quoteDisplay.innerHTML = `<p>No quotes found for this category.</p>`;
  }
}

// Function to display a random quote from the filtered list
function showRandomQuote() {
  const filteredQuotes = getFilteredQuotes();

  // Generate a random index
  const randomIndex = Math.floor(Math.random() * filteredQuotes.length);

  // Get the random quote
  const randomQuote = filteredQuotes[randomIndex];

  // Display the random quote
  const quoteDisplay = document.getElementById("quoteDisplay");
  quoteDisplay.innerHTML = `<p><strong>${randomQuote.category}</strong>: "${randomQuote.text}"</p>`;
}

// Function to get filtered quotes based on selected category
function getFilteredQuotes() {
  const selectedCategory = document.getElementById("categoryFilter").value;

  if (selectedCategory === "all") {
    return quotes; // Return all quotes
  } else {
    return quotes.filter(quote => quote.category === selectedCategory); // Filter by category
  }
}

// Function to create the Add Quote form dynamically
function createAddQuoteForm() {
  const formContainer = document.getElementById("formContainer");

  const newQuoteText = document.createElement("input");
  newQuoteText.id = "newQuoteText";
  newQuoteText.type = "text";
  newQuoteText.placeholder = "Enter a new quote";

  const newQuoteCategory = document.createElement("input");
  newQuoteCategory.id =
// Mock server URL (JSONPlaceholder simulates a real server for testing purposes)
const serverUrl = "https://jsonplaceholder.typicode.com/posts"; // Using posts to simulate quotes

// Load quotes from local storage (if any)
let quotes = JSON.parse(localStorage.getItem("quotes")) || [
  { text: "The best way to predict the future is to create it.", category: "Inspiration" },
  { text: "Life is 10% what happens to us and 90% how we react to it.", category: "Motivation" },
  { text: "Success is not the key to happiness. Happiness is the key to success.", category: "Happiness" }
];

// Function to fetch quotes from the simulated server
async function fetchQuot
// Mock server URL (you can replace this with your own API endpoint in a real application)
const serverUrl = "https://jsonplaceholder.typicode.com/posts"; // Using posts to simulate quotes

// Load quotes from local storage (if any)
let quotes = JSON.parse(localStorage.getItem("quotes")) || [
  { text: "The best way to predict the future is to create it.", category: "Inspiration" },
  { text: "Life is 10% what happens to us and 90% how we react to it.", category: "Motivation" },
  { text: "Success is not the key to happiness. Happiness is the key to success.", category: "Happiness" }
];

// Function to fetch quotes from the simulated server
async function fetchQuotesFromServer() {
  try {
    const response = await fetch(serverUrl);
    const serverData = await response.json();
    // Simulate server data structure similar to quote objects
    const serverQuotes = serverData.map(post => ({
      text: post.title, 
      category: post.body.substring(0, 20) // For demonstration, we'll take a small snippet from the body as the category
    }));
    return serverQuotes;
  } catch (error) {
    console.error("Error fetching server data:", error);
    return [];
  }
}

// Function to sync data with the server
async function syncData() {
  const serverQuotes = await fetchQuotesFromServer();
  
  // Simulate conflict resolution (server data takes precedence)
  for (let serverQuote of serverQuotes) {
    const localQuoteIndex = quotes.findIndex(quote => quote.text === serverQuote.text);

    if (localQuoteIndex === -1) {
      // Add the server quote to the local array if it's not already there
      quotes.push(serverQuote);
    } else {
      // If the quote exists locally, we'll overwrite it with the server data
      quotes[localQuoteIndex] = serverQuote;
    }
  }

  // Save the updated quotes to local storage
  saveQuotes();

  // Notify the user that data has been synced
  alert("Data has been synced with the server. Any conflicts were resolved.");
}

// Function to save quotes to local storage
function saveQuotes() {
  localStorage.setItem("quotes", JSON.stringify(quotes));
}

// Function to display quotes
function displayQuotes(filteredQuotes) {
  const quoteDisplay = document.getElementById("quoteDisplay");
  quoteDisplay.innerHTML = '';

  if (filteredQuotes.length > 0) {
    filteredQuotes.forEach(quote => {
      quoteDisplay.innerHTML += `<p><strong>${quote.category}</strong>: "${quote.text}"</p>`;
    });
  } else {
    quoteDisplay.innerHTML = `<p>No quotes found for this category.</p>`;
  }
}

// Function to display a random quote from the filtered list
function showRandomQuote() {
  const filteredQuotes = getFilteredQuotes();

  // Generate a random index
  const randomIndex = Math.floor(Math.random() * filteredQuotes.length);

  // Get the random quote
  const randomQuote = filteredQuotes[randomIndex];

  // Display the random quote
  const quoteDisplay = document.getElementById("quoteDisplay");
  quoteDisplay.innerHTML = `<p><strong>${randomQuote.category}</strong>: "${randomQuote.text}"</p>`;
}

// Function to get filtered quotes based on selected category
function getFilteredQuotes() {
  const selectedCategory = document.getElementById("categoryFilter").value;

  if (selectedCategory === "all") {
    return quotes; // Return all quotes
  } else {
    return quotes.filter(quote => quote.category === selectedCategory); // Filter by category
  }
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

// Event listener for the "Show New Quote" button
document.getElementById("newQuote").addEventListener("click", showRandomQuote);

// Event listener for the category filter change
document.getElementById("categoryFilter").addEventListener("change", showRandomQuote);

// Initialize the page with the Add Quote form
document.addEventListener("DOMContentLoaded", function() {
  createAddQuoteForm();
  showRandomQuote(); // Display a random quote on load
  setInterval(syncData, 5000); // Sync every 5 seconds (for simulation purposes)
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
      showRandomQuote(); // Show a random quote after import
    } catch (e) {
      alert('Failed to import quotes. Please ensure the file is a valid JSON.');
    }
  };

  fileReader.readAsText(event.target.files[0]);
}

// Add event listener for the file input
document.getElementById("importFile").addEventListener("change", importFromJsonFile);
// Mock server URL (you can replace this with your own API endpoint in a real application)
const serverUrl = "https://jsonplaceholder.typicode.com/posts"; // Using posts to simulate quotes

// Load quotes from local storage (if any)
let quotes = JSON.parse(localStorage.getItem("quotes")) || [
  { text: "The best way to predict the future is to create it.", category: "Inspiration" },
  { text: "Life is 10% what happens to us and 90% how we react to it.", category: "Motivation" },
  { text: "Success is not the key to happiness. Happiness is the key to success.", category: "Happiness" }
];

// Function to fetch quotes from the simulated server
async function fetchQuotesFromServer() {
  try {
    const response = await fetch(serverUrl);
    const serverData = await response.json();
    // Simulate server data structure similar to quote objects
    const serverQuotes = serverData.map(post => ({
      text: post.title, 
      category: post.body.substring(0, 20) // For demonstration, we'll take a small snippet from the body as the category
    }));
    return serverQuotes;
  } catch (error) {
    console.
// Mock server URL (you can replace this with your own API endpoint in a real application)
const serverUrl = "https://jsonplaceholder.typicode.com/posts"; // Using posts to simulate quotes

// Load quotes from local storage (if any)
let quotes = JSON.parse(localStorage.getItem("quotes")) || [
  { text: "The best way to predict the future is to create it.", category: "Inspiration" },
  { text: "Life is 10% what happens to us and 90% how we react to it.", category: "Motivation" },
  { text: "Success is not the key to happiness. Happiness is the key to success.", category: "Happiness" }
];

// Function to fetch quotes from the simulated server
async function fetchQuotesFromServer() {
  try {
    const response = await fetch(serverUrl);
    const serverData = await response.json();
    // Simulate server data structure similar to quote objects
    const serverQuotes = serverData.map(post => ({
      text: post.title, 
      category: post.body.substring(0, 20) // For demonstration, we'll take a small snippet from the body as the category
    }));
    return serverQuotes;
  } catch (error) {
    console.error("Error fetching server data:", error);
    return [];
  }
}

// Function to sync data with the server
async function syncData() {
  const serverQuotes = await fetchQuotesFromServer();
  
  // Simulate conflict resolution (server data takes precedence)
  for (let serverQuote of serverQuotes) {
    const localQuoteIndex = quotes.findIndex(quote => quote.text === serverQuote.text);

    if (localQuoteIndex === -1) {
      // Add the server quote to the local array if it's not already there
      quotes.push(serverQuote);
    } else {
      // If the quote exists locally, we'll overwrite it with the server data
      quotes[localQuoteIndex] = serverQuote;
    }
  }

  // Save the updated quotes to local storage
  saveQuotes();

  // Notify the user that data has been synced
  alert("Data has been synced with the server. Any conflicts were resolved.");
}

// Function to save quotes to local storage
function saveQuotes() {
  localStorage.setItem("quotes", JSON.stringify(quotes));
}

// Function to display quotes
function displayQuotes(filteredQuotes) {
  const quoteDisplay = document.getElementById("quoteDisplay");
  quoteDisplay.innerHTML = '';

  if (filteredQuotes.length > 0) {
    filteredQuotes.forEach(quote => {
      quoteDisplay.innerHTML += `<p><strong>${quote.category}</strong>: "${quote.text}"</p>`;
    });
  } else {
    quoteDisplay.innerHTML = `<p>No quotes found for this category.</p>`;
  }
}

// Function to display a random quote from the filtered list
function showRandomQuote() {
  const filteredQuotes = getFilteredQuotes();

  // Generate a random index
  const randomIndex = Math.floor(Math.random() * filteredQuotes.length);

  // Get the random quote
  const randomQuote = filteredQuotes[randomIndex];

  // Display the random quote
  const quoteDisplay = document.getElementById("quoteDisplay");
  quoteDisplay.innerHTML = `<p><strong>${randomQuote.category}</strong>: "${randomQuote.text}"</p>`;
}

// Function to get filtered quotes based on selected category
function getFilteredQuotes() {
  const selectedCategory = document.getElementById("categoryFilter").value;

  if (selectedCategory === "all") {
    return quotes; // Return all quotes
  } else {
    return quotes.filter(quote => quote.category === selectedCategory); // Filter by category
  }
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

// Function to add a new quote
async function addQuote(event) {
  event.preventDefault();

  const newQuoteText = document.getElementById("newQuoteText").value;
  const newQuoteCategory = document.getElementById("newQuoteCategory").value;

  if (newQuoteText && newQuoteCategory) {
    // Add the new quote to the array
    quotes.push({ text: newQuoteText, category: newQuoteCategory });

    // Save the updated quotes to local storage
    saveQuotes();

    // Send the new quote to the server using a POST request
    await postQuoteToServer({ text: newQuoteText, category: newQuoteCategory });

    // Clear the form inputs
    document.getElementById("newQuoteText").value = "";
    document.getElementById("newQuoteCategory").value = "";

    // Optionally, display the new quote immediately
    showRandomQuote();
  } else {
    alert("Please enter both quote and category.");
  }
}

// Function to post the new quote to the server (mock POST request)
async function postQuoteToServer(quote) {
  try {
    const response = await fetch(serverUrl, {
      method: "POST", // Use POST method to send data
      headers: {
        "Content-Type": "application/json" // Send data as JSON
      },
      body: JSON.stringify({
        title: quote.text, // Using title for the quote text (as per mock API)
        body: quote.category // Using body for the category (as per mock API)
      })
    });

    if (!response.ok) {
      throw new Error("Failed to post quote to the server");
    }

    const responseData = await response.json();
    console.log("Successfully posted quote to the server:", responseData);
  } catch (error) {
    console.error("Error posting quote to server:", error);
  }
}

// Event listener for the "Show New Quote" button
document.getElementById("newQuote").addEventListener("click", showRandomQuote);

// Event listener for the category filter change
document.getElementById("categoryFilter").addEventListener("change", showRandomQuote);

// Initialize the page with the Add Quote form
document.addEventListener("DOMContentLoaded", function() {
  createAddQuoteForm();
  showRandomQuote(); // Display a random quote on load
  setInterval(syncData, 5000); // Sync every 5 seconds (for simulation purposes)
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
      showRandomQuote(); // Show a random quote after import
    } catch (e) {
      alert('Failed to import quotes. Please ensure the file is a valid JSON.');
    }
  };

  fileReader.readAsText(event.target.files[0]);
}

// Add event listener for the file input
document.getElementById("importFile").addEventListener("change", importFromJsonFile);




   
  
  
  
  