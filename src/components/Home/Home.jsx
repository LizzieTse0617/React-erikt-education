import Profile from '../Rest/Profile';
import Subject from '../Rest/Subject';

import School from '../Rest/School';
import Online from '../Rest/Online';
import Group from '../Rest/Group';
import Introduction from '../Rest/Introduction';
import Example from '../Achievement/Example';
import Goup from '../Rest/Goup';
export default function Home() {
  return (
    <div className="home">
      <Introduction />

      <Example />
      <Profile />
      <Subject />
      <School />

      <Online />
      <Group />
      <Goup />
    </div>
  );
}
