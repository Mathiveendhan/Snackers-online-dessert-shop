function getBotResponse(input) {
    // Simple responses
    if (input == "hello") {
        return "Hello there! What can I do for you?";
    } else if (input == "hi") {
        return "Hi there! What can I do for you?";
    } else if (input == "commands") {
        return "Keywords/Commands: <br/><br/> <strong>menu</strong> - it will show our menu. <br/> <strong>about</strong> - it will show the 'about us'. <br/> <strong>contact</strong>- it will show 'contact info'. <br/> <strong>commands</strong> - it will show 'keyword'. <br/> <strong>how to order</strong> - it will show the instruction. <br/> <strong>location</strong> - it will show our address.";
    } else if (input == "menu") {
        return "Here's our menu: <br /><br /> Waffle - ₹45.00 <br /> Pancake - ₹120.00 <br /> Tiramisu - ₹70.00 <br />Apple pie - ₹95.00 <br /> Brownie - ₹80.00 <br /> Crumbrule - ₹90.00 <br /> Baklava - ₹75.00 <br /> Chocolava Cake - ₹85.00 <br /> Puttu Ice Cream - ₹70.00 <br />  Donuts - ₹80.00  <br /> Crepe - ₹85.00  <br /> Choco Sundae - ₹80.00  <br /> Kunafa - ₹55.00  <br /> Pudding - ₹35.00 <br /> Mochi - ₹80.00 <br /> Makaruns - ₹85.00  <br /> Tresleches - ₹80.00  <br /> Donuts - ₹80.00  <br /> Chocolate Milkshake - ₹100.00 ";
    } else if (input == "about") {
        return "Hi there! <br /><br /> <strong>Sneakers</strong> is a popular Desert shop and Located in Chennai,TamilNadu.";
    } else if (input == "contact") {
        return "Here's our contact information: <br /><br /> <strong>Email:</strong> Sneakers@gmail.com <br /> <strong>Phone Number:</strong> 0917 134 1422 <br /> <strong>Messenger:</strong> @Sneakers <br /> <strong>Address:</strong> Gandhi Street,Chennai,TamilNadu,India ";
    } else if (input == "how to order") {
        return "Hi There! <br /><br /> To order, you can go to our <strong>Menu</strong> section and click the <strong'Add to Cart'></strong> button of your choice. <br /><br /> I hope you understand. Thank you so much!";
    } else if (input == "location") {
        return "Here's our address: <strong>Gandhi Street,Chennai,TamilNadu,India</strong>";

    /*
    } else if (input == "hi") {
        return "Hi there! What can I do for you?";
    } else if (input == "hi") {
        return "Hi there! What can I do for you?";
    } else if (input == "hi") {
        return "Hi there! What can I do for you?";
    } else if (input == "hi") {
        return "Hi there! What can I do for you?";
    } else if (input == "hi") {
        return "Hi there! What can I do for you?";
    } else if (input == "hi") {
        return "Hi there! What can I do for you?";
    } else if (input == "hi") {
        return "Hi there! What can I do for you?";
    */
   
    } else {
        return "Try asking something else!";
    }
}