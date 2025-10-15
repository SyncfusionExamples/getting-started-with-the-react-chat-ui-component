import { ChatUIComponent, MessagesDirective, MessageDirective } from '@syncfusion/ej2-react-interactive-chat';
import './App.css';

function App() {
  const managerUserModel = {
    id: "user1",
    user: "Albert"
  };

  const developerUserModel = {
    id: "user2",
    user: "Jack Michael"
  };

  const testerUserModel = {
    id: "user 3",
    user: "David",
    avatarUrl: './images/andrew.png'
  };
  return (
    <div className="container" >
      <ChatUIComponent id="chat-ui" user={developerUserModel} headerText='Project Discussion' headerIconCss='e-icons e-people'
      timeStampFormat="MMMM hh:mm a" showTimeBreak={true}>
        <MessagesDirective>
          <MessageDirective text="I’ve started integrating the Syncfusion Chat component today." author={developerUserModel} timeStamp={new Date("September 01, 2025 7:30")}></MessageDirective>
          <MessageDirective text="Good! Can you match the chat colors to our brand?" author={managerUserModel} timeStamp={new Date("September 01, 2025 7:32")}></MessageDirective>
          <MessageDirective text="Yes, I’ll customize the theme." author={developerUserModel} timeStamp={new Date("September 02, 2025 7:35")}></MessageDirective>
          <MessageDirective text="Does it support file attachments?" author={managerUserModel} timeStamp={new Date("September 02, 2025 7:39")}></MessageDirective>
          <MessageDirective text="Yes. I’ll enable that in the setup." author={developerUserModel} timeStamp={new Date("September 03, 2025 7:43")}></MessageDirective>
          <MessageDirective text="Let me know once it’s ready for testing." author={testerUserModel} timeStamp={new Date("September 03, 2025 7:45")}></MessageDirective>
          <MessageDirective text="Finishing up core features now." author={developerUserModel} timeStamp={new Date("September 04, 2025 7:48")}></MessageDirective>
          <MessageDirective text="Will basic emoji support be included?" author={managerUserModel} timeStamp={new Date("September 04, 2025 7:52")}></MessageDirective>
          <MessageDirective text="Yes, emojis are working. Images are next." author={developerUserModel} timeStamp={new Date("September 05, 2025 7:53")}></MessageDirective>
          <MessageDirective text="I’ll test on desktop and mobile when live." author={testerUserModel} timeStamp={new Date("September 05, 2025 7:56")}></MessageDirective>
          <MessageDirective text="Chat is up; please check desktop first." author={developerUserModel} timeStamp={new Date("September 05, 2025 7:58")}></MessageDirective>
        </MessagesDirective>
      </ChatUIComponent>
    </div>
  );
}
export default App;
