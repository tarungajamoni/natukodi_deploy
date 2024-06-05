import React, { useState } from "react";
import "./App.css";
import "../src/assets/css/bootstrap.min.css";
import "../src/assets/css/flex-slider.css";
import "../src/assets/css/font-awesome.css";
import "../src/assets/css/lightbox.css";
import "../src/assets/css/owl-carousel.css";
import "../src/assets/css/templatemo-klassy-cafe.css";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import SimpleChatbot from "./components/ChatBot";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import GoogleReview from './components/GoogleReview'

function App() {
  
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);
  const toggleChatbot = () => {
    setIsChatbotVisible(!isChatbotVisible);
  };
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <Contact />
      <Menu />
      <GoogleReview />
      <div className="fixed bottom-4 right-4" style={{zIndex: "9999"}}>
        <button
          onClick={toggleChatbot}
          className="bg-amber-400 p-3 rounded-full text-white">
          <ChatBubbleLeftIcon className="h-8 w-8"/>
        </button>
      </div>
      {/* Chatbot */}
      {isChatbotVisible && <SimpleChatbot />}
      <Footer />
    </div>
  );
}

export default App;
