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