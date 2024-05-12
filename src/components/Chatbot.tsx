import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { steps } from './../lib/constant';



// Creating our own theme
const theme = {
    background: '#C9FF8F',
    headerBgColor: '#197B22',
    headerFontSize: '20px',
    botBubbleColor: '#0F3789',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#FF5733',
    userFontColor: 'white',
};
// const theme = {
//     background: '#1a1a1a', // Dark background color
//     headerBgColor: '#333', // Dark gray for header background
//     headerFontSize: '20px',
//     botBubbleColor: '#444', // Dark gray for bot messages
//     headerFontColor: 'white', // White font color for header
//     botFontColor: 'white', // White font color for bot messages
//     userBubbleColor: '#666', // Slightly lighter gray for user messages
//     userFontColor: 'white', // White font color for user messages
// };

// Set some properties of the bot
const config = {
    botAvatar: "avatar.png",
    floating: true,
};

function ChatBotContainer() {

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <ChatBot
                    headerTitle="Shopping Chatbot"
                    steps={steps}
                    {...config}

                />
            </ThemeProvider>
        </div>
    );
}

export default ChatBotContainer;
