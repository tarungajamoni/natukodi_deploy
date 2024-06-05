import React from "react";
import ChatBot from "react-simple-chatbot";
import specialsData from "./specials.json";
import { ThemeProvider } from "styled-components";
import Email from "./Email";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function SimpleChatbot() {
  const theme = {
    background: "#fff",
    fontFamily: "Poppins",
    headerBgColor: "#ff6100",
    headerFontColor: "#fff",
    headerFontSize: "15px",
    botBubbleColor: "#ff6100",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "black",
    componentFontColor: "#fff",
  };

  const steps = [
    {
      id: "Greet",
      message:
        "Hello! I'm Natukodi Pulav, your friendly restaurant bot. How may I assist you today?",
      trigger: "Next",
    },
    {
      id: "Next",
      message: "May I have the pleasure of knowing your name, please?",
      trigger: "waiting1",
    },
    {
      id: "waiting1",
      user: true,
      trigger: "Name",
    },
    {
      id: "Name",
      message:
        "Hi {previousValue}, Thank you for sharing! Before we proceed, would you like to explore what Natukodi Pulav has to offer?",
      trigger: "info",
    },
    {
      id: "info",
      options: [
        {
          value: "Location",
          label: "Location",
          trigger: "Location",
        },
        { value: "Specials", label: "Today's Specials", trigger: "Specials" },
        {
          value: "Services",
          label: "Services",
          trigger: "Services",
        },
        {
          value: "Menu",
          label: "Menu",
          trigger: "Menu",
        },
        {
          value: "Reservation",
          label: "Reservation",
          trigger: "Reservation",
        },
        {
          value: "Contact",
          label: "Contact",
          trigger: "Contact",
        },
        {
          value: "Unique",
          label: "What's Unique?",
          trigger: "Unique",
        },
        {
          value: "Timings",
          label: "Timings",
          trigger: "Timings",
        },
        {
          value: "Review",
          label: "Share Guest Review",
          trigger: "ReviewPrompt",
        },
      ],
    },
    {
      id: "Location",
      message:
        "Natukodi Pulav is located at Amangal, Srisailam Highway, Rangareddy-509321",
      trigger: "maps",
    },
    {
      id: "maps",
      component: (
        <div>
          View on{" "}
          <a
            href="https://maps.app.goo.gl/8NmPsNvqa88NpMiC7"
            rel="noreferrer"
            target="_blank"
          >
            Maps
          </a>
        </div>
      ),
      trigger: "Yes/No",
    },
    {
      id: "Specials",
      component: (
        <div className="text-orange-500 text-left">
          {specialsData.map((special, index) => (
            <div key={index}>
              {index + 1}.{special}
              <br />
            </div>
          ))}
        </div>
      ),
      trigger: "Yes/No",
    },
    {
      id: "Services",
      message:
        "At Natukodi Pulav, we take pride in offering a plethora of services to enhance your dining experience. Care to explore?",
      trigger: "Yes/No",
    },
    {
      id: "Menu",
      message:
        "Our menu is just a click away! Visit our google business profile for a tantalizing preview.",
      trigger: "Yes/No",
    },
    {
      id: "Reservation",
      message:
        "Planning ahead? Natukodi Pulav is happy to accommodate your reservation needs. Would you like to secure a table?",
      trigger: "ReservationOptions",
    },
    {
      id: "ReservationOptions",
      options: [
        {
          value: "YesPhone",
          label: "Yes, via phone",
          trigger: "ReservationPhone",
        },
        {
          value: "YesEmail",
          label: "Yes, via Email",
          trigger: "Email",
        },
        {
          value: "No",
          label: "No",
          trigger: "Yes/No",
        },
      ],
    },
    {
      id: "ReservationPhone",
      message:
        "Call us now at 9000-080-285 to reserve your table! Want to know more?",
      trigger: "Yes/No",
    },
    {
      id: "Contact",
      message:
        "Need to get in touch? Feel free to contact Natukodi Pulav via email, call or connect with us on social platform",
      trigger: "ContactOptions",
    },
    {
      id: "ContactOptions",
      options: [
        {
          value: "Phone",
          label: "Call Us",
          trigger: "ReservationPhone",
        },
        {
          value: "Email",
          label: "Email Us",
          trigger: "Email",
        },
        {
          value: "Social",
          label: "Our Social Media",
          trigger: "SocialProfiles",
        },
      ],
    },
    {
      id: "Email",
      component: <Email />,
      trigger: "Yes/No",
    },
    {
      id: "SocialProfiles",
      component: (
        <div>
          Follow us on Instagram for updates and delicious posts:
          <br />
          <a
            href="https://www.instagram.com/natukodipulav/?igshid=NTc4MTIwNjQ2YQ=="
            rel="noreferrer"
            target="_blank"
          >
            Natukodi Pulav Instagram
          </a>
        </div>
      ),
      trigger: "Yes/No",
    },
    {
      id: "Unique",
      message:
        "Discover what's unique about Natukodi Pulav! Experience our signature dish, the 'Natukodi Pulav,' crafted with organically sourced ingredients from our village.",
      trigger: "Yes/No",
    },
    {
      id: "Timings",
      message:
        "Natukodi Pulav is open every day from 6 AM to 11 PM, ready to serve you delectable meals from dawn till dusk.",
      trigger: "Yes/No",
    },
    {
      id: "ReviewPrompt",
      message:
        "Curious about what others have to say? Explore guest reviews and share your own experiences with us!",
      trigger: "ReviewOptions",
    },
    {
      id: "ReviewOptions",
      options: [
        {
          value: "Yes",
          label: "Yes, Share Review",
          trigger: "ReviewLink",
        },
        {
          value: "No",
          label: "No",
          trigger: "Yes/No",
        },
      ],
    },
    {
      id: "ReviewLink",
      component: (
        <div>
          Thanks for sharing! Here's the link to leave your review:
          <br />
          <a
            href="https://maps.app.goo.gl/2X6nq7jd3TPTssZo6"
            rel="noreferrer"
            target="_blank"
          >
            View Review
          </a>
        </div>
      ),
      trigger: "Yes/No",
    },
    {
      id: "Yes/No",
      message: "Can I assist you with anything else?",
      trigger: "more info",
    },
    {
      id: "more info",
      options: [
        {
          value: "Yes",
          label: "Yes",
          trigger: "info",
        },
        {
          value: "No",
          label: "No",
          trigger: "Bye",
        },
      ],
    },
    {
      id: "Bye",
      message:
        "Thank you for chatting with Natukodi Pulav! If you have any further questions, feel free to ask. Have a great day!",
      end: true,
    },
  ];

  return (
    <div
      style={{
        textAlign: "left",
        position: "fixed",
        bottom: "4.25rem",
        right: "20px",
        zIndex: "9999",
      }}
    >
      <ThemeProvider theme={theme}>
        <ChatBot
          steps={steps}
          headerTitle="Chat with us"
          botAvatar="/assets/images/bakklassy-logo.png"
          //userAvatar="/assets/images/user-avatar.png"
        />        
      </ThemeProvider>
      <ToastContainer position="bottom-left" autoClose={2000} limit={1}/>
    </div>
  );
}

export default SimpleChatbot;
