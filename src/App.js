import { ChatEngine } from 'react-chat-engine';

import  ChatFeed  from './components/ChatFeed';
import './App.css';

const App = () => {

    return(
        <ChatEngine 
         height="100vh"
         projectID="919a0a1c-ab22-49ee-954b-32ca261f1ead"
         userName="MGAWESOME"
         userSecret="123123123"
         renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}

        />
    );
}

export default App;
