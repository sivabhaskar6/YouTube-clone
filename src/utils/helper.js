export const formatViewCount = (views) => {
  const num = Number(views);

  if (num >= 1_000_000_000) {
    return `${(num / 1_000_000_000)
      .toFixed(1)
      .replace(".0", "")}B`;
  }

  if (num >= 1_000_000) {
    return `${(num / 1_000_000)
      .toFixed(1)
      .replace(".0", "")}M`;
  }

  if (num >= 1_000) {
    return `${(num / 1_000)
      .toFixed(1)
      .replace(".0", "")}K`;
  }

  return num.toString();
};

const liveChatMessages = [
    { username: "Rahul", message: "Hello everyone! 👋🔥❤️" },
    { username: "Priya", message: "Hiiiii guys 😍😍😍" },
    { username: "Arjun", message: "This stream is 🔥🔥🔥" },
    { username: "Sneha", message: "Hello from Hyderabad ❤️🙌" },
    { username: "Kiran", message: "Wowww 😱 this is amazing!" },
    { username: "Vikram", message: "Great explanation bro! 👏👏🔥" },
    { username: "Ananya", message: "This is really helpful 🙌😊❤️" },
    { username: "Rohit", message: "First time watching this stream 😎🔥" },
    { username: "Meena", message: "Hello everyone 👋👋😊" },
    { username: "Sanjay", message: "Waiting for the next topic 👀🔥" },

    { username: "Divya", message: "Amazing content! ❤️🔥👏" },
    { username: "Naveen", message: "Can you share the code? 🙏💻" },
    { username: "Harsha", message: "That was a nice explanation 😍👏" },
    { username: "Swathi", message: "Hi everyoneee 👋😊❤️" },
    { username: "Aditya", message: "Good evening everyone 🌙😊" },
    { username: "Pooja", message: "This makes so much sense now 😍🙌" },
    { username: "Manoj", message: "Watching from Bangalore 🌆🔥" },
    { username: "Keerthi", message: "🔥🔥🔥🔥🔥" },
    { username: "Abhishek", message: "Very clear explanation 👏💯" },
    { username: "Lakshmi", message: "Thank you so much 🙏❤️" },

    { username: "Varun", message: "Can you explain the previous part? 🤔" },
    { username: "Neha", message: "Hello chat! 👋😄" },
    { username: "Sai", message: "Nice stream 👍🔥" },
    { username: "Deepak", message: "I finally understood it 😂🙌" },
    { username: "Akhil", message: "This is exactly what I was looking for 😍🔥" },
    { username: "Riya", message: "Great work! 👏👏👏" },
    { username: "Tarun", message: "Anyone here from Chennai? 👀" },
    { username: "Swetha", message: "Yes! Chennai here 😎❤️" },
    { username: "Pranav", message: "When will the next stream be? 🗓️👀" },
    { username: "Nikhil", message: "Waiting for the demo 😍🔥" },

    { username: "Ayesha", message: "Really interesting topic 🤩👏" },
    { username: "Gowtham", message: "Can you slow down a little? 😅🙏" },
    { username: "Tejas", message: "Now I understand the concept 😎💯" },
    { username: "Madhavi", message: "Excellent explanation 👏🔥❤️" },
    { username: "Surya", message: "Good morning everyone ☀️😊" },
    { username: "Bhavya", message: "This stream is amazing 😍🔥🔥" },
    { username: "Rahul", message: "Can we get the notes? 📚🙏" },
    { username: "Karthik", message: "Thanks for explaining! 🙏❤️" },
    { username: "Ishita", message: "❤️❤️❤️❤️❤️" },
    { username: "Varsha", message: "Keep going! 🔥🔥🔥💪" },

    { username: "Ajay", message: "What language are you using? 🤔💻" },
    { username: "Harini", message: "JavaScript ❤️💛💙🔥" },
    { username: "Yash", message: "React is awesome ⚛️🔥🔥" },
    { username: "Nandini", message: "I am learning React too 😍💻" },
    { username: "Ravi", message: "Nice UI! 👌🔥" },
    { username: "Keerthan", message: "Looks exactly like YouTube chat 😱🔥" },
    { username: "Bhanu", message: "How did you implement this? 🤔💻" },
    { username: "Akshara", message: "The scrolling is smooth 😍👌" },
    { username: "Dinesh", message: "Nice project bro! 🔥👏" },
    { username: "Sahil", message: "Can you upload it to GitHub? 🐙💻🙏" },

    { username: "Manya", message: "Following this project 👀🔥" },
    { username: "Nikhita", message: "Very useful stream 🙌❤️" },
    { username: "Ramesh", message: "Hello from Vijayawada 👋❤️" },
    { username: "Anil", message: "Great job! 👏👏🔥" },
    { username: "Tejaswini", message: "I joined just now 😅👋" },
    { username: "Suresh", message: "What did I miss? 😭😂" },
    { username: "Kavya", message: "You missed the Redux explanation 😂💻" },
    { username: "Rohan", message: "Can someone explain this? 🤔🙏" },
    { username: "Aarav", message: "I can explain it 😎👍" },
    { username: "Isha", message: "Thank you everyone ❤️🙏" },

    { username: "Vamsi", message: "This community is great ❤️🔥🙌" },
    { username: "Siddharth", message: "Amazing stream today 🤩🔥" },
    { username: "Navya", message: "I learned something new today 📚😍" },
    { username: "Chaitanya", message: "This is useful for interviews 💼🔥" },
    { username: "Ritika", message: "Definitely! 💯💯" },
    { username: "Abhinav", message: "Preparing for interviews too 😭😂" },
    { username: "Pavan", message: "All the best bro! 💪🔥❤️" },
    { username: "Shruthi", message: "Good luck everyone 🍀❤️" },
    { username: "Darshan", message: "Nice explanation 👏😊" },
    { username: "Manasa", message: "Please continue 🙏👀" },

    { username: "Vineeth", message: "Watching carefully 👀🍿" },
    { username: "Sanjana", message: "This is interesting 🤩🔥" },
    { username: "Lokesh", message: "Can you give an example? 🤔🙏" },
    { username: "Preethi", message: "Example would be helpful 😊👍" },
    { username: "Karthik", message: "Yes please! 🙏🔥" },
    { username: "Raghu", message: "Waiting for the example 👀🍿" },
    { username: "Mithun", message: "That example was perfect 💯🔥👏" },
    { username: "Nisha", message: "Now it's clear 😍🙌" },
    { username: "Aman", message: "Thanks bro! ❤️🔥" },
    { username: "Sakshi", message: "🔥🔥 Great explanation 🔥🔥" },

    { username: "Pallavi", message: "Writing this down 📝📚😊" },
    { username: "Ashwin", message: "Very useful information 💯👏" },
    { username: "Komal", message: "I have a question 🤔🙋‍♀️" },
    { username: "Rohit", message: "Go ahead 😄👍" },
    { username: "Komal", message: "Why do we use useRef here? 🤔💻" },
    { username: "Ashok", message: "For keeping the reference to the DOM 👍💻" },
    { username: "Komal", message: "Got it, thanks! 😍🙏" },
    { username: "Harish", message: "React hooks are powerful ⚛️🔥" },
    { username: "Pooja", message: "Absolutely! 💯❤️" },
    { username: "Rakesh", message: "This project is getting better 🚀🔥" },

    { username: "Anusha", message: "I like the design 😍🎨" },
    { username: "Vishal", message: "Looks clean 👍✨" },
    { username: "Tanvi", message: "The live chat is nice ❤️🔥" },
    { username: "Suraj", message: "Can we add emojis? 😂🔥❤️" },
    { username: "Aditi", message: "😂😂😂😂😂" },
    { username: "Rahul", message: "Of course! 😎👍" },
    { username: "Mohan", message: "Nice feature 🔥👏" },
    { username: "Sonia", message: "Hello again! 👋😂" },
    { username: "Krishna", message: "Watching from Mumbai 🌆❤️" },
    { username: "Akhil", message: "Hello Mumbai! 👋🔥" },

    { username: "Deepa", message: "Watching from Kerala 🌴❤️" },
    { username: "Vijay", message: "Hello Kerala! 😍🙌" },
    { username: "Ravi", message: "Where is everyone watching from? 🌍👀" },
    { username: "Aravind", message: "Hyderabad 🔥❤️" },
    { username: "Meghana", message: "Bangalore here 😎🌆" },
    { username: "Suresh", message: "Chennai 🙌🔥" },
    { username: "Pavan", message: "Vizag! 🌊❤️" },
    { username: "Riya", message: "Nice to see everyone here 🥰❤️" },
    { username: "Sanjay", message: "Great community! 🙌🔥" },
    { username: "Divya", message: "Yes ❤️❤️❤️" },

    { username: "Naveen", message: "Let's continue 🚀🔥" },
    { username: "Harsha", message: "Ready! 😎💪" },
    { username: "Sneha", message: "Let's gooooo 🔥🔥🔥" },
    { username: "Kiran", message: "Waiting... 👀🍿" },
    { username: "Aditya", message: "What's next? 🤔🔥" },
    { username: "Priya", message: "Next topic looks interesting 😍👀" },
    { username: "Arjun", message: "I am ready 💪🔥" },
    { username: "Vikram", message: "Let's learn! 📚🚀" },
    { username: "Ananya", message: "This is fun 😂❤️" },
    { username: "Rohit", message: "Definitely 😄🔥" },

    { username: "Meena", message: "Can you explain slowly? 😅🙏" },
    { username: "Sai", message: "Sure bro 👍😊" },
    { username: "Nikhil", message: "Thanks! ❤️🙌" },
    { username: "Swathi", message: "Very helpful 💯🔥" },
    { username: "Manoj", message: "I am taking notes 📝👀" },
    { username: "Keerthi", message: "Same here 😂📚" },
    { username: "Abhishek", message: "Interview preparation is going well 💼🔥" },
    { username: "Lakshmi", message: "All the best! 🍀❤️" },
    { username: "Varun", message: "Thank you 🙏🙏🙏" },
    { username: "Neha", message: "This is amazing 😍🔥" },

    { username: "Tarun", message: "Can you show the code? 💻👀" },
    { username: "Pranav", message: "Yes, please show it 🙏🔥" },
    { username: "Ayesha", message: "Waiting for the code 👀💻" },
    { username: "Gowtham", message: "This is really good 👏🔥" },
    { username: "Tejas", message: "I will try this myself 💪💻" },
    { username: "Madhavi", message: "Good idea 👍😊" },
    { username: "Surya", message: "Practice makes perfect 💯💪" },
    { username: "Bhavya", message: "Exactly! 😍🔥" },
    { username: "Ajay", message: "Can we add dark mode? 🌙🖤" },
    { username: "Harini", message: "Dark mode would look great 😎🖤🔥" },

    { username: "Yash", message: "I agree 💯👍" },
    { username: "Nandini", message: "Maybe later 😂❤️" },
    { username: "Ravi", message: "Good stream! 🔥👏" },
    { username: "Keerthan", message: "Keep it up! 💪🔥" },
    { username: "Bhanu", message: "Subscribed! 🔔❤️🔥" },
    { username: "Akshara", message: "Nice! 😍👍" },
    { username: "Dinesh", message: "Very impressive 🤯🔥" },
    { username: "Sahil", message: "Learning a lot today 📚❤️" },
    { username: "Manya", message: "Same here 🙌😊" },
    { username: "Nikhita", message: "Thank you for the stream 🙏❤️" },

    { username: "Ramesh", message: "Excellent work 👏💯🔥" },
    { username: "Anil", message: "👏👏👏👏👏" },
    { username: "Tejaswini", message: "This is awesome 😍🔥❤️" },
    { username: "Suresh", message: "Keep going bro 💪🔥" },
    { username: "Kavya", message: "Can you explain the next part? 🤔🙏" },
    { username: "Rohan", message: "I have the same question 😂🙋" },
    { username: "Aarav", message: "Let's wait 😄🍿" },
    { username: "Isha", message: "This stream is helpful 🙌❤️" },
    { username: "Vamsi", message: "Absolutely 💯🔥" },
    { username: "Siddharth", message: "Nice work bro 👏🔥" },

    { username: "Navya", message: "Thank you! ❤️🙏" },
    { username: "Chaitanya", message: "Good content 🔥📚" },
    { username: "Ritika", message: "❤️❤️❤️❤️" },
    { username: "Abhinav", message: "Very informative 💯👏" },
    { username: "Pavan", message: "I understood it now 😍🙌" },
    { username: "Shruthi", message: "Same! 😂❤️" },
    { username: "Darshan", message: "Great explanation 🔥👏" },
    { username: "Manasa", message: "More examples please 🙏📚" },
    { username: "Vineeth", message: "Yes please! 👀🔥" },
    { username: "Sanjana", message: "Watching till the end 🍿👀" },

    { username: "Lokesh", message: "This is worth watching 💯🔥" },
    { username: "Preethi", message: "Absolutely 🔥❤️🙌" },
    { username: "Raghu", message: "Great session 👏😊" },
    { username: "Mithun", message: "Thank you everyone! 🙏❤️" },
    { username: "Nisha", message: "See you next stream 👋❤️" },
    { username: "Aman", message: "Bye everyone! 👋😭❤️" },
    { username: "Sakshi", message: "Good night! 🌙❤️" },
    { username: "Pallavi", message: "Have a great day! ☀️😊" },
    { username: "Ashwin", message: "See you soon 👋🔥" },
    { username: "Komal", message: "Bye guys 👋😂" },

    { username: "Harish", message: "That was awesome 🔥🔥🔥" },
    { username: "Sonia", message: "Loved this stream ❤️😍" },
    { username: "Krishna", message: "Until next time! 👋😊" },
    { username: "Deepa", message: "Thank you 🙏❤️" },
    { username: "Vijay", message: "Bye everyone! 👋🔥" },
    { username: "Aravind", message: "Great session today 💯👏" },
    { username: "Meghana", message: "See you next time 😍👋" },
    { username: "Sanjay", message: "Take care everyone ❤️🙏" },
    { username: "Divya", message: "Bye bye 👋❤️😂" },
    { username: "Naveen", message: "Awesome stream! 🔥🚀❤️" },

    { username: "Harsha", message: "See you guys! 👋😎" },
    { username: "Kiran", message: "Good night everyone 🌙😴❤️" },
    { username: "Priya", message: "Thanks for everything! 🙏❤️" },
    { username: "Rahul", message: "See you in the next stream 🔥🚀👋" },
    { username: "Arjun", message: "This was 🔥🔥🔥🔥" },
    { username: "Sneha", message: "Loved every minute ❤️😍🙌" },
    { username: "Vikram", message: "10/10 stream 💯🔥" },
    { username: "Ananya", message: "Absolutely amazing 🤩❤️🔥" },
    { username: "Rohit", message: "Waiting for the next one 👀🔥" },
    { username: "Meena", message: "Bye everyoneee 👋🥰❤️" }
];

export const randomMessage =() =>liveChatMessages[Math.floor(Math.random() * liveChatMessages.length)];

